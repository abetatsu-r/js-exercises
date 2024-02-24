let o = {};
o.x = 1;

let p = Object.create(o);
p.y = 1;

let q = Object.create(p);
q.z = 3;

// oはp,qのプロトタイプ
console.log(o.isPrototypeOf(p)); // true
console.log(o.isPrototypeOf(q)); // true
// pはqのプロトタイプ
console.log(p.isPrototypeOf(q)); // true

let getProtoTypeChain = function () {
  let objs = {
    // よくない気がする
    obj: Object,
    array: Array,
    date: Date,
    map: Map,
  };

  let key_pattern = combination(Object.keys(objs), 2);

  let chain_arr = key_pattern.map((pair) => {
    let [one, other] = pair;
    if (objs[one].prototype?.isPrototypeOf(objs[other])) {
      return one + " is prototype of " + other;
    } else if (objs[one].prototype?.isPrototypeOf(objs[other])) {
      return other + " is prototype of " + one;
    } else {
      return one + " and " + other + " are not in an inherited relationship";
    }
  });

  return chain_arr.join(".\n") + ".";
};

// 配列に対する組み合わせ列挙(nums_C_k)
let combination = (nums, k) => {
  let ans = [];
  if (nums.length < k) {
    return [];
  }
  if (k === 1) {
    for (let i = 0; i < nums.length; i++) {
      ans[i] = [nums[i]];
    }
  } else {
    for (let i = 0; i < nums.length - k + 1; i++) {
      let row = combination(nums.slice(i + 1), k - 1);
      for (let j = 0; j < row.length; j++) {
        ans.push([nums[i]].concat(row[j]));
      }
    }
  }
  return ans;
};

// Object, Array, Date, Mapの継承関係
console.log(getProtoTypeChain());
/**
 * obj is prototype of array.
 * obj is prototype of date.
 * obj is prototype of map.
 * array and date are not in an inherited relationship.
 * array and map are not in an inherited relationship.
 * date and map are not in an inherited relationship.
 */
