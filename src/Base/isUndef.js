/**
 * 判断一个值是否是 undefined 或者是 null
 * @param {需要判断的参数值} v
 * @returns true || false
 */
export default function isUndef(v) {
  return v === undefined || v === null;
}
