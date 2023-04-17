/* Calcular las calificaciones de un grupo de alumnos, donde la nota
final de cada alumno se calcula según el siguiente criterio:
• la parte práctica vale el 10%
• la parte de problemas vale el 50%
• la parte teórica el 40%

Se debe ingresar el nombre del alumno y sus tres notas, se
escribirá el resultado y se volverá a pedir los datos del siguiente
alumno hasta que el nombre sea una cadena vacía 

Las notas deben estar entre 0 y 10 (si no lo están, no imprimirá las
notas, mostrará un mensaje de error y continuará con otro alumno) */

import * as rls from "readline-sync";

let nombreAlumno: string = rls.question ("ingrese el nombre del alumno: ");


while (nombreAlumno != "") {
  let partePractica: number = rls.questionInt ("ingrese la nota: ");
  
if (partePractica <= -1 || partePractica >= 11) {
  console.log ("error")
}     

let parteProblemas: number = rls. questionInt ("ingrese la nota: ");

if (parteProblemas <= -1 || parteProblemas >= 11) {
console.log ("error")
}

let parteTeorica: number = rls. questionInt ("ingrese la nota: ");

if (parteTeorica <= -1 || parteTeorica >= 11) {
console.log ("error")
}

let notaFinal: number = partePractica * 0.1 + parteProblemas * 0.5 + parteTeorica * 0.4;

  console.log (`la nota final es: ${notaFinal}`)

  nombreAlumno= rls.question ("ingrese el nombre del siguiente alumno: ")
}
