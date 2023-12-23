import { DefaultMap } from "./defaultMap.js";

export class Histogram {
  constructor() {
    this.letterCounts = new DefaultMap(0);
    this.totalLetters = 0;
  }

  add(text) {
    // スラッシュで囲むと正規表現
    // 正規表現末尾のgはグローバルサーチフラグ
    // 指定した正規表現のパターンにマッチするすべての文字列を返す
    text = text.replace(/\s/g, "").toUpperCase();

    for (let character of text) {
      let count = this.letterCounts.get(character);
      this.letterCounts.set(character, count + 1);
      this.totalLetters++;
    }
  }

  toString() {
    // スプレッド構文
    // letterCountsを配列として展開している
    let entries = [...this.letterCounts];

    entries.sort((a, b) => {
      if (a[1] === b[1]) {
        // letterCountsを配列展開しているためat(1)にはcountが入っている
        return a[0] < b[0] ? -1 : 1;
      } else {
        return b[1] - a[1];
      }
    });

    for (let entry of entries) {
      entry[1] = (entry[1] / this.totalLetters) * 100;
    }

    entries = entries.filter((entry) => entry[1] >= 1);

    let lines = entries.map(
      ([l, n]) => `${l}: ${"#".repeat(Math.round(n))} ${n.toFixed(2)}%`,
    );

    return lines.join("\n");
  }
}

export async function histogramFromStdin() {
  process.stdin.setEncoding("utf-8");
  let histogram = new Histogram();
  for await (let chunk of process.stdin) {
    histogram.add(chunk);
  }
  return histogram;
}
