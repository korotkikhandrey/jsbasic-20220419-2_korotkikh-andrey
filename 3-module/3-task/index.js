function camelize(str) {

  let resultCamelStr = "";
  let arr = str.split('-');
  let resultArray = [];
  if (isStringEmpty(str)) {
    return str;
  }
  let needToLowerCase = true;
  for (let i in arr) {
    let curEl = arr[i];
    if (i == 0 && isStringEmpty(curEl)) {
      needToLowerCase = false;
    }
    
    if (!isStringEmpty(curEl)) {
      resultArray.push(curEl[0].toUpperCase() + curEl.slice(1));
    }
  }
  resultCamelStr = resultArray.join("");
  resultCamelStr = (needToLowerCase ? resultCamelStr[0].toLowerCase() : resultCamelStr[0].toUpperCase()) + resultCamelStr.slice(1);
  return resultCamelStr;
}

function isStringEmpty(str) {
  return str.length === 0 || str == null || str == undefined
}