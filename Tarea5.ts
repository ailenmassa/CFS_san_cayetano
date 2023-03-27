/*Ejercicio – Descuento Octubre

•Una tienda al cumplir años en Octubre ofrece un descuento del 15% a sus clientes en todas sus compras
•Desarrolle un algoritmo que dada una compra:precio unitario, cantidad y el mes, indicados por el usuario, determine si el cliente tiene
descuento o no */

import * as rls from "readline-sync";

let cantidadUnidades: number = rls.questionInt ("ingrese las unidades adquiridas")
const precioUnidad:number = 200
let mesDeCompra: string = rls.question ("ingrese en que mes realizo su compra")
const mesConDescuento1: string = ("octubre")
const mesConDescuento2: string = ("noviembre")
const mesConDescuento3: string = ("diciembre")


if (mesDeCompra === mesConDescuento1) {
console.log("recibe 15% de descuento");
} else if (mesDeCompra === mesConDescuento2) {
console.log ("recibe 15% de descuento")
} else if (mesDeCompra === mesConDescuento3) {
console.log ("recibe 15% de descuento") 
} else { 
    console.log("no recibe descuento")
}



