const years = [1990, 1965, 1934, 2005, 1998];
function arrayCalc(arr, cb) {
  let arrRes = [];
  for(val of arr) {
    arrRes.push(cb(val))
  }
  return arrRes
}

function calcAge(el) {
  return 2019 - el;
}

function isFullAge(limit, el) {
  return el >= limit
}

const ages = arrayCalc(years, calcAge);
const fullJapan = arrayCalc(ages, isFullAge.bind(this, 20))
console.log(ages) 
console.log(fullJapan) 