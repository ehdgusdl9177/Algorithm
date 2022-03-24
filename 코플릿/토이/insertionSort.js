const insertionSort = function (arr, callback) {
  let j;
  if (!callback) {
    callback = (el) => {
      return el;
    };
  }
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    for (j = i - 1; j >= 0 && callback(arr[j]) > callback(key); j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = key;
  }
  return arr;
};
