import http from "http";
import fs from "fs";
import path from "path";
import url from "url";

function serve(rootDirectory, port) {
  let server = new http.Server();
  server.listen(port);
  console.log("Listening on port", port);

  server.on("request", (request, response) => {
    let endpoint = url.parse(request.url).pathname;

    if (endpoint === "/test/mirror") {
      response.setHeader("Content-Type", "text/plain; charset=UTF-8");

      response.writeHead(200);
      response.write(`${req.method} ${req.url} HTTP/${req.httpVersion}\r\n`);

      for (let header in req.headers) {
        response.write(`${header}: ${req.headers[header]}\r\n`);
      }

      response.write("\r\n");

      request.pipe(response);
    }
    // PUTリクエストの場合、requestBodyのファイルをアップロードする
    else if (request.method === "PUT") {
      let filename = endpoint.substring(1);

      // ファイル名に含まれるディレクトリが存在しない場合、作成する
      fs.mkdirSync(path.dirname(endpoint).substring(1), { recursive: true });

      let stream = fs.createWriteStream(path.resolve(rootDirectory, filename));
      request.pipe(stream);
      // アップロードが完了したら200を返す
      request.on("end", () => {
        response.writeHead(200);
        response.end();
      });
    } else {
      let filename = endpoint.substring(1);
      filename = filename.replace(/\.\.\//g, "");
      filename = path.resolve(rootDirectory, filename);

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
        response.setHeader("Content-Type", type);
        response.writeHead(200);
        stream.pipe(response);
      });

      stream.on("error", (err) => {
        response.setHeader("Content-Type", "text/plain; charset=UTF-8");
        response.writeHead(404);
        response.end(err.message);
      });
    }
  });
}

serve(process.argv[2] || "", parseInt(process.argv[3]) || 8000);
