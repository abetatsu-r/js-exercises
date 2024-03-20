export let pop = function (array) {
  let copy = Array.from(array);
  copy.pop();
  return copy;
};

export let push = function (array, v) {
  let copy = Array.from(array);
  copy.push(v);
  return copy;
};

export let shift = function (array) {
  let copy = Array.from(array);
  copy.shift();
  return copy;
};

export let unshift = function (array, v) {
  let copy = Array.from(array);
  copy.unshift(v);
  return copy;
};

export let sort = function (array, fn) {
  let copy = Array.from(array);
  copy.sort(fn);
  return copy;
};
