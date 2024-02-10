/**
 * 週休二日制で休日かどうかを判定する(if-else)
 * @param {*} day :曜日を指す文字列リテラル
 * @returns 
 */
export let isHolidayForWhiteCompany = function(day) {
  let holidays = ['土', '日'];
  let weekdays = ['月', '火', '水', '木', '金'];
  if (holidays.includes(day)) {
    return true;
  } else if (weekdays.includes(day)) {
    return false;
  } else {
    throw new Error("遊んでないで働け");
  }
}

/**
 * 週休二日制で休日かどうかを判定する(if-else)
 * @param {*} day :曜日を指す文字列リテラル
 * @returns
 */
export let isHolidayForWhiteCompanyWithSwitch = function(day) {
    switch(day) {
        case '土':
        case '日':
            return true;
        case '月':
        case '火':
        case '水':
        case '木':
        case '金':
            return false;
        default :
             throw new Error("う～ん、出勤");
    }
}
