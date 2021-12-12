import { toRawType } from "./toRawType";

/**
 * 判断某个值是否为普通的 object 类型
 * @param {需要被判断类型的值} v
 * @returns true || false
 */
export default function isPlainObject(v) {
  return toRawType(v) === "object";
}
