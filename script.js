const numbers = [3,4];
console.log(numbers)
//انتها اضافه میکنه
// numbers.push(5,6);
//ابتدا اضافه میکنه
// numbers.unshift(7,8);
//مقدار اول دادن انذیس دوم اندیسی که حذف شود سوم المنت که اضافه شود در اندیس مشخص شده
numbers.splice(2,0,"a")

console.log(numbers);
