/**
 * 方針: 差を出す
 */
export function getDaysInTheMonth(year, month) {
  if (typeof year !== "number" || typeof month !== "number") {
    throw Error("NaN");
  }

  const d1 = new Date(year, month - 1, 1, 0, 0, 0);
  const d2 = new Date(year, month, 1, 0, 0, 0);

  return (d2 - d1) / (24 * 60 * 60 * 1000);
}

export function getNumOfWeekDaysWithSpan(begin, end) {
  const dateBegin = new Date(begin);
  const dateEnd = new Date(end);

  if (dateEnd - dateBegin < 0) throw Error("逆");

  // 間の日数を出す
  const n = (dateEnd - dateBegin + 1) / (24 * 60 * 60 * 1000);

  const dayBegin = dateBegin.getDay();
  const dayEnd = dateEnd.getDay();

  const d = dayBegin - dayEnd > 1 ? 1 : 0;
  const diffOfBegin = dayBegin > 1 ? dayBegin - 1 : 0;
  const diffOfEnd = dayEnd < 5 ? 5 - dayEnd : 0;

  return Math.ceil((n + d * 7) / 7) * 5 - (diffOfBegin + diffOfEnd);
}

export function getLocalDayString(date, locale) {
  const d = new Date(date);
  return new Intl.DateTimeFormat(locale, { weekday: "long" }).format(d);
}

export function getLastMonthStart() {
  const now = new Date();
  const [, month, , year] = now.toDateString().split(" ");

  const month_num =
    [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ].findIndex((v) => v === month) + 1;

  console.log(year);
  return new Date(year, month_num - 2, 1, 0, 0, 0);
}

console.log(getLastMonthStart());
