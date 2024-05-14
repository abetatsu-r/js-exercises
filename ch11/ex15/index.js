/**
 * 方針
 * - URL APIを使う
 * - pathはurl.pathname, addQueryはsearchParamsを使ってそれぞれ設定する
 */
export function modifyUrl(obj) {
  const url = new URL(obj.base);
  if (obj.path) {
    url.pathname = obj.path;
  }

  const queryParams = obj.addQuery || [];
  for (let [name, value] of queryParams) {
    url.searchParams.append(name, value);
  }
  return url.toString();
}
