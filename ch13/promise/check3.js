setTimeout(() => {console.log("1")}, 1000);

// setTimeoutのcallBack処理をblockしない
await new Promise((resolve) => {
    setTimeout(() => {console.log("2"); resolve()}, 3000);
})

console.log("3");
