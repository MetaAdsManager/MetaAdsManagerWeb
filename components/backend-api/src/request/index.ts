import { API as Admin } from "./Admin"
import { API as Circle } from "./Circle"
import { API as Wechat } from "./Wechat"

export const api = {
   ...Admin,
   ...Circle,
   ...Wechat
}

