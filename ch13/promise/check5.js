let a = 3;
let b = 5;

Promise.resolve().then(
    () => {
        a = 999;
        return new Promise(resolve => {setTimeout(() => console.log(a), 3000); resolve()})
    }
).then(
    new Promise((resolve) => {
        b = 500;
        console.log("ここa:" + a + ".b:" + b); // a:3, b:500
        resolve();
    })
).then(() => console.log("a:" + a + ".b:" + b))


