const circle = {
    radius : 1 ,
    draw(){
        console.log('draw');
    }
}

if('radius' in circle){
    console.log('yes');
    console.log('draw' in circle)
}
// for (let key in circle){
//     console.log(circle[key])
// }

// for (let key of circle){
//     console.log(key)
// }

// let circlekeys = Object.keys(circle);
// console.log(circlekeys);

// for(let key of circlekeys)
//     console.log(key);

// let circleEntries = Object.entries(circle);
// for(let entry of circleEntries){
//     console.log(entry);
// }