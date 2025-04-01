import { API as Admin } from "./Admin"
import { API as Circle } from "./Circle"

export const api = {
   ...Admin,
   ...Circle
}
