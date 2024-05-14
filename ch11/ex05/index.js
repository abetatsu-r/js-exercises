/**
 * 方針
 * - byte列を引数として渡す
 * - 対応するパターンを順番に検証すればよい
 *   - PDF: 25 50 44 46 2d
 *   - ZIP: 50 4B 03 04 / 50 4B 05 06 / 50 4B 07 08
 *   - GIF: 47 49 46 38 37 61 / 47 49 46 38 39 61
 *   - PNG: 89 50 4E 47 0D 0A 1A 0A
 */

export function detectFileType(bytes) {
  const FLAG_PDF = [new Uint8Array([0x25, 0x50, 0x44, 0x46, 0x2d])];
  const FLAG_ZIP = [
    new Uint8Array([0x50, 0x4b, 0x03, 0x04]),
    new Uint8Array([0x50, 0x4b, 0x05, 0x06]),
    new Uint8Array([0x50, 0x4b, 0x07, 0x08]),
  ];
  const FLAG_GIF = [
    new Uint8Array([0x47, 0x49, 0x46, 0x38, 0x37, 0x61]),
    new Uint8Array([0x47, 0x49, 0x46, 0x38, 0x39, 0x61]),
  ];
  const FLAG_PNG = [
    new Uint8Array([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
  ];

  const view = new DataView(bytes);

  // PDF
  if (compareBytes(view, FLAG_PDF)) return "PDF";

  // ZIP
  if (compareBytes(view, FLAG_ZIP)) return "ZIP";

  // GIF
  if (compareBytes(view, FLAG_GIF)) return "GIF";

  // PNG
  if (compareBytes(view, FLAG_PNG)) return "PNG";

  return "UNKNOWN";
}

function compareBytes(view, flags) {
  console.log(flags);
  for (let flag of flags) {
    if (flag.length > view.byteLength) continue;

    let b = true;
    for (let i = 0; i < flag.length; i++) {
      b &= view.getUint8(i) === flag[i];
    }

    if (b) return true;
  }

  return false;
}
