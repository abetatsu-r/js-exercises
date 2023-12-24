import { DefaultMap } from "./defaultMap.js";

export class WordHistogram {
  constructor() {
    this.wordCounts = new DefaultMap(0);
    this.totalWords = 0;
  }

  add(text) {
    // (:TODO)後で理解する
    // 試した感じ、これで単語の配列ができる（重複）
    const matches = text.toLowerCase().matchAll(/\w+|\$[\d.]+|\S+/g);
    const words = [...matches].map((r) => r[0]);

    for (let word of words) {
      let count = this.wordCounts.get(word);
      this.wordCounts.set(word, count + 1);
      this.totalWords++;
    }
  }

  toString() {
    let entries = [...this.wordCounts];

    entries.sort((a, b) => {
      if (a[1] === b[1]) {
        return a[0] < b[0] ? -1 : 1;
      } else {
        return b[1] - a[1];
      }
    });

    for (let entry of entries) {
      entry[1] = (entry[1] / this.totalWords) * 100;
    }

    entries = entries.filter((entry) => entry[1] >= 0.5);

    const lines = entries.map(
      ([l, n]) => `${l}: ${"#".repeat(Math.round(10 * n))} ${n.toFixed(2)}%`,
    );

    return lines.join("\n");
  }
}

export async function wordHistogramFromStdin() {
  process.stdin.setEncoding("utf-8");
  let wordHistogram = new WordHistogram();

  for await (let chunk of process.stdin) {
    wordHistogram.add(chunk);
  }
  return wordHistogram;
}
