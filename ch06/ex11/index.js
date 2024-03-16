export let p = {
  r: 0,
  theta: 0,
  get x() {
    return this.r * Math.cos(this.theta);
  },
  set x(newValue) {
    if (isNaN(newValue)) throw new Error("cannot set value by NaN");
    this.r = Math.hypot(newValue, this.y);
    this.theta = Math.atan(this.y / newValue);
  },

  get y() {
    return this.r * Math.sin(this.theta);
  },
  set y(newValue) {
    if (isNaN(newValue)) throw new Error("cannot set value by NaN");
    let currentX = this.x;
    this.r = Math.hypot(currentX, newValue);
    this.theta = Math.atan(newValue / currentX);
  },
};
