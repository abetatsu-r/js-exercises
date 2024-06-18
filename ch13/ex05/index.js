import {
  wait,
  wait0,
  wait1,
  wait2,
  wait3,
  log,
  logA,
  logB,
  logC,
  errX,
  errY,
} from "../lib.js";

function g1() {
  // TODO: then のネストを無くしなさい
  return wait(1000)
    .then(() => {
      console.log("A");
    })
    .then(() => wait(2000))
    .then(() => {
      console.log("B");
    })
    .then(() => wait(3000))
    .then(() => {
      console.log("C");
    });
}

function g2() {
  // TODO: new Promise を使わないように書き換えなさい
  return wait(1000)
    .then(() => console.log("A"))
    .then(() => wait(2000))
    .then(() => console.log("B"))
    .then(() => wait(3000))
    .then(() => console.log("C"))
    .then(() => undefined)
    .catch(() => undefined);
}

function g3() {
  // 以下2つの関数が存在するとします (中身は適当)
  function fetchUser() {
    return Promise.resolve({ id: 42, name: "John" });
  }
  function fetchUserFriends(user) {
    return Promise.resolve([
      { name: "Sam", id: 100 },
      { name: "Bob", id: 1 },
    ]);
  }

  // TODO: var, let, const による変数宣言を無くしなさい。async/awaitは使用しないこと。
  return fetchUser()
    .then((user) => {
      return Promise.all([user.name, fetchUserFriends(user)]);
    })
    .then(([name, friends]) => {
      console.log(`${name} has ${friends.length} friends!`);
    });
}

function g4() {
  function someFunction() {
    return 42;
  }

  // NOTE: この関数 g4 は Promise を返す必要があるものとする
  // (利用しているフレームワークはライブラリがそういう関数を要求するとでも思って下さい)
  // TODO: new Promise を使わないように書き換えなさい。async/awaitは使用しないこと。
  return Promise.resolve(someFunction());
}
