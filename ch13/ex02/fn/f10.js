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

function f10() {
  // NOTE: then(r, c) と then(r).catch(c) は等しいか？
  wait1()
    .then(() => 42)
    .then(errY, (e) => log(e.message))
    .finally(logA);
}

f10();
