// 50 x 50 の盤面とする
const ROWS = 50;
const COLS = 50;
// 1セルのサイズ
const RESOLUTION = 10;

const canvas = document.querySelector("#screen");
const ctx = canvas.getContext("2d");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

canvas.width = ROWS * RESOLUTION;
canvas.height = COLS * RESOLUTION;

const socket = new WebSocket("ws://localhost:3003");

socket.addEventListener("message", (e) => {
  const message = JSON.parse(e.data);

  // update.eventなら画面を更新
  if (message.type === "update") {
    renderGrid(message.grid);
    console.log("update");
  }
});

// canvas がクリックされたときの処理
// 変更を伝達する
canvas.addEventListener("click", function (evt) {
  const rect = canvas.getBoundingClientRect();
  const pos = { x: evt.clientX - rect.left, y: evt.clientY - rect.top };

  const row = Math.floor(pos.y / RESOLUTION);
  const col = Math.floor(pos.x / RESOLUTION);

  const message = {
    type: "toggle",
    row,
    col,
  };

  socket.send(JSON.stringify(message));
  // sound.cloneNode().play();
});

// start
startButton.addEventListener("click", () => {
  const message = {
    type: "start",
  };

  socket.send(JSON.stringify(message));
});

// pause
pauseButton.addEventListener("click", () => {
  const message = {
    type: "pause",
  };

  socket.send(JSON.stringify(message));
});

// grid を canvas に描画する
function renderGrid(grid) {
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      const cell = grid[row][col];
      ctx.beginPath();
      ctx.rect(col * RESOLUTION, row * RESOLUTION, RESOLUTION, RESOLUTION);
      ctx.fillStyle = cell ? "black" : "white";
      ctx.fill();
      ctx.stroke();
    }
  }
}
