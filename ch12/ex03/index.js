export function* counter() {
  let count = 0;
  while (true) {
    try {
      yield ++count;
    } catch (_) {
      count = 0;
      yield count;
    }
  }
}
