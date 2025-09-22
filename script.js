const courses = [
    {id : 1 , name:'a'},
    {id : 2 , name:'b'}
];
//فانکشن بی نام
// const result = courses.find((course)=>{
//     return course.name === 'a'
// })

// console.log(result);

const result = courses.find(courses=> courses.name === 'a')

console.log(result);