function resize1(params) {
  // 0はfalseに変換されるため、params.maxWidthに0が入る場合はdefaultが返る
  let maxWidth = (params && params.maxWidth) || 600;
  let maxHeight = (params && params.maxHeight) || 400;
  console.log({ maxWidth, maxHeight });
}

function resize2(params) {
  let maxWidth = params?.maxWidth ?? 600;
  let maxHeight = params?.maxHeight ?? 400;
  console.log({ maxWidth, maxHeight });
}
