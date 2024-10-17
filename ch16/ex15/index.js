import threads from "worker_threads";

if (threads.isMainThread) {
  console.log("This is the main thread");

  let num = 0;
  let worker = new threads.Worker("./index.js", { workerData: { num: num } });

  worker.on("online", () => {
    for (let i = 0; i < 10_000_000; i++) {
      num++;
    }

    worker.on("message", (msg) => {
      if (msg === "done") {
        console.log(num);
      } else {
        num++;
      }
    });
  });
} else {
  // let num = workerData.num;
  for (let i = 0; i < 10_000_000; i++) {
    threads.parentPort.postMessage("increment num");
  }

  threads.parentPort.postMessage("done");
}
