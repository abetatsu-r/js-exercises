export let parseStringToJson = function (str) {
  let result = {};
  try {
    let data = JSON.parse(str);
    result.success = true;
    result.data = data;
  } catch (e) {
    result.success = false;
    result.error = { name: e.name, message: e.message };
  }

  return result;
};
