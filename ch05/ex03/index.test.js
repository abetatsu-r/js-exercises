import {
  isHolidayForWhiteCompany,
  isHolidayForWhiteCompanyWithSwitch,
} from "./index.js";

function isHolidayTest(day, expected) {
  return [day, expected];
}

test.each([
  isHolidayTest("月", false),
  isHolidayTest("火", false),
  isHolidayTest("水", false),
  isHolidayTest("木", false),
  isHolidayTest("金", false),
  isHolidayTest("土", true),
  isHolidayTest("日", true),
])("%p曜日はやすみですか？ => %p", (day, expected) => {
  expect(isHolidayForWhiteCompany(day)).toBe(expected);
  expect(isHolidayForWhiteCompanyWithSwitch(day)).toBe(expected);
});
