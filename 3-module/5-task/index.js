function getMinMax(str) {
  let arr = str.split(' ');
  let retObj = {}

  if (arr.length > 0) {
    let maxEl = arr[0];
    let minEl = arr[0];
    for (arrElIndex in arr) {
      let curEl = arr[arrElIndex];
      if(!isNaN(parseFloat(curEl)) && isFinite(curEl)) {
        curEl = +curEl;
        if (maxEl < curEl) {
          maxEl = curEl;
        }

        if (minEl > curEl) {
          minEl = curEl;
        }
      }
    }
    retObj.min = minEl;
    retObj.max = maxEl;
  }
  
  return retObj;
}
