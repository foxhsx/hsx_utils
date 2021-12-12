/**
 * 判断一个值是否为基本数据类型的值
 * @param {需要判断的参数值} v
 * @returns true || false
 */
export default function isPrimitive(v) {
  return (
    typeof v === "string" ||
    typeof v === "number" ||
    typeof v === "boolean" ||
    typeof v === "symbol"
  );
}
