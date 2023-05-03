/* Almacene en un arreglo de dimensión N números (la
cantidad es ingresada por el usuario).
• Muestre cuántos números son positivos, cuántos son
negativos y cuántos ceros hay.
1
Ejemplo:
v = 0, -7, -9, 1, 0, 0
La salida es: 1 positivos, 2 negativos y 3 */

import * as rls from "readline-sync";

let arr: number [] = new Array (6);
let positivos: number = 0;
let negativos: number = 0;
let ceros: number = 0;

function cargarArrNum (arr: number[]) : any {
    for (let i: number = 0; i < arr.length; i ++) {
        arr [i]= rls.questionInt (`ingrese un numero en la posicion ${i+1}: `)
}
}

function clasificarArr (arr: number []) : any {
    for (let i: number = 0; i < arr.length; i ++) {
        arr [i]= rls.questionInt (`ingrese un numero en la posicion ${i+1}: `);
      if (arr[i] == 0){
        ceros = ceros + 1;
      } 
      if (arr[i] > 0){
        positivos= positivos + 1;
      } 
      if (arr[i] < 0) {
        negativos= negativos + 1;
      } 
   }    
    console.log (`total de ceros ${ceros}, total de positivos ${positivos}, total de negativos ${negativos}`);
}

cargarArrNum (arr)
clasificarArr (arr)
