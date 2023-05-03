/*Almacene en un arreglo de dimensión N números (la
    cantidad es ingresada por el usuario).
    • Muestre cuántos números son positivos, cuántos son
    negativos y cuántos ceros hay.
    1
    Ejemplo:
    v = 0, -7, -9, 1, 0, 0
    La salida es: 1 positivos, 2 negativos y 3 */

    import * as rls from "readline-sync";

    let Arr1: number [] = new Array (7); 
    let positivos: number = 0;
    let negativos: number = 0;
    let ceros: number = 0;

  
    for (let i: number = 0; i < Arr1.length; i ++) {
        Arr1 [i]= rls.questionInt (`ingrese un numero en la posicion ${i+1}: `);
      if (Arr1[i] == 0){
        ceros = ceros + 1;
      } 
      if (Arr1[i] > 0){
        positivos= positivos + 1;
      } 
      if (Arr1[i] < 0) {
        negativos= negativos + 1;
      } 
  }  
    console.log (`total de ceros ${ceros}, total de positivos ${positivos}, total de negativos ${negativos}`);

    