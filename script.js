const first = [{id:1}];
const second = [4,5,6];

const combined = first.concat(second);
first[0].id = 10;
console.log(combined);
console.log(first);

// const slice = combined.slice(2,4);
// console.log(slice);




