export let mergeSort = function (array) {
  if (array.length <= 1) return array;

  console.log(array.length);

  // 真ん中で区切る
  let center = Math.floor(array.length / 2);
  let left = array.slice(0, center);
  let right = array.slice(center);

  return merge(mergeSort(left), mergeSort(right));
};

let merge = function (left, right) {
  let result = [];

  while (left.length && right.length) {
    if (left[0] > right[0]) {
      result.push(right.shift());
    } else {
      result.push(left.shift());
    }
  }

  console.log(result);

  return [...result, ...left, ...right];
};
