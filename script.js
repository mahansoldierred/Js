Math.PI;
Math.random();
Math.round(1,9);
Math.max(1,2,3,13);
Math.min(1,2,3,13);
Math.abs(-1)

function getRandomArbitrary(min,max){
    return Math.floor(Math.random() * (max - min) +min);
}
console.log(getRandomArbitrary(10,50));
