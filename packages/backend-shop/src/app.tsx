/* eslint-disable react/jsx-key */
// import type { Settings as LayoutSettings } from '@ant-design/pro-layout'
import { SettingDrawer } from '@ant-design/pro-layout'
import { PageLoading } from '@ant-design/pro-layout'
import './styles/global.less'
import type { RunTimeLayoutConfig } from 'umi'
import { history, Link } from 'umi'
import RightContent from '~/components/RightContent'
import Footer from '~/components/Footer'
import { BookOutlined, LinkOutlined } from '@ant-design/icons'
import defaultSettings from '../config/defaultSettings'
import { isDev, loginPath, publicPath } from './config'
import { fetchUserInfo } from './app.service'
import MyProProvider from './components/proComponents/myProProvider'
import { createElement } from 'react'
import { ConfigProvider } from 'antd'
import instance from '~/request/instance'
import { setGlobalData } from '@MetaAdsManager/backend-store'
import { upload } from './components/aliyun'
import { Theme_Token } from '~/constants/theme';
import { enable as enableDarkMode, disable as disableDarkMode } from '@umijs/ssr-darkreader';
if (!localStorage.getItem('theme')) {
  enableDarkMode({
    brightness: 100,
    contrast: 90,
    sepia: 10
  });
  ConfigProvider.config({
    theme: Theme_Token.dark
  });
} else {
  console.log(localStorage.getItem('theme'),'localStorage.getItem')
  if (localStorage.getItem('theme') === 'dark') {
    console.log('dark')
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
  ConfigProvider.config({
    theme: localStorage.getItem('theme') as any
  });
}

setGlobalData({ upload, instance })

type LayoutSettings = typeof defaultSettings

/** 获取用户信息比较慢的时候会展示一个 loading */
export const initialStateConfig = {
  loading: <PageLoading />
}

const { logo = '', smLogo = '', ...rest } = defaultSettings
const newSettings = {
  ...rest
  // navTheme: (localStorage.getItem('navTheme') as any | "realDark" | undefined) || rest?.navTheme
  // logo: /^http(s)?:\/\//.test(logo) ? logo : publicPath + logo.slice(1),
  // smLog: /^http(s)?:\/\//.test(logo) ? smLogo : publicPath + smLogo.slice(1)
}

const inputConfig = { autoComplete: 'off' }

/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */
export async function getInitialState(): Promise<{
  settings?: Partial<LayoutSettings>
  currentUser?: {
    name: string
    email: string,
    avatar: string,
  }
  loading?: boolean
  authCodes?: string[]
  fetchUserInfo?: typeof fetchUserInfo
}> {
  console.log(history.location.pathname)
  // 如果是登录页面，不执行
  if (history.location.pathname !== loginPath && history.location.pathname !== '/login/') {
    const { currentUser, authCodes } = await fetchUserInfo()
    return {
      fetchUserInfo,
      currentUser,
      authCodes,
      settings: newSettings
    }
  }
  return {
    fetchUserInfo,
    authCodes: [],
    settings: newSettings
  }
}

// ProLayout 支持的api https://procomponents.ant.design/components/layout
export const layout: RunTimeLayoutConfig = ({ initialState, setInitialState }) => {
  return {
    rightContentRender: () => <RightContent />,
    disableContentMargin: false,
    // waterMarkProps: {
    //   content: initialState?.currentUser?.name
    // },
    footerRender: () => <Footer />,
    onPageChange: () => {
      const { location } = history
      // 如果没有登录，重定向到 login
      if (!initialState?.currentUser && location.pathname !== loginPath &&location.pathname !== '/login/') {
        history.push(loginPath)
      }
    },
    // links: isDev
    //   ? [
    //       <Link to="/umi/plugin/openapi" target="_blank">
    //         <LinkOutlined />
    //         <span>OpenAPI 文档</span>
    //       </Link>,
    //       <Link to="/~docs">
    //         <BookOutlined />
    //         <span>业务组件文档</span>
    //       </Link>
    //     ]
    //   : [],
    menuHeaderRender: undefined,
    // 自定义 403 页面
    // unAccessible: <div>unAccessible</div>,
    // 增加一个 loading 的状态
    childrenRender: (children, props) => {
      // if (initialState?.loading) return <PageLoading />;
      return (
       <> {children}</>
         
      )
    },
    ...initialState?.settings
  }
}

export function rootContainer(container) {
  return createElement(MyProProvider, null, container)
}
