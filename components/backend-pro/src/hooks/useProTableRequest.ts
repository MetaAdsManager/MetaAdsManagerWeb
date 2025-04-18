import { ActionType, RequestData } from '@ant-design/pro-table'
import { SortOrder } from 'antd/lib/table/interface'
import { useCallback, useEffect, useRef, useState } from 'react'
// import { useDownloadManagement } from '@MetaAdsManager/backend-pro/src/components/download-management/useDownloadManagement'
import useExport from './useExport'

type Params<U> = U & {
  page_size?: number
  current?: number
  keyword?: string
}

type Sort = Record<string, SortOrder>

type Filter = Record<string, React.ReactText[] | null>

type Fn<U, T> = (params: any, sort: Sort, filter: Filter) => Promise<{ code?: number; msg?: string; list?:T[] ; total?: number }>

export interface IUseProTableRequestOption<T, U = T> {
  /**
   * 格式化参数
   *
   * 前置处理请求参数。如果你需要传递给导出时。这会很有用
   * @param params 将要传递给接口的参数
   */
  paramsFormat?(params: any): any
  /**
   * 格式化数据
   * 你可以对返回的数据做一些处理
   */
  dataFormat?: (data: T[]) => U[]

  /**
   * 导出接口url
   */
  exportUrl?: string

  cache?: {
    /**
     * 全局唯一key
     * 如果不传递会默认根据路径地址生成
     */
    key?: string | ((originkey: string) => string)
    /**
     * 数据转换
     *
     * 此项对应的时`column`里面的`transform`。
     * 由于表单数据在 `column`内提前进行了转换再传递给 `request params`。这会导致 hook 缓存的表单数据是转换后的字段。所以导致缓存数据无法正常恢复。
     * 此时你需要传递进来一个转换函数。用来针对性的恢复字段
     *
     * @attention 实际上我们更倾向于你使用`paramsFormat`来统一进行字段转换。它的执行时机会保证缓存数据与表单数据是一致的
     * @param prams 缓存的params
     * @example
     * column ====>
     *  {
     *    title: '创建时间', valueType: 'dateRange',dataIndex: 'time',
          search: {
            transform: (value: any) => {
              return { beginTime: `${dayjs(value[0]).format('YYYY-MM-DD')} 00:00:00`, endTime: `${dayjs(value[1]).format('YYYY-MM-DD')} 23:59:59` }
            }
          },
        },

        这导致传递给request的参数是  beginTime 与 endTime
        所以需要使用 `cache.transform` 来恢复
        cache.transform ====>
          transform: (params) => {
            const { beginTime, endTime, ...rest } = params
            if (beginTime && endTime) {
              rest.time = [dayjs(beginTime), dayjs(endTime)]
            }
            return rest
          }
     *
     * @returns
     */
    transform?: (prams: Record<string, any>) => Record<string, any>
    /**
     * 缓存时机处理
     *
     * 默认情况下当你声明了cache对象。此hook的数据即会缓存。
     * 当然有些时候你可能需要对缓存的时机进行更加细粒度的控制。此时你可以使用`when`函数
     * @param from
     * @param to
     */
    when?(from: TWhen, to: TWhen): boolean,
    type?:any
  }
}

type TWhen = Pick<Window['location'], 'hash' | 'href' | 'protocol' | 'port' | 'search' | 'pathname' | 'hostname'>

/**
 * antd pro table请求封装钩子
 * @param fn
 * @param option
 * @returns
 */
export default function useProTableRequest<T, U extends Record<string, any> = {}>(fn: Fn<U, T>, option: IUseProTableRequestOption<T> = {}) {
  const { dataFormat, cache, type } = option
  // Table action 的引用，便于自定义触发
  const actionRef = useRef<ActionType>()

  const formRef = useRef()
  // 缓存请求参数
  const requestParams = useRef<Record<string, any>>({})
  // 数据缓存参数
  const dataSourceRef = useRef<T[]>([])
  const [DATA, setDATA] = useState([]);

  // 缓存原始数据
  const _cacheData = useRef({
    /** 缓存key 全局唯一 */
    key: cache ? genCacheKey(cache.key) : null,
    location: pick(window.location, ['hash', 'href', 'protocol', 'port', 'search', 'pathname', 'hostname']),
    params: {},
    sort: {},
    filter: {},
    useCache: false,
    total: 0,
    dataSouce: [] as any
  })

  // 集成导出
  const [exportTable, exportLoading] = useExport(option.exportUrl)

  /** 导出 */
//   const { exportLoading, onOpenManage } = useDownloadManagement()

//   const exportTable = () => {
//     if (option.exportUrl) {
//       onOpenManage(option.exportUrl, requestParams.current)
//     }
//   }

  // 表格请求
  const tableRequst = useCallback(async (params: Params<U>, sort: Sort, filter: Filter) => {
    const { current,pageSize, ...rest } = params as Record<string, any>
    let newParams: any = { ...rest, page: current, page_size:pageSize }
    // 格式化并缓存参数
    requestParams.current = option.paramsFormat ? option.paramsFormat(newParams) : newParams

    // 重置数据
    let total = 0
    let data: T[] = []

    // 恢复缓存表格数据
    if (_cacheData.current.useCache) {
      newParams = { ...newParams, ..._cacheData.current?.params, page: current,page_size:pageSize }
      requestParams.current = option.paramsFormat ? option.paramsFormat(newParams) : newParams

      console.log('__use cache list data__', _cacheData.current.dataSouce)
      _cacheData.current.useCache = false
      data = _cacheData.current.dataSouce
      total = _cacheData.current.total
      dataSourceRef.current = JSON.parse(JSON.stringify(data))
    }

    // 恢复缓存表格数据
    // if (_cacheData.current.useCache) {
    //   console.log('__use cache list data__', _cacheData.current.dataSouce)
    //   _cacheData.current.useCache = false
    //   data = _cacheData.current.dataSouce
    //   total = _cacheData.current.total
    //   dataSourceRef.current = JSON.parse(JSON.stringify(data))
    // } else {

    try {
      // 参数长度过长不处理
      if (JSON.stringify(requestParams.current).length < 1000) {
        // if(type){
        //   const res = await fn(requestParams.current, sort, filter)
        //   // 如果当前列表为空并且page不为1.则重新发起请求
        //   if (!res.list?.length && requestParams.current.page !== 1) {
        //     setTimeout(() => {
        //       actionRef.current?.reload(true)
        //     })
        //   }
        //   const { list = [] as T[] } = res || {}
        //   total = res?.total || 0
        //   data = dataFormat ? dataFormat(list) : list
        //   console.log(params,'-----------',requestParams.current);
          
        //   // 缓存数据
        //   _cacheData.current = { ..._cacheData.current, dataSouce: data, total, params:{...requestParams.current,...params}, sort, filter }
        //   dataSourceRef.current = data
        //   setDATA(data);
        // }else{
          const res = await fn(requestParams.current, sort, filter)
          console.log(res,'res')
          // 如果当前列表为空并且page不为1.则重新发起请求
          if (!res?.data?.length && requestParams.current.page !== 1) {
            setTimeout(() => {
              actionRef.current?.reload(true)
            })
          }
          const list = res?.data || [] as T[]
          // const { list:data } = res || {}
          total = res?.total || 0
          data = dataFormat ? dataFormat(list) : list
          console.log(params,'-----------',requestParams.current);
          
          // 缓存数据
          _cacheData.current = { ..._cacheData.current, dataSouce: data, total, params:{...requestParams.current,...params}, sort, filter }
          dataSourceRef.current = data
          setDATA(data);
        // }
      }
    } catch (error) {
      console.error(error)
    }
    // }

    return { data, success: true, total } as Partial<RequestData<T>>
  }, [])

  /**
   * 表格数据缓存处理
   */
  useEffect(() => {
    // 恢复缓存
    if (_cacheData.current.key) {
      const cacheString = window.sessionStorage.getItem(_cacheData.current.key)
      if (cacheString) {
        console.log('__recovery cache__', JSON.parse(cacheString))
        try {
          const cacheData = JSON.parse(cacheString)
          _cacheData.current = { ...cacheData, useCache: true }
          const transform = option.cache?.transform ?? ((pa: any) => pa)
          formRef.current?.setFieldsValue(transform(cacheData.params)) // 恢复搜索表单
          actionRef.current?.setPageInfo?.({ current: cacheData.params.current, pageSize: cacheData.params.pageSize }) // 恢复分页信息
        } catch (error) {
          console.error(error)
        } finally {
          window.sessionStorage.removeItem(_cacheData.current.key!) // 清除缓存数据
        }
      }
    }

    return () => {
      if (!_cacheData.current.key) {
        return
      }

      // 组件卸载时将数据缓存至sessionStorage
      const to = pick(window.location, ['hash', 'href', 'protocol', 'port', 'search', 'pathname', 'hostname'])
      if (option.cache?.when) {
        const whenResult = option.cache.when(_cacheData.current.location, to)
        if (!whenResult) {
          return
        }
      }
      window.sessionStorage.setItem(_cacheData.current.key, JSON.stringify(_cacheData.current))
      console.log('__set cache___', _cacheData.current)
    }
  }, [])

  return {
    formRef,
    actionRef,
    /**
     * 表格请求
     */
    request: tableRequst,
    /**
     * 表格query参数
     */
    params: requestParams,

    /**
     * 表格数据缓存
     */
    dataSource: dataSourceRef,

    /**
     * 导出
     * @param params
     * @returns
     */
    exportTable,
    /**
     * 导出loading
     */
    exportLoading,
    DATA
  }
}

/**
 * 从对象中选择指定的属性
 * @param obj
 * @param keys
 * @returns
 */
function pick<T extends Object, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  const result = {} as Pick<T, K>
  keys.forEach((key) => {
    if (key in obj) {
      result[key] = obj[key]
    }
  })
  return result
}

/**
 * 生成缓存键值
 * @param key key
 * @returns
 */
function genCacheKey(key?: string | ((ok: string) => string)) {
  const hostKey = encodeURIComponent(window.location.href.replace(/http(s)?:\/\//, ''))
  if (typeof key === 'function') {
    return key(hostKey)
  } else {
    return key || hostKey
  }
}
