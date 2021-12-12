/**
 * 判断一个值是否是引用数据类型，且不为 null
 * @param {需要判断的参数值} v
 * @returns true || false
 */
export default function isObject(v) {
  return v !== null && typeof v === "object";
}
