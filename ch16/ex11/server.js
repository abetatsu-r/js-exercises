import net from "net";
import fs from "fs";

let server = net.createServer();
server.listen(3000, () => console.log("Listening on port 3000"));

server.on("connection", (socket) => {
  socket.on("data", (data) => {
    returnHtml(data, socket);
  });
});

function returnHtml(data, socket) {
  const request = data.toString();
  const lines = request.split("\r\n");
  const [method, path] = lines[0].split(" ");

  // "/"でGETリクエストを受けた時、./form.htmlを返す
  if (method === "GET" && path === "/") {
    // form.htmlを読み込む
    fs.readFile("./form.html", (err, data) => {
      socket.write("HTTP/1.1 200 OK\r\n");
      socket.write("Content-Type: text/html\r\n\r\n");
      socket.write(data);
      socket.end();
    });
  } else if (method === "POST" && path === "/greeting") {
    const body = lines[lines.length - 1];
    // name=aaa&greeting=cccの形式でくるので分解する
    const params = new URLSearchParams(body);
    const name = params.get("name");
    const greeting = params.get("greeting");

    socket.write("HTTP/1.1 200 OK\r\n");
    socket.write("Content-Type: text/html\r\n\r\n");

    // responseとして返すHTML
    socket.write(`<html><body><h1>${greeting}, ${name}!</h1></body></html>`);
    socket.end();
  } else {
    // 存在しないURLなら404を返す
    // 存在しない = / or /greeting 以外
    if (path !== "/" && path !== "/greeting") {
      socket.write("HTTP/1.1 404 Not Found\r\n");
      socket.write("Content-Type: text/html\r\n\r\n");
      socket.write("<html><body><h1>404 Not Found</h1></body></html>");
      socket.end();
    } else {
      // それ以外の場合は405を返す
      // post以外の/greetingや、get以外の/が該当
      socket.write("HTTP/1.1 405 Method Not Allowed\r\n");
      socket.write("Content-Type: text/html\r\n\r\n");
      socket.write("<html><body><h1>405 Method Not Allowed</h1></body></html>");
      socket.end();
    }
  }
}
