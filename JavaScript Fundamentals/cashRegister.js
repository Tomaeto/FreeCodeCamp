//Function for simulating a checkout at a cash register
//cid stores cash-in-drawer as an array of objects for each denomination of currency w/ its value
//Returns an object with the status of the transaction and the change as an array similar to cid
//If cid is too low or change is not exact, status is 'INSUFFICIENT_FUNDS' and change arr is empty
//If cid is equal to change needed, status is 'CLOSED' and change is identical to cid
//Otherwise cid is higher than change and given change is exact, so status is 'OPEN' and change is the amount of each denom needed
function checkCashRegister(price, cash, cid) {
  //Objects for each cash denomination
  //Stored as array of objects to reduce later to find change
  let denoms = [
    {name: 'ONE HUNDRED', value: 100},
    {name: 'TWENTY', value: 20},
    {name: 'TEN', value: 10},
    {name: 'FIVE', value: 5},
    {name: 'ONE', value: 1},
    {name: 'QUARTER', value: .25},
    {name: 'DIME', value: .10},
    {name: 'NICKEL', value: .05},
    {name: 'PENNY', value: .01},
  ];

  //Result object, initialized to insufficient
  let result = {
    status: 'INSUFFICIENT_FUNDS',
    change: [],
  };

  //Reducing cid to store amount of each denom and total cash in drawer
  let register = cid.reduce(function(acc, curr) {
    acc.total += curr[1];
    acc[curr[0]] = curr[1];
    return acc;
  }, {total: 0});
  register.total = Math.round(register.total * 100) / 100
  let change = cash-price;
  //If needed change is greater than available cash in drawer, return insufficient
  if (change > register.total) return result;

  //If needed change is exact, return closed w/ cid as change
  if (change == register.total) {
    result.status = 'CLOSED';
    result.change = cid;
    return result;
  }

  //Building change array for needed change
  //Reducing denoms array to hold each denom's name and amount for change
  let change_arr = denoms.reduce(function(acc, curr) {
  //Var for holding current change value
  var curVal = 0;
  //While the current denom has more than 0 and change is not met,
  //  remove one of the denom's amount from change & register
  //  and update current value
  while(register[curr.name] > 0 && change >= curr.value) {
    change -= curr.value;
    register[curr.name] -= curr.value;
    curVal += curr.value;
    change = Math.round(change * 100) / 100;
  }
  //If the current denom has added value, add to change array
  if(curVal > 0) {
    acc.push([ curr.name, curVal ]);
  }
  return acc;
  }, []);
//If change array is empty or change was not exact, return insufficient
if (change_arr.length < 1 || change > 0)
  return result;

//Else, change needs were met, so return open w/ change array
result.status = 'OPEN';
result.change = change_arr;
return result;
}
