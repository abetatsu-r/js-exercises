"use strict";

const button = document.querySelector("#send-button");
const messageContainer = document.getElementById("message-container");
button.addEventListener("click", (e) => {
  e.preventDefault();
  getMessageFromServer();
});
async function getMessageFromServer() {
  const messageElement = document.createElement("div");
  messageElement.className = "message";
  messageElement.textContent = "";
  messageContainer.appendChild(messageElement);

  // TODO: ここにサーバーとのやり取り等を実装しなさい
  let message = new EventSource("http://localhost:3000/message");
  message.addEventListener("message", (event) => {
    let div = document.createElement("div");
    let data = JSON.parse(event.data);
    let value = data.value;

    div.append(value);
    messageContainer.append(div);

    // doneならcloseする
    if (data.done) {
      message.close();
    }
  });
}
