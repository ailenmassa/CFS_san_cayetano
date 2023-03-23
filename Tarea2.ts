//Ejercicio usuario
import * as readlineSync from "readline-sync"

let nombreDeUsuario: string = readlineSync.question ("ingrese su nombre de usuario:")
let contraseña: string = readlineSync.questionNewPassword("ingrese su contraseña:")

let Juan: string = "Juan"
let nuevaContraseña: string = "claveJuan"

if (nombreDeUsuario == Juan && contraseña == nuevaContraseña) {
console.log (" los datos son correctos, puede ingresar")
 } else {
console.log ("los datos son incorrectos, no puede ingresar")
 } 
