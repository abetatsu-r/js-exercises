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
} from "../../lib.js";

function f4() {
  // NOTE: f5 との比較用
  wait2()
    .then(() => {
      logA();
      return 40;
    })
    .then((value) =>
      wait(1000).then(() => {
        logB();
        return 100;
      }),
    )
    .then((v) => log(v));
}

f4();
