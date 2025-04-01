/** @format */

import { FC, memo, useState } from 'react';
import ProForm, {
    ProFormSelect,
    ProFormCascader,
    ProFormDigit,
    ProFormRadio,
    ProFormText,
    ProFormCheckbox,
    ProFormGroup,
    ProFormTreeSelect,
    ProFormDependency
} from '@ant-design/pro-form';
import ProFormInfo from '@MetaAdsManager/backend-pro/src/components/form/proFormInfo';
import ProFormLimitInput from '@MetaAdsManager/backend-pro/src/components/form/proFormLimitInput';
import { Form, Card, Space, Row, Col } from 'antd';
import ImageList from '../imageList';
import CoverVideo from '../coverVideo';
import { OGoodScore } from '@MetaAdsManager-modules/goods-data/src/enums/EGoodScore';
import { getGlobalData } from '@MetaAdsManager/backend-store';
import { IMMGoodsCreatePageProps } from '../..';

import convertToTree from '@MetaAdsManager/utils/src/tree/convertToTree';
import { MenuTreeOutputDto, api } from '@MetaAdsManager/backend-api';
import { useAtom } from 'jotai';
import { buyerGradeListAtom } from '../../store';
import {
    EBuyLimitQuantity,
    ESaleTypeEnum,
    EVirtualType,
    MSaleType,
    OBuyLimitQuantity
} from '../../../../enums/goods';
import { mmAdds } from '@MetaAdsManager/utils/src/mmCurrency';
import LeaveMessage from '../leave-message';

const { config } = getGlobalData('systemConfig');

interface IStepOneProps extends IMMGoodsCreatePageProps {}

const Component: FC<IStepOneProps> = (props) => {
    const { formConfig = {}, goodsType, service } = props;
    const { enbaleExpressTemplate = true, enableScore = true } = formConfig;
    const [, setBuyerGradeList] = useAtom(buyerGradeListAtom);
    const [classifyTreeData, setClassifyTreeData] = useState<MenuTreeOutputDto[]>([]);
    // 获取运费模板
    async function getExpress() {
        const { data = {} } = await api['/admin/mall/express/query_GET']({
            pageNum: 1,
            pageSize: 1000
        });
        return (data.list || []).map((it) => ({ label: it.name, value: it.id }));
    }

    /** 获取分类 */
    async function getClassify() {
        const { data = [] } = await api['/admin/mall/classify/tree_GET']({ goodsType });
        const treeData = convertToTree(data, { title: 'name', value: 'id' });
        setClassifyTreeData(treeData);
        return treeData;
    }
     /** 获取分类 */
     async function getClassifyN() {
        const { data = [] } = await api['/admin/mall/classify/tree_GET']({ goodsType });
        const treeData = convertToTree(data, { title: 'name', value: 'id' },1);
        setClassifyTreeData(treeData);
        return treeData;
    }

    /** 商品分组 */
    async function getGoodsGroup() {
        const { data } = await api['/admin/mall/group_GET']({ pageNum: 1, pageSize: 2000 });
        return data?.list || [];
    }

    /** 商品标签 */
    async function getGoodsLabel() {
        const { data } = await api['/admin/mall/tag_GET']({ pageNum: 1, pageSize: 1e5 });
        return data?.list || [];
    }

    /** 获取订货商等级 */
    async function getBuyerGrade() {
        const { data } = await api['/admin/v1/console/buyerGrade/page_GET']({
            pageNum: 1,
            pageSize: 2000
        });
        if (data) {
            let { list = [] } = data;
            list = list.sort((prev, next) => prev.sort! - next.sort!);
            const _list = list.map((item) => {
                return {
                    value: item.id,
                    label: `“${item.name}”订货商可购买`
                };
            });
            setBuyerGradeList(list);

            _list.unshift({
                value: 0,
                label: '普通会员可购买'
            });
            return _list;
        }
        setBuyerGradeList([]);
        return [];
    }

    return (
        <>
            <Card title='基本信息' style={{ marginBottom: 15 }}>
                <ProFormInfo label='商品编码' name='goodsNo' info='系统自动生成' />

                <ProFormLimitInput
                    label='商品名称'
                    name='goodsName'
                    maxLength={50}
                    rules={[{ required: true, message: '请输入商品名称' }]}
                />
                <ProFormLimitInput
                    label='商品副标题'
                    name='subtitle'
                    maxLength={50}
                    // rules={[{ required: true, message: '请输入商品副标题' }]}
                />

                <ProFormRadio.Group
                    name='virtualType'
                    label='商品类型'
                    options={[
                        {
                            label: '实物商品',
                            value: 0
                        },
                        {
                            label: '虚拟商品',
                            value: 1
                        }
                    ]}
                    rules={[{ required: true, message: '请选择商品类型' }]}
                />
                <ProFormCascader
                    label='商品分类'
                    name='classifyIds'
                    request={getClassify}
                    rules={[
                        {
                            required: true,
                            validator(_, value) {
                                if (!value.length) {
                                    return Promise.reject(new Error('请选择商品分类'));
                                } else if (value.length < config.maxClassifyLevel) {
                                    const id =
                                        value[
                                            config.maxClassifyLevel - 2 < 0
                                                ? 0
                                                : config.maxClassifyLevel - 2
                                        ];
                                    const treeItem = classifyTreeData.find(
                                        (item) => item.id === id
                                    );
                                    // 如果只有一级分类 就可以选择一级分类
                                    // 目前最多是二级
                                    // 不然的话 只能选择最后的子分类
                                    if (treeItem?.children && treeItem.children.length) {
                                        return Promise.reject(
                                            new Error(
                                                `商品只能绑定到第${config.maxClassifyLevel}级分类`
                                            )
                                        );
                                    }
                                }
                                return Promise.resolve(true);
                            }
                        }
                    ]}
                />
                 <ProFormTreeSelect
                    label='副选分类'
                    name='subClassifys'
                    request={getClassifyN}
                    fieldProps={{
                        multiple: true
                    }}
                />

                <Form.Item
                    label='商品图片'
                    name='bannerImgs'
                    rules={[{ required: true, message: '请至少选择一张图片' }]}
                >
                    <ImageList />
                </Form.Item>

                <ProFormSelect
                    label='商品标签'
                    name='tagIds'
                    request={getGoodsLabel}
                    mode='multiple'
                    fieldProps={{
                        fieldNames: {
                            label: 'name',
                            value: 'id'
                        }
                    }}
                    placeholder='请选择'
                />

                {/* {enbaleExpressTemplate && (
                    <ProFormSelect
                        label='运费模板'
                        name='expressTemplateId'
                        request={getExpress}
                        rules={[{ required: true, message: '请选择运费模板' }]}
                    />
                )}

                <ProFormDigit
                    label='排序值'
                    name='sort'
                    min={1}
                    max={99999}
                    fieldProps={{ precision: 0 }}
                />

                <ProFormRadio.Group
                    label='使用积分'
                    name='useScore'
                    options={OGoodScore}
                    rules={[{ required: true }]}
                    hidden={!config.enableScore || !enableScore}
                />
                */}
            </Card>

            <Card title='销售信息' style={{ marginBottom: 15 }}>
                <ProFormRadio.Group
                    name='saleType'
                    label='销售方式'
                    initialValue='1'
                    options={[
                        { label: '纯现金', value: String(ESaleTypeEnum.Cash) },
                        { label: '纯积分', value: String(ESaleTypeEnum.Score) },
                        { label: '现金+积分', value: String(ESaleTypeEnum.All) }
                        // {
                        //     label: '纯如是心',
                        //     value: String(ESaleTypeEnum.Rsx),
                        //     disabled: location.href.includes('goodsNo=')
                        // }
                    ]}
                />

                <ProFormDependency name={['actualSales', 'customStartSales']}>
                    {({ actualSales, customStartSales }) => {
                        return (
                            <ProFormInfo
                                label='总销量'
                                info={Math.max(mmAdds(actualSales || 0, customStartSales || 0), 0)}
                            />
                        );
                    }}
                </ProFormDependency>

                <ProFormInfo label='实际销量' name='actualSales' info='0' />
                <ProFormDigit
                    name='customStartSales'
                    label='虚拟销量'
                    placeholder=''
                    fieldProps={{ min: -99999999, max: 99999999, precision: 0 }}
                    extra='*虚拟销量支持设置为负数，虚拟销量+实际销量=前台显示销量'
                />
                <ProFormSelect
                    name='groupIds'
                    label='商品分组'
                    request={getGoodsGroup}
                    mode='multiple'
                    fieldProps={{
                        fieldNames: {
                            label: 'name',
                            value: 'id'
                        }
                    }}
                    placeholder='请选择'
                />
            </Card>
            <Card title='购买门槛' style={{ marginBottom: 15 }}>
                <ProFormDependency name={['saleType']}>
                    {({ saleType }) =>
                        saleType === `${ESaleTypeEnum.Rsx}` ? (
                            '仅订货商身份可购买'
                        ) : (
                            <>
                                <ProFormRadio.Group
                                    name='buyStatus'
                                    colSize={200}
                                    label='起购数量'
                                    options={[
                                        {
                                            label: '不限制',
                                            value: 0
                                        },
                                        {
                                            label: '限制',
                                            value: 1
                                        }
                                    ]}
                                />
                                <Form.Item shouldUpdate noStyle>
                                    {(form) =>
                                        form.getFieldValue('buyStatus') === 1 && (
                                            <Row>
                                                <Col span={20} offset={4}>
                                                    <ProFormDigit
                                                        name='buyNum'
                                                        width='lg'
                                                        label=''
                                                        placeholder=''
                                                        rules={[{ required: true }]}
                                                        fieldProps={{ addonAfter: '件起购' }}
                                                    />
                                                </Col>
                                            </Row>
                                        )
                                    }
                                </Form.Item>
                                <ProFormCheckbox.Group
                                    name='buyerGrades'
                                    layout='vertical'
                                    label='身份限制'
                                    request={getBuyerGrade}
                                    rules={[{ required: true }]}
                                />
                            </>
                        )
                    }
                </ProFormDependency>
                <ProFormRadio.Group
                    name='purchaseLimitType'
                    // colSize={200}
                    label='限购数量'
                    options={OBuyLimitQuantity}
                    rules={[{ required: true, message: '请选择限购类型' }]}
                />
                <ProFormDependency name={['purchaseLimitType']}>
                    {({ purchaseLimitType }) => {
                        return (
                            purchaseLimitType !== undefined &&
                            purchaseLimitType !== EBuyLimitQuantity.None && (
                                <ProFormDigit
                                    name='purchaseLimitQuantity'
                                    label=' '
                                    colon={false}
                                    fieldProps={{
                                        addonBefore: '限购',
                                        addonAfter: '件',
                                        precision: 0,
                                        min: 1,
                                        max: 99999999
                                    }}
                                    required={false}
                                    rules={[{ required: true, message: '请输入限购数量' }]}
                                />
                            )
                        );
                    }}
                </ProFormDependency>
            </Card>
            <ProFormDependency name={['virtualType', 'saleType']}>
                {({ virtualType, saleType }) => {
                    // 虚拟商品 无需配送
                    if (virtualType === 1) return null;
                    return (
                        <Card title='配送信息' style={{ marginBottom: 15 }}>
                            {saleType === `${ESaleTypeEnum.Rsx}` ? (
                                '包邮'
                            ) : (
                                <>
                                    <ProFormSelect
                                        name='expressTemplateId'
                                        label='运费模板'
                                        request={getExpress}
                                        placeholder='请选择'
                                        rules={[{ required: true, message: '请输入运费模板' }]}
                                    />
                                    <ProFormRadio.Group
                                        name='selfTake'
                                        label='是否支持自提'
                                        options={[
                                            { label: '否', value: 0 },
                                            { label: '是', value: 1 }
                                        ]}
                                        rules={[{ required: true }]}
                                    />
                                </>
                            )}
                        </Card>
                    );
                }}
            </ProFormDependency>

            <Card title='状态信息' style={{ marginBottom: 15 }}>
                <ProFormText
                    name='sort'
                    label='排序值'
                    placeholder=''
                    fieldProps={{ maxLength: 5 }}
                    rules={[{ required: true, message: '请输入排序值' }]}
                />
                <ProFormRadio.Group
                    name='shelved'
                    label='商品状态'
                    options={[
                        {
                            label: '下架',
                            value: false
                        },
                        {
                            label: '上架',
                            value: true
                        }
                    ]}
                    initialValue={false}
                    rules={[{ required: true, message: '请选择商品状态' }]}
                />
                <ProFormRadio.Group
                    name='frontShow'
                    label='前台可见'
                    options={[
                        {
                            label: '隐藏',
                            value: false
                        },
                        {
                            label: '显示',
                            value: true
                        }
                    ]}
                    initialValue={false}
                    rules={[{ required: true, message: '请选择前台可见' }]}
                />
            </Card>

            <ProFormDependency name={['virtualType']}>
                {({ virtualType }) =>
                    virtualType === EVirtualType.Virtual && (
                        <Card title='商品留言' style={{ marginBottom: 15 }}>
                            <ProForm.Item name='goodsMessageDTOS' noStyle>
                                <LeaveMessage goodsId={service.goodDetail.id} />
                            </ProForm.Item>
                        </Card>
                    )
                }
            </ProFormDependency>
        </>
    );
};

const StepOne = memo(Component);
export default StepOne;
