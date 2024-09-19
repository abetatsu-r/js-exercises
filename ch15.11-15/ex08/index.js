let socket = new WebSocket("ws://localhost:3003");
const form = document.querySelector("#sendRequest");
const form2 = document.querySelector("#sendRequest2");

const input = document.querySelector("#msg");
const input2 = document.querySelector("#msg2");

socket.onmessage = (e) => {
  const data = JSON.parse(e.data);
  data.msg += "Hello, ";
  console.log("response!");
  socket.send(JSON.stringify(data));
};

form.addEventListener("submit", async (e) => {
  waitForResponse(e, input, form);
});
form2.addEventListener("submit", async (e) => {
  waitForResponse(e, input2, form2);
});

async function waitForResponse(e, input, selector) {
  e.preventDefault();

  const msg = input.value.trim();
  if (msg === "") {
    return;
  }
  input.value = "";

  const response = await sendRequest(msg);
  console.log(response);
  const elem = document.createElement("div");
  elem.textContent = response;
  selector.parentNode.insertBefore(elem, selector.nextSibling);
}

async function sendRequest(str) {
  // requestId(0~256)、本当はuuidが好ましいが
  let requestId = Math.floor(Math.random() * 256);
  const data = {
    requestId,
    msg: str,
  };

  // sendする
  if (socket.readyState !== 1) {
    socket.addEventListener("open", () => {
      socket.send(JSON.stringify(data));
    });
  } else {
    socket.send(JSON.stringify(data));
  }

  console.log("sends and ..." + requestId);

  // 待機状態になる
  // => 一定時間にresponseを受け取ったら解決
  // => 一定時間経過したらreject
  // => closeイベントが呼ばれたとき
  return new Promise((resolve, reject) => {
    // messageを受け取ったら解決する
    socket.onmessage = (e) => {
      console.log("accept!" + e.data + ":" + requestId);
      const json = JSON.parse(e.data);
      if (json.requestId === requestId) {
        resolve(json.msg);
      }
    };

    setTimeout(reject, 10000);
  });
}
