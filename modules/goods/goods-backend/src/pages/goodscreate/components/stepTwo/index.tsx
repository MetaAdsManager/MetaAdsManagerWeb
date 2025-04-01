/** @format */

import { FC, memo } from 'react';
import { ProFormRadio, ProFormSelect } from '@ant-design/pro-form';
import { Form, Tag, Card } from 'antd';
import { useSkuService } from '../../store';
import SkuList from './skuList';
import SkuTable, { SkuColumnsRender } from './skuTable';
import { FormInstance } from 'antd/es/form/Form';
import { ESaleTypeEnum, IStepTwoFormDTO } from '../../const';

interface IStepTwoProps {
    form: FormInstance<IStepTwoFormDTO>;
    skuColumnsRender: SkuColumnsRender;
    saleType: ESaleTypeEnum;
}

const tips = (
    <>
        <p>
            1.添加/删除新规格可能会导致已填写信息丢失，建议先设置好规格及规格标签后在填写规格信息。{' '}
        </p>
        <p>2.编辑商品时不能直接编辑库存，请通过【商品列表-&gt;库存管理】来管理库存</p>
        <p>3.规格可以设置显示/隐藏，但需要保证至少一个规格为显示状态</p>
    </>
);

const Component: FC<IStepTwoProps> = (props) => {
    const { topSkuList } = useSkuService();
    const { saleType } = props;

    return (
        <Card title='规格信息'>
            <ProFormRadio.Group
                name='uniform'
                label='规格类型'
                options={[
                    {
                        label: '统一规格',
                        value: 1
                    },
                    {
                        label: '多规格',
                        value: 0
                    }
                ]}
                rules={[{ required: true, message: '请选择规格类型' }]}
                fieldProps={{
                    onChange: (evt) => {
                        if (evt.target.value === 1) {
                            props.form.setFieldValue('specList', []);
                        }
                    }
                }}
            />

            <Form.Item noStyle shouldUpdate>
                {(form) => {
                    const uniform = form.getFieldValue('uniform');
                    return (
                        uniform === 0 && (
                            <>
                                <ProFormSelect
                                    label='选择规格'
                                    name='specList'
                                    wrapperCol={{ span: 8 }}
                                    options={topSkuList || []}
                                    rules={[{ required: true }]}
                                    fieldProps={{
                                        mode: 'multiple',
                                        showSearch: false
                                    }}
                                />

                                <Form.Item
                                    noStyle
                                    shouldUpdate={(prev, next) =>
                                        ['specList', 'specIdList'].some(
                                            (key) => prev[key] !== next[key]
                                        )
                                    }
                                >
                                    {({ getFieldValue }) => {
                                        const topSkuIds = getFieldValue('specList') || [];

                                        const topSkus =
                                            topSkuIds?.map(
                                                (id) => topSkuList.find((it) => it.value === id)!
                                            ) || [];
                                        return (
                                            !!topSkus.length &&
                                            topSkus.map((item, index) => (
                                                <Form.Item
                                                    key={item?.value || ''}
                                                    label={<Tag>{item?.label || ''}</Tag>}
                                                    wrapperCol={{ span: 8 }}
                                                    name={['specIdList', index]}
                                                    initialValue={[]}
                                                    rules={[{ required: true }]}
                                                >
                                                    <SkuList pid={item?.value || ''} />
                                                </Form.Item>
                                            ))
                                        );
                                    }}
                                </Form.Item>
                            </>
                        )
                    );
                }}
            </Form.Item>
            <Form.Item
                noStyle
                shouldUpdate={(prev, next) =>
                    ['specList', 'specIdList', 'uniform', 'saleType'].some(
                        (key) => prev[key] !== next[key]
                    )
                }
            >
                {({ getFieldValue }) => {
                    const topSkuIds = getFieldValue('specList') || [];
                    const uniform = getFieldValue('uniform');
                    const topSkus = topSkuIds?.map(
                        (id) => topSkuList.find((it) => it.value === id)!
                    );
                    return (
                        <Form.Item label='规格信息(全部必填)' name='goodsSkuList' tooltip={tips}>
                            <SkuTable
                                topSkus={topSkus}
                                skuColumnsRender={props.skuColumnsRender}
                                uniform={uniform}
                                saleType={saleType}
                            />
                        </Form.Item>
                    );
                }}
            </Form.Item>
        </Card>
    );
};

Component.displayName = 'StepTwo';

const StepTwo = memo(Component);
export default StepTwo;
