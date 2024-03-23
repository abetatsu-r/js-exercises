declaration();
f(); // Reference Error

function declaration() {
  console.log("実行される");
}

const f = function () {
  console.log("呼び出されない");
};
