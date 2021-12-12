import { toRawType } from "./toRawType";

/**
 * 判断某个值是否为正则表达式
 * @param {需要被判断类型的值} v
 * @returns true || false
 */
export default function isRegExp(v) {
  return toRawType(v) === "regexp";
}
