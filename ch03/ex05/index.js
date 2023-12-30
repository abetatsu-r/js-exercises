export function fixLFToCRLF(text) {
  return text.replace("\n", "\r\n");
}

export function fixCRLFToLF(text) {
  return text.replace("\r\n", "\n");
}
