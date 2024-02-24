a = {
  x: 1,
  y: function () {
    return 3;
  },
};

// シリアライズ不可能な場合は、値が飛ぶ
JSON.stringify(a); // '{"x":1}'
