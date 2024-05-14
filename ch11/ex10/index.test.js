import {
  getDaysInTheMonth,
  getLastMonthStart,
  getLocalDayString,
  getNumOfWeekDaysWithSpan,
} from "./index.js";

test("月のに数を返す関数", () => {
  expect(getDaysInTheMonth(2024, 5)).toBe(31);
  expect(getDaysInTheMonth(2024, 6)).toBe(30);
  expect(getDaysInTheMonth(2024, 12)).toBe(31);
  expect(getDaysInTheMonth(2024, 2)).toBe(29);
  expect(getDaysInTheMonth(2023, 2)).toBe(28);
});

test("期間中の平日日数", () => {
  expect(getNumOfWeekDaysWithSpan("2024-05-13", "2024-05-17")).toBe(5);
  expect(getNumOfWeekDaysWithSpan("2024-05-14", "2024-05-16")).toBe(3);
  expect(getNumOfWeekDaysWithSpan("2024-05-13", "2024-05-31")).toBe(15);
  expect(getNumOfWeekDaysWithSpan("2024-05-16", "2024-05-30")).toBe(11);
  expect(getNumOfWeekDaysWithSpan("2024-05-17", "2024-05-27")).toBe(7);
  expect(getNumOfWeekDaysWithSpan("2024-05-12", "2024-05-25")).toBe(10);
});

test("曜日取得", () => {
  expect(getLocalDayString("2024-05-13", "ja-JP")).toBe("月曜日");
  expect(getLocalDayString("2024-05-14", "en-Us")).toBe("Tuesday");
});

test("先月の一日取得", () => {
  const d = new Date();

  expect(getLastMonthStart().toLocaleString()).toBe(
    new Date(d.getFullYear(), d.getMonth() - 1, 1, 0, 0, 0).toLocaleString(),
  );
});
