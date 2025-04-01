/** @format */

import { FC, memo, useEffect, useMemo, useRef, useState } from 'react';
import { Button, Card, Form, Radio, Space, message } from 'antd';
import AreaTable from './components/areaTable';
import { IFormValues } from './components/interface';
import { translateAllArea, mergeAllArea, getCityTree } from './components/utils';
import { useSuperLock } from '@MetaAdsManager/utils/src/hooks/useSuperLock';
import { PageContainer } from '@ant-design/pro-layout';
import city from '@MetaAdsManager/backend-pro/assets/json/district.json';
import {
    ProFormCheckbox,
    ProFormDependency,
    ProFormDigit,
    ProFormRadio,
    ProFormText
} from '@ant-design/pro-form';
import { defaultAllArea, IDetailProps, EShippingType, OShippingType } from './const';
import mmFormRule from '@MetaAdsManager/form-rules';
import { api } from '@MetaAdsManager/backend-api';
import {
    ExpressTemplateDetailOutputDto,
    ExpressTemplateAreaCreateInputDto,
    ExpressTemplateCreateInputDto
} from '@MetaAdsManager/backend-api/src/request/data-contracts';
import ProFormLimitInput from '@MetaAdsManager/backend-pro/src/components/form/proFormLimitInput';
import { EValuationType, OValuationType } from '../../../../enums/freight/EValuationType';

const Component: FC<IDetailProps> = ({ history }) => {
    const [loading, setLoading] = useState(false);
    const [detail, setDetail] = useState<ExpressTemplateDetailOutputDto>();
    const [cityData] = useState<any[]>(city);
    const [form] = Form.useForm();

    // 配送区域缓存
    const allAreaExpressTemplate = useRef<ExpressTemplateAreaCreateInputDto[]>([defaultAllArea]);
    const expressTemplateAreas = useRef<ExpressTemplateAreaCreateInputDto[]>([]);

    const cityTree = useMemo(() => getCityTree(cityData) || [], [cityData]);

    const [onFinish, finishLoading] = useSuperLock(async () => {
        const formData = await form.validateFields();
        const data: ExpressTemplateCreateInputDto = {
            name: formData.name,
            price: formData.price,
            shippingType: formData.shippingType,
            valuationType: formData.valuationType
        };
        if (
            formData.shippingType === EShippingType.BuyerBear ||
            formData.shippingType === EShippingType.ConditionBear
        ) {
            data.expressTemplateAreas = formData.isAllArea
                ? formData.expressTemplateAreas
                : formData.expressTemplateAreas!.map((item) => ({
                      ...item,
                      area: mergeAllArea(item.area)
                  }));
        } else {
            data.expressTemplateAreas = [defaultAllArea];
        }

        if (detail?.id) {
            await api['/admin/mall/express/update_PUT']({ ...data, id: detail.id });
        } else {
            await api['/admin/mall/express/add_POST'](data);
        }
        message.success('保存成功');
        history.goBack();
    });

    useEffect(() => {
        async function init() {
            const { id } = history.location?.query || {};
            if (!id) {
                return;
            }
            setLoading(true);
            const { data = {} } = await api['/admin/mall/express/get/{id}_GET'](id);
            setDetail(data);
            // 下发数据回写需要做些处理
            const isAllArea = data.expressTemplateAreas?.some((item) => item.area === '0');
            const formData: IFormValues = { ...data, expressTemplateAreas: undefined, isAllArea };
            // 处理配送区域
            formData.expressTemplateAreas = data.expressTemplateAreas?.map((item) => ({
                ...item,
                area: isAllArea ? (item.area as any) : translateAllArea(city || [], item.area)
            }));
            form.setFieldsValue(formData);
            setLoading(false);
        }

        init();
    }, []);

    const handleValuesChange = (changeValue, values) => {
        // 如果切换的是所有地区配送。缓存之前的数据
        if (changeValue.isAllArea !== undefined) {
            if (changeValue.isAllArea) {
                expressTemplateAreas.current = values.expressTemplateAreas || [];
                form.setFieldsValue({
                    expressTemplateAreas: allAreaExpressTemplate.current
                });
            } else {
                allAreaExpressTemplate.current = values.expressTemplateAreas || [];
                form.setFieldsValue({
                    expressTemplateAreas: expressTemplateAreas.current
                });
            }
        }
        // 包邮方式
        if (
            changeValue.shippingType!! &&
            (changeValue.shippingType === EShippingType.BuyerBear ||
                changeValue.shippingType === EShippingType.SellerBear)
        ) {
            form.setFieldValue('price', null);
        }
    };

    return (
        <PageContainer
            loading={loading}
            footer={[
                <Button key='back' onClick={() => history.goBack()}>
                    取消
                </Button>,
                <Button
                    key='submit'
                    type='primary'
                    loading={finishLoading}
                    onClick={() => onFinish()}
                >
                    提交
                </Button>
            ]}
        >
            <Card>
                <Form
                    form={form}
                    labelCol={{ span: 3 }}
                    wrapperCol={{ span: 21 }}
                    initialValues={{
                        shippingType: EShippingType.BuyerBear,
                        valuationType: EValuationType.AsQty
                    }}
                    onValuesChange={handleValuesChange}
                >
                    <ProFormLimitInput
                        label='模板名称'
                        name='name'
                        maxLength={50}
                        rules={mmFormRule.required}
                    />

                    <Form.Item
                        label='包邮方式'
                        name='shippingType'
                        rules={[{ required: true, message: '请选择包邮方式' }]}
                        extra='*发生售后退款时，若非包邮订单，运费可退一次；纯积分商品无法使用满金额包邮'
                        requiredMark={false}
                    >
                        <Radio.Group>
                            {OShippingType.map((item) => (
                                <Radio value={item.value} key={item.value}>
                                    {item.label}
                                </Radio>
                            ))}
                        </Radio.Group>
                    </Form.Item>

                    <ProFormDependency name={['shippingType']}>
                        {({ shippingType }) => {
                            const sellerBear = shippingType === EShippingType.SellerBear;

                            return (
                                <>
                                    <ProFormRadio.Group
                                        label='计价方式'
                                        name='valuationType'
                                        rules={[{ required: true, message: '请选择计价方式' }]}
                                        hidden={shippingType === EShippingType.SellerBear}
                                        fieldProps={{ options: OValuationType }}
                                    />

                                    <ProFormCheckbox
                                        label='配送区域及运费'
                                        required
                                        name='isAllArea'
                                        valuePropName='checked'
                                        extra={
                                            sellerBear
                                                ? '*卖家包邮后所有地区均可配送，且买家无需支付邮费。'
                                                : '*不勾选则根据选择的可配送区域配送，未选择的地区不可配送。'
                                        }
                                        fieldProps={{ disabled: sellerBear }}
                                    >
                                        所有地区默认配送
                                    </ProFormCheckbox>
                                </>
                            );
                        }}
                    </ProFormDependency>

                    <ProFormDependency name={['shippingType', 'isAllArea', 'valuationType']}>
                        {({ shippingType, isAllArea, valuationType }) => {
                            const sellerBear = shippingType === EShippingType.SellerBear;
                            return (
                                !sellerBear && (
                                    <Form.Item
                                        label=' '
                                        colon={false}
                                        name='expressTemplateAreas'
                                        rules={[
                                            {
                                                required: true,
                                                message: '请至少添加一个配送区域及运费'
                                            }
                                        ]}
                                        hidden={sellerBear}
                                    >
                                        <AreaTable
                                            isAllArea={isAllArea}
                                            valuationType={valuationType}
                                            cityTree={cityTree}
                                            flag={shippingType === EShippingType.ConditionBear}
                                        />
                                    </Form.Item>
                                )
                            );
                        }}
                    </ProFormDependency>
                </Form>
            </Card>
        </PageContainer>
    );
};

Component.displayName = 'FreightTemplate';

const FreightTemplate = memo(Component);
export default FreightTemplate;
