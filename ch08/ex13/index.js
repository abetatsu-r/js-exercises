function f(input) {
  const i = 1;
  const f = new Function(`return "Hello, " + ${input}`);
  console.log(f());
  console.log(i);
}

f('"world?" + (function(){while(true){}})()');
