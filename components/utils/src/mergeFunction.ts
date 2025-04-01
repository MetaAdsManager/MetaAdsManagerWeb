export default function merge(callback: any, delay = 200) {
  let promise: Promise<any> | null
  let timeout: any
  let resloveHandle: any
  let state = 0

  return (...params: any[]) => {
    if (timeout) {
      clearTimeout(timeout)
    }

    if (state === 0) {
      timeout = setTimeout(async () => {
        state = 1
        const result = await callback(...params)
        resloveHandle(result)
        promise = null
        state = 0
      }, delay)
    }

    if (!promise) {
      promise = new Promise((resolve) => {
        resloveHandle = resolve
      })
    }

    return promise
  }
}
