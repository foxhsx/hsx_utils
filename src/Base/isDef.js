/**
 * 判断一个值是否已经定义，且不为空
 * @param {需要判断的参数值} v
 * @returns true || false
 */
export default function isDef(v) {
  return v !== undefined && v !== null;
}
