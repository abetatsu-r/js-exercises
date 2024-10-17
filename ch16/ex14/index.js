import threads from "worker_threads";

document.getElementById("image").addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (!file) {
    return;
  }

  const img = new Image();
  const reader = new FileReader();

  reader.addEventListener("load", (e) => {
    img.src = e.target.result;
  });

  img.addEventListener("load", () => {
    const originalCanvas = document.getElementById("original");
    const filteredCanvas = document.getElementById("filtered");
    const originalCtx = originalCanvas.getContext("2d");
    const filteredCtx = filteredCanvas.getContext("2d");

    originalCanvas.width = img.width;
    originalCanvas.height = img.height;
    filteredCanvas.width = img.width;
    filteredCanvas.height = img.height;

    originalCtx.drawImage(img, 0, 0);

    const imageData = originalCtx.getImageData(0, 0, img.width, img.height);

    const width = img.width;
    const height = img.height;

    let gausianWorker = new threads.Worker("./gausian.js");
    gausianWorker.postMessage(
      {
        width,
        height,
        imageData,
      },
      [imageData.data.buffer],
    );

    gausianWorker.onmessage = (message) => {
      console.log("resturn");
      filteredCtx.putImageData(message.data.outputImageData, 0, 0);
    };

    // グレースケールへの変換 (RGB を足して平均を取っている)
    //
    // ガウシアンフィルタを実装する場合はこの周辺のコードを変更しなさい
    // imageData の中身はそのままに別の配列に結果を格納するとよい
    // ```js
  });

  reader.readAsDataURL(file);
});
