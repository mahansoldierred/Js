//for
//while
//do while
//for .. in
//for .. of


//for
for(let i=0;i<5;i++){
    console.log("mahan")
}

for(let i=0;i<50;i++){
    if(i % 2 == 0){
        console.log(i);
    }
}

for(let i=0;i<50;i++){
    if(i % 2 == 1){
        console.log(i);
    }
}

for(let i=5;i>=1;i--){
    if(i % 2 == 1){
        console.log(i);
    }
}

//while
let i= 0;
while(i<=5){
    console.log(i);
    i++;
}

//do while
let x = 0;
do{
    console.log(x);
    x++
}while(i<5);

//for .. in
const person = {name:"mahan",age:27};

for(let key in person){
    console.log(key);
    console.log(person[key]);
}

//for .. of
const colors = ['red',"green","blue"]

for(let color of colors){
    console.log(color);    
}