//primitive
// const numbers = [1,2,3,1,5,1,4];
// console.log(numbers.indexOf(1,1));
// if(numbers.includes(1)){
//     console.log("yes");
// }
//reference
// const numbers = [
//     {id : 1 , name : 'a'},
//     {id : 2 , name : 'b'}
// ];
// console.log(numbers.includes({id : 1 , name:'a'}));

// const courses = [
//     {id : 1 , name:'a'},
//     {id : 2 , name :'b'}
// ];

// const result = numbers.find(function(course){
//     return course.name === "a"
// })

// console.log(result);

const courses = [
    {id : 1 , name:'a'},
    {id : 2 , name:'b'}
];

const result = courses.findIndex(function(course){
    return course.name === 'b'
})

console.log(result);