import React, { useCallback, useState } from 'react'
import { LogoutOutlined, SettingOutlined, LockOutlined,MoonOutlined,SunOutlined } from '@ant-design/icons'
import { Avatar, Menu, Spin,ConfigProvider } from 'antd'
import { history, useModel } from 'umi'
import { stringify } from 'querystring'
import HeaderDropdown from '../HeaderDropdown'
import styles from './index.less'
import type { MenuInfo } from 'rc-menu/lib/interface'
import avatarIcon from '~/assets/images/default_avatar.png'
import { loginPath } from '~/config'
import ChangePasswordModal from './changePasswordModal'
import { api } from '~/request'
import { enable as enableDarkMode, disable as disableDarkMode } from '@umijs/ssr-darkreader';
import useThemeChange from '~/hooks/useThemeChange';
import { Theme_Token } from '~/constants/theme';


export type GlobalHeaderRightProps = {
  menu?: boolean
}

/**
 * 退出登录，并且将当前的 url 保存
 */
const loginOut = async () => {
  const { search, pathname } = history.location
  // Note: There may be security issues, please note
  // 退出登录
  try {
    await api['/admin/logout_POST']()
  } catch (error) {}
  window.localStorage.removeItem('Authorization')
  // 跳转
  if (pathname !== loginPath && pathname !== '/login/') {
    history.replace({
      pathname: loginPath
      // search: stringify({ redirect: pathname + search })
    })
  }
}

const AvatarDropdown: React.FC<GlobalHeaderRightProps> = ({ menu = true}) => {
  const { theme, changeTheme } = useThemeChange();
  const onMenuClickLIne = async (key:any) => {
    changeTheme(key as 'light' | 'dark' | 'auto');
    if (key === 'dark') {
      //开启 暗黑模式
      enableDarkMode({
        brightness: 100,
        contrast: 90,
        sepia: 10
      });
    } else {
      //关闭 暗黑模式
      disableDarkMode();
    }
    // 修改 antd 主题
    ConfigProvider.config({
      theme: Theme_Token[key]
    });
    // 修改 localStorage
    localStorage.setItem('theme', key as string);
  };
  const { initialState, setInitialState } = useModel('@@initialState')
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false)

  const onMenuClick = useCallback(
    (event: MenuInfo) => {
      const { key } = event
      if (key === 'logout') {
        setInitialState((s) => ({ ...s, currentUser: undefined, authCodes: [] }))
        loginOut()
        return
      } else if (key === 'changePwd') {
        setShowChangePasswordModal(true)
      } else if (key === 'SunOutlined') {
        onMenuClickLIne('light')
      } else if (key === 'MoonOutlined') {
        onMenuClickLIne('dark')
      }else {
        history.push(`/user/${key}`)
      }
    },
    [setInitialState]
  )

  const loading = (
    <span className={`${styles.action} ${styles.account}`}>
      <Spin
        size="small"
        style={{
          marginLeft: 8,
          marginRight: 8
        }}
      />
    </span>
  )

  if (!initialState) {
    return loading
  }

  const { currentUser } = initialState

  if (!currentUser || !currentUser.name) {
    return loading
  }

  const menuHeaderDropdown = (
    <Menu className={styles.menu} selectedKeys={[]} onClick={onMenuClick}>
      {/* {menu && (
        <Menu.Item key="center">
          <UserOutlined />
          个人中心
        </Menu.Item>
      )} */}
      {menu && (
        <>
          <Menu.Item key="changePwd">
            <LockOutlined />
            修改密码
          </Menu.Item>
          <Menu.Item key="setting">
            <SettingOutlined />
            个人设置
          </Menu.Item>
          <Menu.Item key="SunOutlined">
            <SunOutlined />
            亮色模式
          </Menu.Item>
          <Menu.Item key="MoonOutlined">
            <MoonOutlined />
            暗色模式
          </Menu.Item>
        </>
      )}
      {menu && <Menu.Divider />}

      <Menu.Item key="logout">
        <LogoutOutlined />
        退出登录
      </Menu.Item>
    </Menu>
  )
  return (
    <>
      <HeaderDropdown overlay={menuHeaderDropdown}>
        <span className={`${styles.action} ${styles.account}`}>
          <Avatar size="small" className={styles.avatar} src={currentUser.avatar || avatarIcon} alt="avatar" />
          <span className={`${styles.name} anticon`}>{currentUser.name}</span>
        </span>
      </HeaderDropdown>

      <ChangePasswordModal
        visible={showChangePasswordModal}
        onOk={() => setShowChangePasswordModal(false)}
        onCancel={() => setShowChangePasswordModal(false)}
      />
    </>
  )
}

export default AvatarDropdown
