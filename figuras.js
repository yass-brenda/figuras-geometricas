// Código del cuadrado

// Se usa para agrupar mensajes en consola.
console.group("Cuadrados");

const ladoCuadrado = 5;
console.log(ladoCuadrado)

const perimetroCuadrado = 4 * ladoCuadrado;
console.log("El perímetro es: " + perimetroCuadrado + "cm")

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area es: " + areaCuadrado + "cm²")

console.groupEnd();

// Código del triángulo
console.group("Triángulo");

const altura = 6;
console.log(altura)

const ladoTriangulo = 6;
console.log(ladoTriangulo)

const baseTriangulo = 5;
console.log(baseTriangulo)

const perimetroTriangulo = ladoTriangulo + altura + baseTriangulo;
console.log("El perímetro es " + perimetroTriangulo)

const areaTriangulo = (baseTriangulo * altura) / 2;
console.log("El área del triángulo es: " + areaTriangulo)

console.log("La base es: "
    + baseTriangulo + "cm, "
    + " Y sus lados son de "
    + ladoTriangulo + "cm"
    + " y "
    + altura + "cm")

console.groupEnd();

// Código del circulo
console.group("Círculos");

const radio = 4;
const diametro = radio * 2;
const PI = Math.PI;
console.log(diametro)

// Circunferencia
const perimetroCirculo = diametro * PI
const areaCirculo = (radio * radio) * PI

console.log(perimetroCirculo)
console.log(areaCirculo)
console.groupEnd();