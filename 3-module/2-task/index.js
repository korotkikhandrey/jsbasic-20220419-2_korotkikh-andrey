function filterRange(arr, a, b) {

  let resultArr = [];
  for (let i in arr) {
    let curEl = arr[i];
    if (curEl >= a && curEl <= b) {
      resultArr.push(curEl);
    }
  }

  return resultArr;
}
