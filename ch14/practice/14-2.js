const obj = {
  x: 3,
  get x() {
    console.log("getter called");
    // 無限ループ
    return this.x;
  },
};
