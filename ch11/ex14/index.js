export function sortJapanese(arr) {
  const japaneseOrder = new Intl.Collator("ja").compare;
  return arr.sort(japaneseOrder);
}

export function toJapaneseDateString(date) {
  const options = { era: "long", year: "numeric", month: "numeric" };
  const options2 = { day: "numeric" };

  // なぜかdayまで入れると元号/yy/mm/ddになるので分けてくっつける
  return (
    new Intl.DateTimeFormat("ja-JP-u-ca-japanese", options).format(date) +
    new Intl.DateTimeFormat("ja-JP-u-ca-japanese", options2).format(date)
  );
}
