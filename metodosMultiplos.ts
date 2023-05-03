import * as rls from "readline-sync";

let numb1: number = rls.questionInt ("ingrese el primer numero: ");
let numb2: number = rls.questionInt ("ingrese el segundo numero: ");

function esMultiplo (numb1:number, numb2:number) : number  {
     return (numb1 % numb2)
}

let esMultiplo2 = esMultiplo (numb1, numb2)

if (esMultiplo2 == 0) {
     console.log ("true")
} else {
     console.log ("false")
}

    



    
