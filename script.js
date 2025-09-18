//Factory Function
function createCircle(radius){
    return {
        radius ,
        draw(){ console.log('draw')}
    }
}

const circle = createCircle(1);

//Constructor Function
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }

} 

const another = new Circle(3);

let x = {};
//let x = new Object();
new String("mahan");
let name = "mahan";
new Boolean()
let y = true;
new Number();
