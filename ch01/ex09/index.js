import { wordHistogramFromStdin } from "./wordHistogram.js";

wordHistogramFromStdin().then((wordHistogram) => {
  console.log(wordHistogram.toString());
});
