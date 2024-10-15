import { spawn } from "child_process";
import path from "path";
import { start } from "repl";

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

// シグナルのトラップ
const signals = ["SIGTERM", "SIGINT"]; // トラップするシグナルのリスト

signals.forEach((signal) => {
  process.on(signal, () => {
    console.log(`Received ${signal}. Notifying child and exiting...`);
    if (child) {
      console.log("お前呼ばれてる？");
      process.kill(child.pid, signal); // 子プロセスにシグナルを送信
    }
    console.log("じゃあお前は？");
    process.exit(0); // 自分自身も終了
  });
});

// 子プロセスを起動して、異常終了時に再起動する
async function main() {
  while (true) {
    const [code, signal] = await startChild();
    console.log(`Child process exited with code: ${code}, signal: ${signal}`);

    // 子プロセスが異常終了した場合は再起動
    if (code !== 0) {
      console.log("Child process crashed. Restarting...");
    } else {
      console.log("Child process exited normally. Exiting main process.");
      break; // 正常終了した場合はループを抜ける
    }
  }
}

main();
