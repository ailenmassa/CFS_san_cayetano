import * as rls from "readline-sync";

let base: number = rls.questionInt ("ingrese la base: ");
let exponente: number = rls.questionInt ("ingrese el exponente: ");

Math.pow (base, exponente); 
    
if (exponente >= 0) {
let resultadoPotencia:number = Math.pow (base, exponente); 
console.log (`el resultado es: ${resultadoPotencia}`);
}
else {
    console.log("error, ingrese un exponente que sea igual o mayor a cero")
}