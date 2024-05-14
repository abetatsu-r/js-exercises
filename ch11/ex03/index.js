/**
 * 方針
 * - DataViewを使って頑張る
 */

/**
 * ビッグエンディアンのバイト列とみなして受け取ってリトルエンディアンのバイト列に変換して返す
 * メモリの中身を書き換える
 * @param {*} uint32Array
 */
export function toLittleEndianness32intArray(bytes) {
  const buffer = bytes.buffer;
  const byteOffset = bytes.byteOffset;
  const byteLength = bytes.byteLength;
  const view = new DataView(buffer, byteOffset, byteLength);
  console.log(view);

  for (let i = 0; i < byteLength; i += bytes.BYTES_PER_ELEMENT) {
    const int = view.getInt32(i, false);
    console.log("int is: " + int + ", i = " + i);
    view.setUint32(i, int, true);
  }

  return bytes;
}

/**
 * リトルエンディアンのバイト列とみなして受け取ってビッグエンディアンのバイト列に変換した配列を返す
 */
export function toBigEndianness32intArray(bytes) {
  const buffer = bytes.buffer;
  const byteOffset = bytes.byteOffset;
  const byteLength = bytes.byteLength;
  const view = new DataView(buffer, byteOffset, byteLength);

  for (let i = 0; i < byteLength; i += bytes.BYTES_PER_ELEMENT) {
    const int = view.getInt32(i, true);
    console.log("int is: " + int + ", i = " + i);
    view.setUint32(i, int, false);
  }

  return bytes;
}
