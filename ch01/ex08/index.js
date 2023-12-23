import { histogramFromStdin } from "./histogram.js";

histogramFromStdin().then((histogram) => {
  console.log(histogram.toString());
});
