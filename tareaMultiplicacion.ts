
/*Diseñar un algoritmo que muestre por pantalla la tabla de 
multiplicación del número ingresado por el usuario
Para definir hasta qué número desea que muestre la tabla de 
multiplicación, el usuario también deberá ingresar dicho valor */

import * as rls from "readline-sync";

let num1: number = rls.questionInt ("ingrese un numero para multiplicar: ") 
let num2: number = rls.questionInt ("ingrese el numero limite: ")

for (let numb:number = 1; numb <= num2 ; numb ++) {
    let resultado:number = num1 * numb;
    console.log (`${num1} x ${numb} = ${resultado}`)
    }



