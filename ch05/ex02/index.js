/**
 * if-elseを使って、エスケープ文字をエスケープシーケンスに変換する
 * @param {*} string : 文字列
 */
export let replaceToEscapeSequence = function (string) {
  let replaced = "";
  for (let char of string) {
    if (char === "\0") {
      replaced += "\\0";
    } else if (char === "\b") {
      replaced += "\\b";
    } else if (char === "\t") {
      replaced += "\\t";
    } else if (char === "\n") {
      replaced += "\\n";
    } else if (char === "\v") {
      replaced += "\\v";
    } else if (char === "\f") {
      replaced += "\\f";
    } else if (char === "\r") {
      replaced += "\\r";
    } else if (char === '"') {
      replaced += '\\"';
    } else if (char === "'") {
      replaced += "\\'";
    } else if (char === "\\") {
      replaced += "\\\\";
    } else {
      replaced += char;
    }
  }
  return replaced;
};

/**
 * switch文を使って、エスケープ文字をエスケープシーケンスに変換する
 * @param {*} string
 * @returns 置換後の文字列
 */
export let replaceToEscapeSequenceWithSwitch = function (string) {
  let replaced = "";
  for (let char of string) {
    switch (char) {
      case "\0":
        replaced += "\\0";
        break;
      case "\b":
        replaced += "\\b";
        break;
      case "\t":
        replaced += "\\t";
        break;
      case "\n":
        replaced += "\\n";
        break;
      case "\v":
        replaced += "\\v";
        break;
      case "\f":
        replaced += "\\f";
        break;
      case "\r":
        replaced += "\\r";
        break;
      case '"':
        replaced += '\\"';
        break;
      case "'":
        replaced += "\\'";
        break;
      case "\\":
        replaced += "\\\\";
        break;
      default:
        replaced += char;
        break;
    }
  }

  return replaced;
};

console.log("i \"have a 'pen\\");
console.log(replaceToEscapeSequenceWithSwitch("i \"have a 'pen\\"));
