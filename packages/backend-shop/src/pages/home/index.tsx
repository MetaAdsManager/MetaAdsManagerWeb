/** @format */

import { FC, memo } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Result } from 'antd';
import { DesktopOutlined } from '@ant-design/icons';
import { applicationName } from '~/config';
import { useModel } from 'umi';

const Component: FC = () => {
    const state = useModel('@@initialState');
    console.log(state, 'state');
    return (
        <PageContainer>
            <Card>
                <Result
                    icon={<DesktopOutlined />}
                    title={`欢迎登录${applicationName}后台管理系统`}
                />
            </Card>
        </PageContainer>
    );
};

Component.displayName = 'Home';

const Home = memo(Component);
export default Home;
