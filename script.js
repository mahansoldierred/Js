// camel notation : oneTwoThree/Factory function
// pascal notation : OneTwoThree/constructor function
//Factory function
function createCircle(radius){
    return {
        radius,
    draw(){ console.log('draw')}
}
    }
const mycircle = createCircle(1);
//constructor function

function Circle(radius){
    this.radius = radius;
    this.drow = function(){
        console.log(drow);
        
    }
}

const circle = new Circle(3);
console.log(circle);
