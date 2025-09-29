// const numbers = [1,-1,2,3];

// const filtered =  numbers.filter(v=> v >= 0)

// console.log(filtered);

const users = [
    {name : 'ali' , age : 18},
    {name : 'ali' , age : 27},
    {name : 'ali' , age : 16},
    {name : 'ali' , age : 14},
    {name : 'ali' , age : 20},
]

const result = users.filter(user=> user.age>=18);

console.log(result);
