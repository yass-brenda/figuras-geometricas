// Código del cuadrado

// Se usa para agrupar mensajes en consola.
console.group("Cuadrados");

function square_perimeter(side) {
    return side * 4;
}

function square_area(side) {
    return side * side;
}

console.log(square_perimeter(56))
console.log(square_area(56))
console.groupEnd();


// Código del triángulo
console.group("Triángulo");

function triangle_area(base,height){
    return (base * height)/2;
}

function triangle_perimeter(base,side1,side2){
    return base + side1 + side2;
}

console.log(triangle_perimeter(5,5,5))
console.log(triangle_area(5,5))
console.groupEnd();

// Código del circulo
console.group("Círculos");
const PI = Math.PI

function circle_diameter(radio){
    return radio * 2;
}

function circle_perimeter(radio){
    const diameter = circle_diameter(radio)
    return diameter * PI ;
}

function circle_area(radio){
    return PI * (radio ** 2)
}

console.log(circle_area(5))
console.log(circle_perimeter(5))
console.groupEnd();