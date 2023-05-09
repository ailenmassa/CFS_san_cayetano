/* Desarrolle un algoritmo que permita cargar alumnos y sus notas en los tres trimestres
• Se debe permitir obtener el promedio anual (es decir, de sus tres notas) de un alumno 
(ingresado por el usuario)
• Luego de resolverlo, pensar en aprovechar métodos y discutir cómo representar la información */

import * as rls from "readline-sync";

// let arrAlumnoNotas: number []= new Array (3)

// function cargarArrNotas (arr:number[]): void {
//   for (let i = 0; i < arr.length; i++) {
//   arrAlumnoNotas [i]= rls.questionInt ("ingrese las notas: ")
//   }
// }

// cargarArrNotas (arrAlumnoNotas)

let nombreAlumno: string = rls.question ("ingrese el nombre del alumno: ");
let nota1: number = rls.questionInt ("ingrese la nota del primer trimestre: ");
let nota2: number = rls.questionInt ("ingrese la nota del segundo trimestre: ");
let nota3: number = rls.questionInt ("ingrese la nota del tercer trimestre: "); 

function promedio (nota1:number, nota2:number, nota3:number) {
    let total: number = nota1 + nota2 + nota3;
    let prom:number = (total / 3);
     return console.log (`el promedio total de ${nombreAlumno} es de ${prom}`)
}

console.log (promedio(nota1, nota2, nota3))

