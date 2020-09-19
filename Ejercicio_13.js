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

class Profesor extends Persona {
    constructor(nombre, edad, estudiantes) {
        super(nombre, edad);
        if(estudiantes) {
            estudiantes.forEach(i => i.setProfesor(nombre));
            this.estudiantes = estudiantes;
        } else {
            this.estudiantes = [];
        }
    }

    enseñando() {
       this.estudiantes.forEach(e => console.log(e.nombre));
    }

    addEstudiante(estudiante) {
        estudiante.setProfesor(this.nombre);
        this.estudiantes.push(estudiante);
    }
}

var arrayAlumnos = [
    new Estudiante("Juan", 20),
    new Estudiante("Pedro", 23)
];

var profesor = new Profesor("Jorge", 24, arrayAlumnos);
console.log(profesor.presentarme());
profesor.enseñando();

profesor.addEstudiante(new Estudiante("Laura", 21));

console.log(profesor.enseñando());