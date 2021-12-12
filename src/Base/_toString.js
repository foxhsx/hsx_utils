/**
 * 提取 Object 原型上的 toString 方法
 * @param {需要被挂载调用 toString 方法的值} v
 * @returns 返回被字符串后的值
 */
export default function _toString(v) {
  return Object.prototype.toString.call(v);
}
