class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    presentarse() {
        return "Hola mi nombre es " + this.nombre + " y tengo " + this.edad + " años.";
    }
}


var persona = new Persona("Christian", 37);
console.log(persona.presentarse());


