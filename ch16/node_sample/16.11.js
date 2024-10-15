import threads from "worker_threads";

if (threads.isMainThread) {
  const worker = new threads.Worker(__filename);
  worker.postMessage("Hello, worker");
}
