/** @format */

import { FC, memo } from 'react';
import { Button, Card, Form, Input } from 'antd';
import { ESettingKey } from '@MetaAdsManager/shop-data/src/enums/ESettingKey';
import useSettingService from '../../hooks/useSettingService';
import { defaultFormProps } from '../formProps';
import ItemNumber from '../ItemNumber';
import mmFormRule from '@MetaAdsManager/form-rules';
const { TextArea } = Input;
const { SIGN_POINT, CONSUME_POINT, GOOD_COMMENT_POINT, POST_MESS_POINT, TASK_RULE, POINT_RULE } =
    ESettingKey;

interface IProps {}

const Component: FC<IProps> = (props) => {
    const { form, onFinish } = useSettingService({
        key: [SIGN_POINT, CONSUME_POINT, GOOD_COMMENT_POINT, POST_MESS_POINT, POINT_RULE, TASK_RULE]
    });

    return (
        <Form {...defaultFormProps} form={form} initialValues={{}}>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 20 }}>
                <Button type='primary' htmlType='submit' onClick={onFinish}>
                    保存
                </Button>
            </div>

            <Card title='每日签到积分设置' style={{ marginBottom: 16 }}>
                <Form.Item label='签到积分数值' name={SIGN_POINT} rules={mmFormRule.required}>
                    <ItemNumber
                        addonAfter='积分'
                        min={1}
                        max={10000}
                        precision={0}
                        extra='*最大可设置10000积分'
                    />
                </Form.Item>
            </Card>
            <Card title='消费得积分设置' style={{ marginBottom: 16 }}>
                <Form.Item label='获取积分比例' name={CONSUME_POINT} rules={mmFormRule.required}>
                    <ItemNumber
                        addonAfter='%'
                        min={1}
                        max={10000}
                        precision={0}
                        extra='*按照订单金额比例获取等额的积分，100元订单，200%比例，最终获取200积分'
                    />
                </Form.Item>
            </Card>
            <Card title='商品评论得积分设置' style={{ marginBottom: 16 }}>
                <Form.Item
                    label='商品评论审核通过后可得'
                    name={GOOD_COMMENT_POINT}
                    rules={mmFormRule.required}
                >
                    <ItemNumber
                        addonAfter='积分'
                        min={1}
                        max={10000}
                        precision={0}
                        extra='*最大可设置10000积分'
                    />
                </Form.Item>
            </Card>
            <Card title='社区发帖得积分设置' style={{ marginBottom: 16 }}>
                <Form.Item
                    label='社区发帖审核通过后可得'
                    name={POST_MESS_POINT}
                    rules={mmFormRule.required}
                >
                    <ItemNumber
                        addonAfter='积分'
                        min={1}
                        max={10000}
                        precision={0}
                        extra='*最大可设置10000积分'
                    />
                </Form.Item>
            </Card>
            <Card>
                <Form.Item label='积分规则说明' name={POINT_RULE} rules={mmFormRule.required}>
                    <TextArea
                        rows={4}
                        style={{ width: 600, height: 200 }}
                        showCount
                        placeholder=''
                        maxLength={2000}
                    />
                </Form.Item>
            </Card>
            <Card>
                <Form.Item label='任务规则说明' name={TASK_RULE} rules={mmFormRule.required}>
                    <TextArea
                        rows={4}
                        style={{ width: 600, height: 200 }}
                        showCount
                        placeholder=''
                        maxLength={2000}
                    />
                </Form.Item>
            </Card>
        </Form>
    );
};

Component.displayName = 'PayAmountRateSetting';

const PayAmountRateSetting = memo(Component);
export default PayAmountRateSetting;
