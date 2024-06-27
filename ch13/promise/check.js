// Promise finallyでエラーになったらどうするのがいいか？
// case1: await try-catch
try{
    await new Promise(resolve => resolve()).then(() => {console.log("ok?")}).finally(() => {throw new Error("X")});
} catch(e) {
    console.log("捕まる");
}

// case2: finally-catch 
await new Promise(resolve => resolve()).then(() => {console.log("ok?")}).finally(() => {throw new Error("X")}).catch(() => console.log("finally-catch"));


// 解決しただけでは次のthenは実行されない
new Promise(resolve => {
    console.log("hoe?")
    resolve()
}).then(() => {
    console.log("2")
    return new Promise(resolve => setTimeout(resolve, 10000));
}).then(() => {
    console.log("3")
})
