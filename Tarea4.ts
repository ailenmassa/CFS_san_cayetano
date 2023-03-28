/* Ejercicio Par-Impar
•Desarrollar un algoritmo que dado un número, ingresado por el usuario determine si el número es par o impar y le informe al usuario
•En el caso de ser 0 (cero) el algoritmo deberá informarlo */

import * as rls from "readline-sync";

let number: number = rls.questionInt ("ingrese un numero");

if (number = 0) {
    console.log ("este numero es cero");
} else if  ( number % 2 == 0) {
    console.log ("este numero es par");
} else {
    console.log ("este numero es impar");
}