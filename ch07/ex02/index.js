function fizzbuzz(n) {
  [...Array(n)]
    .map((_, i) => ((i + 1) % 15 ? i + 1 : "FizzBuzz"))
    .map((n, i) => ((i + 1) % 5 ? n : "Fizz"))
    .map((n, i) => ((i + 1) % 3 ? n : "Buzz"))
    .forEach(function (v) {
      console.log(v);
    });
}

function sumOfSqareDifference(f, g) {
    return f.map(function (v, i) {
      return (v - g[i]) ** 2 
    }).reduce((acc, v) => (acc + v), 0);
}

function sumOfEvensIsLargerThan42(array) {
    return array.filter((v) => (v%2 === 0 && v !== 0)).concat(false)
    .reduce((acc, v) =>
        typeof acc === 'boolean' || acc >= 42 || (v && acc + v)
    , 0)
}
