import * as rls from "readline-sync";
let num1: number = 0;
let num2: number = 0;

num1 = rls.questionInt ("ingrese el primer numero entero:");
num2 = rls.questionInt ("ingrese el segundo numero entero:");

console.log("el resultado de la suma es:", num1 + num2)