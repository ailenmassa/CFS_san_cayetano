/* Diseñar un algoritmo que recorra las butacas de una sala de cine y determine cuántas butacas desocupadas hay 
• Suponga que para modelar este problema, se utiliza un arreglo con valores lógicos
• La presencia de un valor verdadero (true) en el arreglo indica que la butaca está ocupada
• La presencia de un valor falso (false) en el arreglo indica que la butaca está desocupada */

import * as rls from "readline-sync";

let butacas = [false, true, true, false, true, false, false, false, true];
let butacasDesocupadas = 0;

for (let i = 0; i < butacas.length; i++) {
  if (!butacas[i]) {
    butacasDesocupadas = butacasDesocupadas +1;
  }
}

console.log("la cantidad de butacas desocupadas es: " + butacasDesocupadas);


