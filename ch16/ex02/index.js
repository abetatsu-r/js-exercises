import { spawn } from "child_process";
import path from "path";

// ESMでこのファイルの絶対パスとして__dirnameを定義するイディオム
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// startChildで起動したプロセスの参照
let child = null;

// node ./child.js を起動し、このプロセスが終了したときに解決するPromiseを返す
// cf. https://nodejs.org/api/child_process.html#event-close
async function startChild() {
  const childPath = path.join(__dirname, "child.js");
  child = spawn("node", [childPath]);

  child.stdout.on("data", (data) => {
    console.log(`stdout: ${data}`);
  });

  child.stderr.on("data", (data) => {
    console.error(`stderr: ${data}`);
  });

  return new Promise((res) => {
    child.on("close", (code, signal) => {
      res([code, signal]);
    });
  });
}

// signal(SIGINT)を送信して5秒後に子プロセスを終了する
/**
setTimeout(() => {
  child.kill("SIGINT");
}, 5000);
*/

// signal(SIGTERM)を送信して10秒後に子プロセスを終了する
setTimeout(() => {
  child.kill("SIGTERM");
}, 10000);

// 子プロセスを起動して、異常終了時に再起動する
async function main() {
  while (true) {
    let [code, signal] = await startChild();

    // 子プロセスが異常終了した場合は再起動
    if (code) {
      console.log("Child process crashed. Restarting...");
    } else {
      console.log(
        `Received ${signal}. Child process exited normally. Exiting main process.`,
      );
      process.exit(code); // 正常終了した場合はプロセスを終わらせる
    }
  }
}

main();
