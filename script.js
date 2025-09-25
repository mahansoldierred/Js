const numbers = [1,2,3,4];
//اخرین عنصر رو خارج می کنه
// const last = numbers.pop();
//خارج کردن عنصر از ابتدا
// const first = numbers.shift();
//حذف عنصر از میانه
const result = numbers.splice(2,1)
console.log(numbers);
console.log(result);
