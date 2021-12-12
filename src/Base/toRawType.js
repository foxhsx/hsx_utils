import { _toString } from "./_toString";

/**
 * 判断一个数据的准确数据类型
 * @param {需要判断准确数据类型的值} v
 * @returns 数据类型
 */
export default function toRawType(v) {
  return _toString(v).slice(8, -1).toLowerCase();
}
