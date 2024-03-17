export let sum = function (array) {
  return array ? array.reduce((acc, v) => acc + v, 0) : 0;
};

export let join = function (array, str) {
  if (array.length === 0) return "";
  let separator;
  if (str === undefined) {
    separator = ",";
  } else if (str === null) {
    separator = "null";
  } else {
    separator = str;
  }

  return array.reduce(function (acc, v) {
    if (v === undefined || v === null) {
      return acc + separator + "";
    } else {
      return acc + separator + v;
    }
  });
};

export let reverse = function (array) {
  return array.reduce((acc, v) => {
    acc.unshift(v);
    return acc;
  }, []);
};

export let every = function (array, fn) {
  return array.reduce((acc, v, i, a) => acc && fn(v, i, a), true);
};

export let some = function (array, fn) {
  return array.reduce((acc, v, i, a) => acc || fn(v, i, a), false);
};
