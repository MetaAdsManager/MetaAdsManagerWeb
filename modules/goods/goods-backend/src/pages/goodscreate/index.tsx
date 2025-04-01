/** @format */

import { FC, memo, useEffect, useState } from 'react';
import styles from './index.module.less';
import { formProps, IStepTwoFormDTO, TGoodData } from './const';
import { StepsForm } from '@ant-design/pro-form';
import { Button, Card, message } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import StepOne from './components/stepOne';
import { GoodsVO } from '@MetaAdsManager/backend-api/src/request/data-contracts';
import StepTwo from './components/stepTwo';
import ProFormRichText from '@MetaAdsManager/backend-pro/src/components/form/proFormRichText';
import { useGoodsCreateService as useService } from './hooks/useGoodsCreateService';
import ImageList from './components/imageList';
import { SkuColumnsRender } from './components/stepTwo/skuTable';

export interface IMMGoodsCreatePageProps {
    /**
     * 商品类型
     * 0 - 普通商品
     * 1 - 积分商品
     */
    goodsType?: number;

    service: ReturnType<typeof useService>;

    skuColumnsRender: SkuColumnsRender;

    formConfig?: {
        /** 使用运费模板 */
        enbaleExpressTemplate?: boolean;
        /** 使用积分 */
        enableScore?: boolean;
    };

    /** 项目自身 src/components 的阿里云上传 */
    upload(fileList: File[]): Promise<string[]>;
}

export { useService, ImageList };

const Component: FC<IMMGoodsCreatePageProps> = (props) => {
    const {
        loading,
        goodData,
        stepOneForm,
        stepTwoForm,
        stepThreeForm,
        handleStepTwoFormChange,
        saveGood,
        goodsSkuList,
        saleType,
    } = props.service;

    const { handleStepTwoFormFinish } = userInnerService();

    const [currentSaleType, setCurrentSaleType] = useState(saleType);

    /**
     * 复制/编辑  销售方式切换
     */
    const saleTypeChange = () => {
        const newSaleType = stepOneForm.getFieldValue('saleType');
        if (currentSaleType === newSaleType) return;
        setCurrentSaleType(stepOneForm.getFieldValue('saleType'));
        const newGoodsSkuList = goodsSkuList.map((item) => {
            const children = item.goodsSkuBuyerList || [];
            const buyerList = children.map((x) => ({
                ...x,
                score: null, // 拿货价 - 积分
                salesPrice: null // 拿货价 - 价格
            }));
            return {
                ...item,
                salesPrice: null, // 销售价 - 价格
                saleScore: null, // 销售价 - 积分
                goodsSkuBuyerList: buyerList
            };
        });
        stepTwoForm.setFieldsValue({ goodsSkuList: newGoodsSkuList });
    };

    useEffect(() => {
        setCurrentSaleType(saleType);
    }, [saleType]);

    return (
        <PageContainer className={styles.goodsDetailStyle} loading={loading}>
            <Card>
                <StepsForm<TGoodData>
                    formProps={formProps}
                    onFinish={saveGood}
                    submitter={{
                        render: (props) => {
                            return {
                                0: [
                                    <Button key='back' onClick={() => window.history.back()}>
                                        返回
                                    </Button>,
                                    <Button
                                        key='next'
                                        type='primary'
                                        onClick={() => {
                                            saleTypeChange();
                                            props.onSubmit?.();
                                        }}
                                    >
                                        下一步
                                    </Button>
                                ],
                                1: [
                                    <Button key='pre' onClick={() => props.onPre?.()}>
                                        上一步
                                    </Button>,
                                    <Button
                                        key='next2'
                                        type='primary'
                                        onClick={() => props.onSubmit?.()}
                                    >
                                        下一步
                                    </Button>
                                ],
                                2: [
                                    <Button key='pre1' onClick={() => props.onPre?.()}>
                                        上一步
                                    </Button>,
                                    <Button
                                        key='submit'
                                        type='primary'
                                        onClick={() => props.onSubmit?.()}
                                    >
                                        提交
                                    </Button>
                                ]
                            }[props.step];
                        }
                    }}
                >
                    <StepsForm.StepForm<GoodsVO>
                        name='base'
                        title='基础信息'
                        form={stepOneForm}
                        initialValues={goodData}
                        wrapperCol={{ span: 8 }}
                    >
                        <StepOne {...props} />
                    </StepsForm.StepForm>

                    <StepsForm.StepForm<IStepTwoFormDTO>
                        name='goodSku'
                        title='商品规格'
                        form={stepTwoForm}
                        initialValues={goodData}
                        onFinish={handleStepTwoFormFinish}
                        onValuesChange={handleStepTwoFormChange}
                    >
                        <StepTwo
                            form={stepTwoForm}
                            skuColumnsRender={props.skuColumnsRender}
                            saleType={currentSaleType}
                        />
                    </StepsForm.StepForm>

                    <StepsForm.StepForm
                        name='goodDetail'
                        title='商品详情'
                        form={stepThreeForm}
                        initialValues={goodData}
                    >
                        <ProFormRichText
                            label='商品介绍'
                            name='goodContet'
                            rules={[{ required: true }]}
                            upload={props.upload}
                        />
                    </StepsForm.StepForm>
                </StepsForm>
            </Card>
        </PageContainer>
    );
};

const MMGoodsCreatePage = memo(Component);
export default MMGoodsCreatePage;

function userInnerService() {
    /**
     * 规格表单点击下一步校验
     */
    const handleStepTwoFormFinish = async (formData: IStepTwoFormDTO) => {
        const { goodsSkuList = [] } = formData;
        if (!goodsSkuList.some((item) => item.enabled)) {
            message.warn('请至少启用一个sku');
            return false;
        }
        return true;
    };

    return {
        handleStepTwoFormFinish
    };
}
