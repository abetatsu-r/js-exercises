setTimeout(() => console.log("callback"), 1000);

// 5秒くらいかかる処理
function longtime() {
    let i = Number.MAX_SAFE_INTEGER/3000000;
    while(i > 0) {
        i = i-1;
    }
    console.log("loop end");
}

longtime();
longtime();
console.log("finish");