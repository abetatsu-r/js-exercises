const data = [
  { name: "Alice", class: "A", math: 10, chemistry: 30, geography: 20 },
  { name: "Bob", class: "A", math: 50, chemistry: 50, geography: 60 },
  { name: "Carol", class: "A", math: 70, chemistry: 55, geography: 30 },
  { name: "Dave", class: "B", math: 40, chemistry: 20, geography: 60 },
  { name: "Ellen", class: "B", math: 60, chemistry: 70, geography: 40 },
  { name: "Frank", class: "B", math: 90, chemistry: 70, geography: 80 },
  { name: "Isaac", class: "C", math: 70, chemistry: 40, geography: 50 },
  { name: "Justin", class: "C", math: 80, chemistry: 40, geography: 30 },
  { name: "Mallet", class: "C", math: 60, chemistry: 70, geography: 90 },
];

// 1. mathの全員の合計点
console.log(data.reduce((acc, v) => acc + v.math, 0));

// 2. クラスAのchemistryの平均点
console.log(
  data
    .filter((obj) => obj.class === "A")
    .map((v, _, a) => v.chemistry / a.length)
    .reduce((acc, v) => acc + v),
);

// 3. 3科目合計点のクラスC内での平均点
console.log(
  data
    .filter((obj) => obj.class === "C")
    .map((v, _, a) => (v.math + v.chemistry + v.geography) / a.length)
    .reduce((acc, v) => acc + v),
);

// 4. 3科目合計点が最も高い人のname
console.log(
  data
    .map((obj) => {
      return {
        name: obj.name,
        score: obj.math + obj.chemistry + obj.chemistry,
      };
    })
    .reduce((acc, obj) => {
      return acc.score > obj.score ? acc : obj;
    }).name,
);

// 5. 全体のgeographyの標準偏差
let average = data.reduce((acc, obj) => acc + obj.geography, 0) / data.length;
console.log(
  Math.sqrt(
    data
      .map((v) => Math.pow(v.geography - average, 2))
      .reduce((acc, v) => acc + v) / data.length,
  ),
);

/**
530
45
176.66666666666669
Frank
22.3330569358242
*/
