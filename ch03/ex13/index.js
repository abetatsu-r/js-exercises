class Example {
  valueOf() {
    return this;
  }

  toString() {
    return "[object Object]";
  }
}

let obj = new Example();
console.log(obj.toString());
console.log(obj.valueOf());
