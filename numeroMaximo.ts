/* Leer valores hasta que se introduzca un cero (0)
• El usuario puede introducir valores positivos y negativos
• Encontrar el máximo de los elementos que se introdujeron
• Analizar cómo cambia el programa para hallar el mínimo */

import * as rls from "readline-sync"; 

let numb: number = rls.questionInt ("ingrese un numero: ");
let zero: number = 0;

while (numb != 0) {  
       numb = rls.questionInt ("ingrese otro numero: ");

if (zero <= numb ) {
       zero = numb
}
}
console.log (`el numero mayor es ${zero}`);