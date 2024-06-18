export function* primeSequence() {
  const primeList = [2];
  let n = 2;
  yield n;
  while (true) {
    n++;
    // primeListのどの要素でもnが割り切れないならnは素数である
    if (!primeList.filter((p) => !(n % p)).length) {
      primeList.push(n);
      yield n;
    }
  }
}
