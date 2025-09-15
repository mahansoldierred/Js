// lagical AND
//&&
// console.log(true && false && true); 
let ProductCount = 3;
let ProductPrice = 1000;

let credit = 1200;
let buy = ProductCount > 0 && credit>ProductPrice ;
console.log(buy);
// logical OR
// ||
let ProductCount1 = -1;
let ProductPrice1 = 1000;

let credit1 = 1200;
let buy1 = ProductCount1 > 0 || credit1>ProductPrice1 ;
console.log(buy1);
//not
//!
let ProductCount2 = 3;
let ProductPrice2 = 1000;

let credit2 = 1200;
let buy2 = ProductCount2 > 0 || credit2>ProductPrice2 ;
console.log(!buy2);