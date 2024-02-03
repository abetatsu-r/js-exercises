/**
for (i = 1; i < 101; i++)
  console.log(i % 15 ? (i % 3 ? (i % 5 ? i : "Buzz") : "Fizz") : "FizzBuzz");
*/

for (i = 1; i < 101; i++) {
  if (!(i % 15)) {
    console.log("FizzBuzz");
  } else if (!(i % 3)) {
    console.log("Fizz");
  } else if (!(i % 5)) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
