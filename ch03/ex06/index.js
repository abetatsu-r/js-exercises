export function substring(str, indexStart, indexEnd) {
  // indexEndが指定されていなければindexStartから末尾までを返す
  if (indexEnd === undefined) {
    indexEnd = str.length;
  }

  // NaNがあれば0とみなす
  indexStart = Number.isNaN(indexStart) ? 0 : indexStart;
  indexEnd = Number.isNaN(indexEnd) ? 0 : indexEnd;

  indexStart = isNaN(Number(indexStart)) ? 0 : indexStart;
  indexEnd = isNaN(Number(indexStart)) ? 0 : indexEnd;

  // 引数の範囲は0以上length以下
  if (indexStart < 0) {
    indexStart = 0;
  } else if (indexStart > str.length) {
    indexStart = str.length;
  }

  if (indexEnd < 0) {
    indexEnd = 0;
  } else if (indexEnd > str.length) {
    indexEnd = str.length;
  }

  indexStart = Math.trunc(indexStart);
  indexEnd = Math.trunc(indexEnd);

  let ret = "";

  if (indexStart === indexEnd) {
    return ret;
  } else if (indexStart > indexEnd) {
    const temp = indexEnd;
    indexEnd = indexStart;
    indexStart = temp;
  }

  for (let index = indexStart; index < indexEnd; index++) {
    ret += str[index];
  }
  return ret;
}

export function slice(str, indexStart, indexEnd) {
  if (indexStart > str.length) {
    return "";
  }

  if (indexStart < 0) {
    indexStart = Math.max(indexStart + str.length, 0);
  }

  // NaNがあれば0とみなす
  indexStart = Number.isNaN(indexStart) ? 0 : indexStart;
  indexEnd = Number.isNaN(indexEnd) ? 0 : indexEnd;

  indexStart = isNaN(Number(indexStart)) ? 0 : indexStart;
  indexEnd =
    isNaN(Number(indexEnd)) || indexEnd > str.length ? str.length : indexEnd;

  if (indexEnd < 0) {
    indexEnd = Math.max(indexEnd + str.length, 0);
  }

  indexStart = Math.trunc(indexStart);
  indexEnd = Math.trunc(indexEnd);

  if (indexStart >= indexEnd) {
    return "";
  }

  let ret = "";
  for (let index = indexStart; index < indexEnd; index++) {
    ret += str[index];
  }
  return ret;
}

export function padStart(str, targetLength, padString) {
  if (str.length >= targetLength) {
    return str;
  }

  if (padString === undefined) {
    padString = "\u0020";
  }

  if (padString.length === 0) {
    return str;
  }

  let count = Math.trunc((targetLength - str.length) / padString.length);
  let rem = (targetLength - str.length) % padString.length;

  for (let i = rem; i > 0; i--) {
    str = padString[i - 1] + str;
  }

  for (let i = 0; i < count; i++) {
    str = padString + str;
  }
  return str;
}

export function trim(str) {
  let indexStart = 0;
  let indexEnd = str.length - 1;

  let isStartWithSpace = true;
  let isEndWithSpace = true;

  while (isStartWithSpace && indexStart < str.length) {
    isStartWithSpace = str[indexStart] === " ";
    if (isStartWithSpace) {
      indexStart++;
    }
  }

  while (isEndWithSpace && indexEnd > 0) {
    isEndWithSpace = str[indexEnd] === " ";
    if (isEndWithSpace) {
      indexEnd--;
    }
  }

  return substring(str, indexStart, indexEnd + 1);
}
