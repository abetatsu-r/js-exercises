/**
 * 方針
 * - local-part@domain
 * - local-partは最大1~64文字
 * - domainは1~最大252(理論上)文字
 * - 全体で254文字
 * - localPartに使える文字
 *   - [A-Za-z0-9\!\#\$\%\&\'\*\+\-\/\=\?\^\_\`\{\|\}\~]
 *   - .については先頭+@の前以外で、かつ連続しなければ以外では使える
 *   - ダブルクオートで囲えれば追加で( ) , : ; < > @ [ ]が使える(今回範囲外)
 *   - ダブルクオート+バックスラッシュの後に続けば" \ タブも使える(今回範囲外)
 * - domainに使える文字
 *   - dot-atom(localPartの一つ目と同義)
 *   - []\を使っていない[]で囲まれた文字列(今回範囲外)
 *
 * - 一行で書けたらかっこいいけど無理なので分割する
 */
export function isEmailAddress(str) {
  console.log(str);

  // lengthを狂わせるような文字はどのみちあとで消し飛ぶ
  if (!str || str.length > 255) return false;

  // 今回の制約ではlocalPart,domainに@は使えず、かつ@で始まる終わることも許されない
  // したがって、@で分割すると2つにならなければならない(はず)
  const parts = str.split("@");
  if (parts.length != 2) return false;

  const localPart = parts[0];
  const domain = parts[1];

  // localPartの判定

  // .の連続は許容しない
  const regConDot = /[.]{2,}/u;
  if (regConDot.test(str)) return false;

  // localPartの文字validation

  // 末尾先頭のdotは許容しない
  const regStartDot = /^[.]/;
  const regEndDot = /[.]$/;

  const regLocalPart =
    /^[a-zA-Z0-9\!#\$%&\'\*\+\/\=\?\^\_\`\{\|\}\~-]{1}[a-zA-Z0-9\!#\$%&\'\*\+\/\=\?\^\_\`\{\|\}\~.-]{0,62}[a-zA-Z0-9\!#\$%&\'\*\+\/\=\?\^\_\`\{\|\}\~-]?$/;
  if (
    !regLocalPart.test(localPart) ||
    regStartDot.test(localPart) ||
    regEndDot.test(localPart)
  )
    return false;

  // domainの文字validation
  const regDomain = /^[a-zA-Z0-9\!#\$%&\'\*\+\/\=\?\^\_\`\{\|\}\~.-]{1,252}$/;
  if (
    !regDomain.test(domain) ||
    regStartDot.test(domain) ||
    regEndDot.test(domain)
  )
    return false;

  return true;
}
