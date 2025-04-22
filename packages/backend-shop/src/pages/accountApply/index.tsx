/** @format */

import { FC, memo, useState, useEffect } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Steps, Descriptions, Form, Select, Radio, Input, Typography, Tabs, InputNumber, Table, Button, Row, Col } from 'antd';
import ImageList from './component/imageList'
import dic from './dicCode.json';
import styles from './index.module.less'
const { Step } = Steps;
const { Option } = Select;
const Component: FC = () => {
    const [form] = Form.useForm();
    const [dicData] = useState<any[]>(dic);
    const [currentType, setCurrentType] = useState(1); // 初始值与 initialValues 中的 type 对应
    const [currentSubject, setCurrentSubject] = useState(2);
    const [currentPlatform, setCurrentPlatform] = useState(1);
    const [currentActType, setCurrentActType] = useState(1);

    const [tabs, setTabs] = useState([
        {
            key: '1',
            form: {
                yuming: '',
                bmid: '',
                dic: '',
                number: 1,
                subject: 2, // 主体选择，默认值
                notes: '',
            },
        },
    ]);
    const [count, setCount] = useState(1);
    const [activeKey, setActiveKey] = useState("1");
    // 创建一个对象来存储每个 Tab 的 Form 实例
    const [forms, setForms] = useState({});
    const onEdit = (targetKey, action) => {
        if (action === 'add') {
            const newKey = String(count + 1);
            setTabs([...tabs, {
                key: newKey,
                form: {
                    yuming: '',
                    bmid: '',
                    dic: '',
                    number: 1,
                    subject: 2,
                    notes: '',
                },
            }]);
            setActiveKey(newKey);
            setCount(count + 1);
        } else if (action === 'remove') {
            const newTabs = tabs.filter(tab => tab.key !== targetKey);
            if (newTabs.length > 0) {
                setActiveKey(newTabs[newTabs.length - 1].key);
            } else {
                setActiveKey('');
            }
            setTabs(newTabs);
        }
    };
    const handleChange = (key, field, value) => {
        setTabs(prevTestDa => prevTestDa.map(tab => tab.key === key ? { ...tab, form: { ...tab.form, [field]: value } } : tab));
    };
    const { Text } = Typography;
    const columns = [
        {
            title: '账户',
            dataIndex: 'account',
            key: 'account',
            width: '10%',
            render: (text) => (
                <Select
                    value={text}
                    style={{ width: '100%' }}
                    options={[
                        {
                            value: '1',
                            label: '含域名,主页,广告账号',
                        },
                    ]}
                />
            ),
        },
        {
            title: '数量',
            dataIndex: 'quantity',
            key: 'quantity',
            width: '3%',
            render: (text) => (
                <Input value={text} />
            ),
        },
        {
            title: '',
            dataIndex: 'action',
            key: 'action',
            width: '5%',
            render: (text, record) => (
                <Button style={{ display: data.length <= 1 ? 'none' : 'inline-block' }} onClick={() => handleDelete(record.key)}>
                    {text}
                </Button>
            )
        },
    ];

    const [data, setData] = useState([
        {
            key: '1',
            account: '含域名，主页，广告账号 V',
            quantity: 1,
            action: '删除'
        }
    ]);
    const createNewItem = () => {
        const newItem = {
            key: String(data.length + 1),
            account: '含域名，主页，广告账号',
            quantity: 1,
            action: '删除'
        };
        setData([...data, newItem]);
    }
    const handleDelete = (key) => {
        setData(data.filter(item => item.key !== key));
    };
    return (
        <PageContainer>
            <Steps current={4} style={{ backgroundColor: '#ffffff', padding: 20 }}>
                <Step title="提交申请" />
                <Step title="部门管理确认" />
                <Step title="资产管理交付" />
                <Step title="完结" />
            </Steps>
            <div style={{ backgroundColor: '#ffffff', padding: 20, marginTop: 20 }}>

                <Descriptions title="基础信息">
                </Descriptions>
                <Form
                    form={form}
                    initialValues={{
                        platform: currentPlatform,
                        accountType: currentActType,
                        type: currentType,
                    }}
                    labelCol={{ span: 2 }}
                    wrapperCol={{ span: 7 }}
                    style={{ padding: '13px' }}
                >
                    <Form.Item label="编号" name='bianhao'>
                        <span>AD250408142752001</span>
                        {/* {form.getFieldValue('bianhao')} */}
                    </Form.Item>
                    <Form.Item label="状态" name='zhuangtai'>
                        <span>已取消</span>
                    </Form.Item>
                    <Form.Item label="申请平台" name='platform' rules={[{ required: true }]}>
                        <Radio.Group onChange={(e) => {
                            setCurrentPlatform(e.target.value);
                            if (e.target.value === 2 || e.target.value === 3) {
                                setCurrentType(1);
                                form.setFieldsValue({ type: 1 }); // 设置表单字段值
                            }
                        }}>
                            <Radio value={1}>Facebook</Radio>
                            <Radio value={2}>Tiktok</Radio>
                            <Radio value={3}>Google</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item label="账户类型" name='accountType' rules={[{ required: true }]}>
                        <Radio.Group onChange={(e) => {
                            setCurrentActType(e.target.value);
                            if (e.target.value === 2) {
                                setCurrentType(1);
                                form.setFieldsValue({ type: 1 }); // 设置表单字段值
                            }
                        }} >
                            <Radio value={1}> 国内</Radio>
                            <Radio value={2}>海外</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item label="申请类型" name='type' rules={[{ required: true }]}>
                        <Radio.Group onChange={(e) => setCurrentType(e.target.value)}>
                            <Radio value={1}> 新户申请</Radio>
                            {(currentPlatform === 1 && currentActType === 1) && <Radio value={2}>现户申请</Radio>}
                        </Radio.Group>
                    </Form.Item>
                </Form>
                {/* 新户/现户申请模块 */}
                <div style={{ margin: '20px' }}>
                    <Descriptions title={currentType === 1 ? "新户申请" : "现户申请"}>
                    </Descriptions>
                    {currentType === 1 ? (<Tabs type='editable-card'
                        activeKey={activeKey}
                        onChange={setActiveKey}
                        onEdit={onEdit}
                        style={{ width: '80%', border: `1px solid #ccc` }}
                    >
                        {tabs.map(tab => (
                            <Tabs.TabPane tab={`新户${tab.key}`} key={tab.key} >
                                <Form
                                    form={forms[tab.key]}
                                    initialValues={tab.form}
                                    labelCol={{ span: 3 }}
                                    wrapperCol={{ span: 7 }}
                                    style={{ padding: '13px' }}
                                    onValuesChange={(changedValues) => {
                                        for (const [key, value] of Object.entries(changedValues)) {
                                            handleChange(tab.key, key, value);
                                        }
                                    }}>
                                    <Form.Item label="域名" name='yuming' rules={[{ required: true, message: '域名必填' }]}>
                                        <Input />
                                        {currentPlatform === 3 && <span>新户申请需要域名可正常访问</span>}
                                    </Form.Item>
                                    {currentPlatform !== 1 && <Form.Item label="邮箱" name='email' rules={[{ required: true, message: '邮箱必填' }]}>
                                        <Input />
                                    </Form.Item>}
                                    {currentActType === 2 && <Form.Item label="BMID" name='bmid' rules={[{ required: true, message: 'BMID必填' }]}>
                                        <Input />
                                    </Form.Item>}
                                    <Form.Item label="时区" name="dic" rules={[{ required: true }]}>
                                        <Select>
                                            {dicData.map((item) => (
                                                <Option key={item.code} value={item.code}>{item.name}</Option>
                                            ))}

                                        </Select>
                                    </Form.Item>
                                    {currentPlatform === 3 && <Form.Item label="投放" name='putinType' rules={[{ required: true }]}>
                                        <Radio.Group defaultValue={1} buttonStyle="solid">
                                            <Radio.Button value={1}>APP</Radio.Button>
                                            <Radio.Button value={2}>非APP</Radio.Button>
                                        </Radio.Group>
                                    </Form.Item>}
                                    <Form.Item label="广告账户数量" name='number' rules={[{ required: true }]}>
                                        <InputNumber min={1} max={5} defaultValue={1} />
                                    </Form.Item>
                                    {currentActType === 1 && (
                                        <>
                                            <div style={{ color: '#333', fontSize: '14px', fontWeight: 600, marginLeft: '3%' }}>开户主体</div>
                                            <Form.Item label="主体选择" name='subject'>
                                                <Radio.Group onChange={(e) => setCurrentSubject(e.target.value)}>
                                                    <Radio value={1}>指定主体</Radio>
                                                    <Radio value={2}>随机主体</Radio>
                                                </Radio.Group>
                                            </Form.Item>
                                        </>
                                    )
                                    }
                                    {currentSubject === 1 && (
                                        <div>
                                            <Form.Item label="公司名称" name="companyName" rules={[{ required: true }]}>
                                                <Input placeholder="中文名称" />
                                            </Form.Item>
                                            <Form.Item label="公司名称" name="companyNameEn">
                                                <Input placeholder="英文名称" />
                                            </Form.Item>
                                            <Form.Item label="统一社会信<br>用号码" name="unifiedSocialCreditNumber" rules={[{ required: true }]}>
                                                <Input />
                                            </Form.Item><Form.Item label="注册地址邮编" name="zip">
                                                <Input />
                                            </Form.Item><Form.Item label="公司注册地址<br>(中文)" name="address">
                                                <Input />
                                            </Form.Item><Form.Item label="公司注册地址<br>(英文)" name="addressEn">
                                                <Input />
                                            </Form.Item>
                                            <Form.Item label="行业类型" name="industryType">
                                                <Input />
                                            </Form.Item>
                                            <Form.Item label="营业执照" name="lstFileInfo">
                                                <ImageList />
                                            </Form.Item>

                                        </div>
                                    )}

                                    <Form.Item label="备注" name="notes">
                                        <Input.TextArea />
                                    </Form.Item>
                                    <div className={styles.descOnly}>
                                        <span role="img" style={{ marginRight: '4px' }}><svg viewBox="64 64 896 896" focusable="false" data-icon="info-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path d="M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"></path></svg></span>
                                        <span>提示：自注册域名需要提前解析好店铺，并可正常访问。</span>
                                    </div>
                                </Form>
                            </Tabs.TabPane>
                        ))}
                    </Tabs>) : (
                        <div style={{ margin: '10px' }}>
                            <div style={{ padding: 20, width: '80%', border: '1px solid #dcdcdc' }} className={styles.listTable}>
                                <Table
                                    columns={columns}
                                    dataSource={data}
                                    pagination={false}
                                    bordered={false}
                                    size="small"
                                    style={{
                                        width: '50%'

                                    }}
                                />
                            </div>
                            <div className={styles.increase} onClick={() => createNewItem()}>
                                <span role="img" aria-label="plus" className={styles.anticon} style={{ marginRight: '4px', color: '#709dd7' }}><svg viewBox="64 64 896 896" focusable="false" data-icon="plus" width="13px" height="13px" fill="currentColor" aria-hidden="true"><defs><style></style></defs><path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"></path><path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"></path></svg></span>
                                <span>新增</span>
                            </div>
                            <div className={styles.descOnly}>
                                <span role="img" style={{ marginRight: '4px' }}><svg viewBox="64 64 896 896" focusable="false" data-icon="info-circle" width="13px" height="13px" fill="currentColor" aria-hidden="true"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path d="M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"></path></svg></span>
                                <span>上述套餐均支持充值，换绑，账户问题，像素等服务。下户周期均在1-3天左右，下户后官方会协助绑定。</span>
                            </div>
                            <div style={{ marginTop: 20 }}>
                                <Text strong>备注</Text>
                                <Input.TextArea
                                    placeholder="请输入备注"
                                    autoSize={{ minRows: 3, maxRows: 5 }}
                                    style={{ width: '100%', marginTop: 8 }}
                                />
                            </div>
                        </div>
                    )}
                    <Row style={{ marginTop: 20 }}>
                        <Col span={2}>
                            <Button type="primary" style={{ width: '80%' }}>
                                转交代理
                            </Button>
                        </Col>
                        <Col span={2}>
                            <Button style={{ width: '80%' }}>
                                保存草稿
                            </Button>
                        </Col>
                    </Row>

                </div>




            </div>
        </PageContainer >
    );
};

Component.displayName = 'AccountApply';

const AccountApply = memo(Component);
export default AccountApply;
