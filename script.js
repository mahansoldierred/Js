const Circle = {
    radius : 1
}


Circle.color = "red";
Circle.draw = function(){

}

delete Circle.radius;
delete Circle.draw;

console.log(Circle);
