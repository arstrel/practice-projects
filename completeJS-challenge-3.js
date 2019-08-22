// John and his family went on a holiday
// and went to three different restaurants,
// and the bills were 124, 48, and 268 dollars.
// Now to tip the waiter a fair amount,
// John created a simple tip calculator as a function.
// And the way that John calculates his tips,
// is that he likes to tip 20 percent of the bill
// when then bill is less than 50 dollars,
// 15 percent when the bill is between 50 and 200 dollars,
// and 10 percent of the bill if it is more than 200 dollars

// return 2 arrays
// 1 - containing all 3 tips
//2 - containing all 3 final paid ammounts

const billsPaid = [124, 48, 268];

const calcTips = bills => {
  let tips = [];
  let totals = [];
  for(val of bills) {
    let tip, total;
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
    tips.push(tip);
    totals.push(total);
  }



  return [tips, totals]
}