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
    const data = imageData.data;

    // グレースケールへの変換 (RGB を足して平均を取っている)
    //
    // ガウシアンフィルタを実装する場合はこの周辺のコードを変更しなさい
    // imageData の中身はそのままに別の配列に結果を格納するとよい
    // ```js
    const outputData = new Uint8ClampedArray(imageData.data.length);

    // 仮置き(netから引っ張ってきた値、σ=0.85くらいらしい)
    const gausianFilter = [
      1, 4, 6, 4, 1,
      4, 16, 24, 16, 4,
      6, 24, 36, 24, 6,
      4, 16, 24, 16, 4,
      1, 4, 6, 4, 1,
    ].map(x => x /256);

    // TODO: ここで imageData.data を参照して outputData に結果を格納
    // だるいんで後回し
    for (let i = 0; i < data.length; i += 4) {
      const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
      const focused_x = (i / 4) % width;
      const focused_y = (i / 4 - x) / width;
      
      let sum = [0, 0, 0, 0];
      for (let x = -2; x <= 2; x++) {
        for (let y = -2; y <= 2; y++) {
          // 0padding
          if (focused_x + x < 0 || focused_x + x >= width) {
            continue;
          }

          if (focused_y + y < 0 || focused_y + y >= height) {
            continue;
          }

          sum =
        }
      }
    }
    const outputImageData = new ImageData(outputData, img.width, img.height);
    filteredCtx.putImageData(outputImageData, 0, 0);
  });

  reader.readAsDataURL(file);
});
