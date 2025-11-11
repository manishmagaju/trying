import square, { cube as cubeFunction, areaOfCircle as circleFunction } from "./functions.js"

const number = 2;

const squareValue = square(number);
const cubeValue = cubeFunction(number);
const circleValue = circleFunction(number);

console.log("squarenumber", squareValue);
console.log("cubenumber", cubeValue);
console.log("circlenumber", circleValue);