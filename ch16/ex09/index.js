import express from "express";
import fs from "fs";
import path from "path";

import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// test/mirrorで送られたとき、元のリクエストをエコーする
app.all("/test/mirror", (req, res) => {
  res.set("Content-Type", "text/plain; charset=UTF-8");
  let headers = req.headers;
  let message = `${req.method} ${req.url} HTTP/${req.httpVersion}\r\n`;
  for (let header in headers) {
    message += `${header}: ${headers[header]}\r\n`;
  }

  message += "\r\n";

  console.log(req.body);

  // bodyがあれば追加
  if (req.body) {
    message += JSON.stringify(req.body);
  }
  res.status(200).send(message + "\r\n");
});

// それ以外の場合
app.all("*", (req, res) => {
  let filename = req.path.substring(1);

  filename = filename.replace(/\.\.\//g, "");
  filename = path.resolve(__dirname, filename);

  let type;
  switch (path.extname(filename)) {
    case ".html":
    case ".htm":
      type = "text/html";
      break;
    case ".css":
      type = "text/css";
      break;
    case ".js":
      type = "text/javascript";
      break;
    case ".json":
      type = "application/json";
      break;
    case ".png":
      type = "image/png";
      break;
    case ".jpg":
    case ".jpeg":
      type = "image/jpeg";
      break;
    case ".txt":
      type = "text/plain";
      break;
    default:
      type = "application/octet-stream";
      break;
  }

  let stream = fs.createReadStream(filename);
  stream.once("readable", () => {
    res.set("Content-Type", type);
    res.status(200);
    stream.pipe(res);
  });

  stream.on("error", (err) => {
    res.set("Content-Type", "text/plain", "charset=UTF-8");
    res.status(404).send(err.message);
  });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});

export default app;
