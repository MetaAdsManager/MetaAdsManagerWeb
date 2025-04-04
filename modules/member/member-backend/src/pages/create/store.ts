import { getGlobalData } from '@MetaAdsManager/backend-store'
import { createContext } from 'react'

interface ITaskContext {
  upload(data: any): Promise<any>
}

export const TaskContext = createContext<ITaskContext>({ upload: getGlobalData('upload') })
