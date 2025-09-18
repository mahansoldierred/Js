function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }

}

const another = new Circle(3);

// const circle1 = new Function('radius' ,`
//         this.radius = radius;
//     this.draw = function(){
//         console.log('draw');
//     }
//     `);

//     const circle = new circle1(5);
//     console.log(circle);
//برابر با new Circle(3)
Circle.call({}, 9);
Circle.apply({}, [9]);