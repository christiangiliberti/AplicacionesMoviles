class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    presentarme() {
        return "Mi nombre es " + this.nombre + " y tengo " + this.edad + " años";
    }
}

class Estudiante extends Persona {
    constructor(nombre, edad, profesor) {
        super(nombre, edad);
        this.profesor = profesor;
    }

    estudiando() {
        return "Estudiando con " + this.profesor;
    }

    setProfesor(profesor) {
        this.profesor = profesor
    }
}

var alumno = new Estudiante("Juan", 20, "Pedro");
console.log(alumno.presentarme());
console.log(alumno.estudiando());
alumno.setProfesor("Marta")
console.log(alumno.estudiando());