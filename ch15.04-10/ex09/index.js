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
    //
    const gausian = [
      [1, 4, 6, 4, 1],
      [4, 16, 24, 16, 4],
      [6, 24, 36, 24, 6],
      [4, 16, 24, 16, 4],
      [1, 4, 6, 4, 1],
    ];

    console.log("width: " + img.width);
    // TODO: ここで imageData.data を参照して outputData に結果を格納
    // WARNING: 超遅い
    for (let i = 0; i < data.length; i += 4) {
      const row = Math.floor(i / 4) % img.width;
      const col = Math.floor(i / (4 * img.width));

      let r = 0;
      let g = 0;
      let b = 0;
      for (let ir = 0; ir < 5; ir++) {
        for (let ic = 0; ic < 5; ic++) {
          const current_row = row + ir - 2;
          const current_col = col + ic - 2;
          if (
            current_row < 0 ||
            current_row >= img.width ||
            current_col < 0 ||
            current_col >= img.height
          ) {
            continue;
          }

          let index = (current_col * img.width + current_row) * 4;

          r += (data[index] * gausian[ir][ic]) / 256;
          g += (data[index + 1] * gausian[ir][ic]) / 256;
          b += (data[index + 2] * gausian[ir][ic]) / 256;
        }
      }

      outputData[i] = r;
      outputData[i + 1] = g;
      outputData[i + 2] = b;
      outputData[i + 3] = data[i + 3];
    }

    const outputImageData = new ImageData(outputData, img.width, img.height);
    filteredCtx.putImageData(outputImageData, 0, 0);
  });

  reader.readAsDataURL(file);
});
