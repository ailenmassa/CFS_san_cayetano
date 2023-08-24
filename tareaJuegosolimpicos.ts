class Deportista {
    protected nombre:string;
    private edad:number;
    private altura:number;

    public constructor (){

    }

    public participarEnCompetecia() {

    }

    public ganarCompetencia () {

    }
}

class Basquet extends Deportista {
    private peso:number;
    
    public constructor(){
        super();
    }

    private robarPelota (){}
}


class Footbal extends Deportista {
    private sexo:string;

    public constructor(){
        super();
    }

    private patearAlArco (){}
}

class Voleyball extends Deportista {
    private capacidadDeSalto:number;

    public constructor(){
        super();
    }

    private realizarUnSaque (){}
}