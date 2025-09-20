const now = new Date();
const data1 = new Date('may 11 2026 09:00');
const date2 = new Date(2018,4,11,9,0);
//date
now.toDateString();
//date and hour
now.toISOString();
//day
now.getDate();
//day week
now.getDay();
//year
now.getFullYear();
//month
now.getMonth();
//update year
now.setFullYear(2015);