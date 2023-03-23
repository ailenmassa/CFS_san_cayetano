//Ejercicio altura
import * as readlineSync from "readline-sync"

let alturaPersona: number = readlineSync.question("por favor ingrese su altura: ");
let alturaNecesariaIngreso: number = 1.30;

console.log("la altura de la persona es:", alturaPersona)

if (alturaPersona >= alturaNecesariaIngreso) {
    console.log (alturaNecesariaIngreso)
    console.log("la persona puede subir")
} else { 
        console.log("la persona no puede subir") 
}