let p = {
    x: 1.0,
    y: 1.0,
    get r() {return Math.hypot(this.x, this.y)},
    set r(value) {
        let old = Math.hypot(this.x, this.y);
        let ratio = value/old;
        this.x *= ratio;
        this.y *= ratio;
    }
}

console.log(p.r);
console.log(p.x);
p.r = 2;
console.log(p.r);
// set rでxの値も更新される
console.log(p.x);
