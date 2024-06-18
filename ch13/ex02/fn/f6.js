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

function f6() {
  // NOTE: 1つの Promise に対し then を2回呼び出すとどうなるか

  const p = wait1().then(logA);
  p.then(() => wait1()).then(logB);
  p.then(() => wait2()).then(logC);
}

f6();
