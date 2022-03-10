function transformFirstAndLast(arr) {
  let obj = {};
  let key = arr[0];
  let value = arr[arr.length - 1];
  if (arr.length > 0) {
    obj[key] = value;
  }
  return obj;
}
