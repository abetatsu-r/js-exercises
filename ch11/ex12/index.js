class OverFileSizeError extends Error {
  constructor(filePath) {
    super(`file size is exceeded: ${filePath}`);
  }

  get name() {
    return "OverFileSizeError";
  }
}
