// Shape Shifter: Write a program that can describe either a circle or a rectangle using
//  a special type alias, including properties unique to each shape.

// Explain & TIP: A type alias lets you create a custom type. It's like a shortcut for 
// describing more complex information, such as the details of different shapes.

type shape ={
    kind: "circle"| "rectangle",
    redius?: number,
    width?: number,
    hieght?:number
};

let circle: shape = {
kind: "circle",
redius: 5
} ;

let rectangle: shape ={
    kind: "rectangle",
    width: 10,
    hieght: 20
};
console.log( circle);
console.log ( rectangle);