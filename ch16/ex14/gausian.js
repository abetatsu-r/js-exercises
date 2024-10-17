onmessage = function (message) {
  const { width, height, imageData } = message.data;
  console.log(imageData.data.length);
  console.log(width);
  console.log(height);

  const data = imageData.data;

  const outputData = new Uint8ClampedArray(imageData.data.length);
  //
  const gausian = [
    [1, 4, 6, 4, 1],
    [4, 16, 24, 16, 4],
    [6, 24, 36, 24, 6],
    [4, 16, 24, 16, 4],
    [1, 4, 6, 4, 1],
  ];

  // TODO: ここで imageData.data を参照して outputData に結果を格納
  // WARNING: 超遅い
  for (let i = 0; i < data.length; i += 4) {
    const row = Math.floor(i / 4) % width;
    const col = Math.floor(i / (4 * width));

    let r = 0;
    let g = 0;
    let b = 0;
    for (let ir = 0; ir < 5; ir++) {
      for (let ic = 0; ic < 5; ic++) {
        const current_row = row + ir - 2;
        const current_col = col + ic - 2;
        if (
          current_row < 0 ||
          current_row >= width ||
          current_col < 0 ||
          current_col >= height
        ) {
          continue;
        }

        let index = (current_col * width + current_row) * 4;

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

  const outputImageData = new ImageData(outputData, width, height);
  postMessage({ outputImageData }, [outputImageData.data.buffer]);
};
