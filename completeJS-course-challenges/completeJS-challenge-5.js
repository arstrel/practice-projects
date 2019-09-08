//20% is less then $50
//15% if between $50 and $200
//


const john = {
  billsPaid: [124, 48, 268, 180, 42],
  tips: [],
  totals: [],
  calcTipz: function() {
    for(val of this.billsPaid) {
      let total, tip;
      if(val < 50) {
        tip = val * 0.2;
      }
      else if (val < 200) {
        tip = val * 0.15;
      }
      else {
        tip = val * 0.1;
      }
      total = val + tip;
      this.tips.push(tip);
      this.totals.push(total);
    }
  },


}


const mark = {
  billsPaid: [77, 375, 110, 45],
  tips: [],
  totals: [],
  calcTipz: function() {
    for(val of this.billsPaid) {
      let total, tip;
      if(val < 100) {
        tip = val * 0.2;
      }
      else if (val < 300) {
        tip = val * 0.1;
      }
      else {
        tip = val * 0.25;
      }
      total = val + tip;
      this.tips.push(tip);
      this.totals.push(total);
    }
  },


}


const tipAverage = (arr) => {

  let sum = arr.reduce((a,b) => {
    return a + b
  })

  let result = sum / arr.length;
  console.log(result);
  return result.toFixed(2)

}

john.calcTipz()
mark.calcTipz()

let j = tipAverage(john.tips)
let m = tipAverage(mark.tips)

console.log(`John's average tips: ${j}, Mark's average tips: ${m}`)