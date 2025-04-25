/** @format */

import { FC, memo, useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Descriptions, Form, Select, Radio, Input, InputNumber, Button, Row, Col, message } from 'antd';
import { country, zone } from './country_zone';
import { useFetch } from '~/@yd';
const { Option } = Select;
const Component: FC = () => {
    const { post } = useFetch();
    const [form] = Form.useForm();
    const [countryData] = useState<any[]>(country);
    const [zoneData] = useState<any[]>(zone);
    const [currentPlatform, setCurrentPlatform] = useState('facebook');
    const [currentActType, setCurrentActType] = useState(1);
    const [accountNum, setAccountNum] = useState(1);
    const confirmForm = () => {
        form.validateFields().then(async (values) => {

            try {
                await post('/admin/add_account_ticket', values);
                message.success('保存成功');
            } catch (error) {
                message.error('保存失败');
            } finally {
                form.resetFields();
                form.setFieldsValue({
                    platform: 'facebook',
                    account_type: 1,
                    account_num: 1,
                });

            }

        }

        );
    }
    return (
        <PageContainer>
            <div style={{ backgroundColor: '#ffffff', padding: 20, marginTop: 20 }}>

                <Descriptions title="基础信息">
                </Descriptions>
                <Form
                    form={form}
                    initialValues={{ platform: currentPlatform, account_type: currentActType }}
                    labelCol={{ span: 3 }}
                    wrapperCol={{ span: 7 }}
                    style={{ padding: '13px' }}
                >
                    <Form.Item label="申请平台" name='platform' rules={[{ required: true }]}>
                        <Radio.Group onChange={(e) => setCurrentPlatform(e.target.value)}>
                            <Radio value={'facebook'}>Facebook</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item label="账户类型" name='account_type' rules={[{ required: true }]}>
                        <Radio.Group onChange={(e) => setCurrentActType(e.target.value)}>
                            <Radio value={1}> 国内</Radio>
                            <Radio value={2}>海外</Radio>
                        </Radio.Group>
                    </Form.Item>
                </Form>
                {/* 新户/现户申请模块 */}
                <div style={{ marginTop: '20px' }}>
                    <Descriptions title={"申请信息"}>
                    </Descriptions>
                    <Form
                        form={form}
                        initialValues={{ account_num: accountNum }}
                        labelCol={{ span: 3 }}
                        wrapperCol={{ span: 7 }}
                        style={{ padding: '13px' }}
                    >


                        <Form.Item label="国家/地区" name='country' rules={[{ required: true, message: '请选择国家/地区' }]}>
                            <Select>
                                {countryData.map((item) => (
                                    <Option key={item} value={item}>{item}</Option>
                                ))}

                            </Select>
                        </Form.Item>
                        <Form.Item label="账号时区" name="time_zone" rules={[{ required: true, message: '请选择时区' }]}>
                            <Select>
                                {zoneData.map((item) => (
                                    <Option key={item} value={item}>{item}</Option>
                                ))}

                            </Select>
                        </Form.Item>
                        <Form.Item label="账户数量" name='account_num'>
                            <InputNumber min={1} />
                        </Form.Item>
                        <Form.Item label="备注" name="mark">
                            <Input.TextArea />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" style={{ width: '28%' }} onClick={confirmForm}>
                                提交
                            </Button>
                        </Form.Item>
                    </Form>

                </div>

            </div>
        </PageContainer >
    );
};

Component.displayName = 'openAccount';

const openAccount = memo(Component);
export default openAccount;
