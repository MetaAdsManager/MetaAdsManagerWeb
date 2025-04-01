import { useState } from 'react'

/**
 * 函数在未运行完成前 锁死
 *
 * @export
 * @template T
 * @param {T} fun
 * @returns
 */
export function useFunctionLock<T extends (...args: any) => any>(fun: T) {
  const [locking, setLocking] = useState(false)

  const callback = async (...args: Parameters<T>) => {
    if (!locking) {
      setLocking(true)
      try {
        const data = await fun.apply(null, args)
        return data
      } catch (error) {
        throw error
      } finally {
        setLocking(false)
      }
    }
  }

  return [callback, locking]
}
