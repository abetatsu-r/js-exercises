const canvas = document.querySelector("#screen");
const ctx = canvas.getContext("2d");
const dimInput = document.querySelector("#numberRange");
const currentDim = document.querySelector("#selectedNumber");
const upDim = document.querySelector("#countup");
const minusDim = document.querySelector("#countdown");

const WIDTH = 512;

canvas.width = WIDTH;
canvas.height = WIDTH;

let x;
let y;
let lineLength;

dimInput.addEventListener("input", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // 再帰回数
  const n = dimInput.value;
  currentDim.textContent = n;

  // 結ぶ線の長さ
  lineLength = WIDTH / Math.pow(2, n);

  // 描画開始位置
  x = lineLength / 2;
  y = lineLength / 2;

  ctx.beginPath();
  ctx.moveTo(x, y);

  console.log(x + ": " + y);

  dru(n);
});

upDim.addEventListener("click", () => {
  if (dimInput.value < 6) {
    dimInput.value++;
    dimInput.dispatchEvent(new Event("input"));
  }
});

minusDim.addEventListener("click", () => {
  if (dimInput.value > 0) {
    dimInput.value--;
    dimInput.dispatchEvent(new Event("input"));
  }
});

function dru(n) {
  if (n <= 0) return;
  rdl(n - 1);
  y += lineLength;
  line(); // ↓
  dru(n - 1);
  x += lineLength;
  line(); // →
  dru(n - 1);
  y -= lineLength;
  line(); // ↑
  lur(n - 1);
}

function rdl(n) {
  if (n <= 0) return;
  dru(n - 1);
  x += lineLength;
  line(); // →
  rdl(n - 1);
  y += lineLength;
  line(); // ↓
  rdl(n - 1);
  x -= lineLength;
  line(); // ←
  uld(n - 1);
}

function lur(n) {
  if (n <= 0) return;
  uld(n - 1);
  x -= lineLength;
  line(); // ←
  lur(n - 1);
  y -= lineLength;
  line(); // ↑
  lur(n - 1);
  x += lineLength;
  line(); // →
  dru(n - 1);
}

function uld(n) {
  if (n <= 0) return;
  lur(n - 1);
  y -= lineLength;
  line(); // ↑
  uld(n - 1);
  x -= lineLength;
  line(); // ←
  uld(n - 1);
  y += lineLength;
  line(); // ↓
  rdl(n - 1);
}

function line() {
  ctx.lineTo(x, y);
  ctx.stroke();
}
