//Reference types
//Opject
//Array
//Function

let name = "mahan";
let age = 17;
let admin = true;

//Opject
let person = {
    name : "mahan",
    age : 17,
    admin : true
}

console.log(person)

console.log(person.age);

console.log(person["admin"]);

//Array
let users = ["mahan","ali"];
users[2] = "ahmad";
users[1] = "amir";
users[3] = 2;
users[4] = true;

console.log(users);

console.log(users);

console.log(users[1]);

//Function
//اونی که داخل پرانتزه میگن پارامتر
function greet(name,age){
    console.log(' hello '+ name + " your are " + age + " years old");
}
//به اونی که موقع صدا زدن تو پرانتزه میگن ارگومان
let result1 = greet("mahan",17);
console.log(result1);


function square(number){
    let result = number*number ;
    return result;
}
let result = square(4);
console.log(result);