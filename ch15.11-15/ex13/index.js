const chatForm = document.querySelector("#chatForm");
const input = document.querySelector("#messageInput");
const messages = document.querySelector("#messages");
const button = document.querySelector("button");

chatForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // 完了するまで送信できないようにする
  button.disabled = true;

  // メッセージを画面に出力する
  const message = input.value;
  input.value = "";

  const messageElement = document.createElement("div");
  messageElement.className = "message sent";
  messageElement.textContent = message;

  messages.appendChild(messageElement);
  messages.scrollTop = messages.scrollHeight;

  const requestbody = {
    model: "gemma2:2b",
    messages: [
      {
        role: "user",
        content: `以下の質問に日本語で答えてください。${message}`,
      },
    ],
  };
  // メッセージの内容をOllamaに問い合わせる
  fetch("http://localhost:11434/api/chat", {
    method: "POST",
    headers: new Headers({ "Content-Type": "application/json" }),
    body: JSON.stringify(requestbody),
  })
    .then((response) => {
      return streamBody(response);
    })
    .finally(() => {
      button.disabled = false;
    });
});

async function streamBody(response) {
  let reader = response.body.getReader();
  let decoder = new TextDecoder("utf-8");

  const messageElement = document.createElement("div");
  messageElement.className = "message received";
  document.getElementById("messages").appendChild(messageElement);

  let body = "";

  while (true) {
    let { done, value } = await reader.read();

    if (value) {
      let chunk = decoder.decode(value, { stream: true });
      let words = JSON.parse(chunk).message.content;
      messageElement.textContent += words;

      messages.scrollTop = messages.scrollHeight;
    }

    if (done) {
      break;
    }
  }

  return body;
}
