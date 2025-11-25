class Persona { //Creamos la clase principal "Persona"
    nombre: string = ""; //Agregamos el atributo "nombre"
    edad: number = 0; //Agregamos el atributo "edad"

    constructor(nombre:string, edad:number){ // Creamos el "constructor"
        this.nombre = nombre; //Este asigna el nombre
        this.edad = edad; //Y este asigna la edad
    }

    presentarse(){ //Creamos el método o función "presentarse"
        console.log("Hola, soy " + this.nombre); //Imprime la presentación con el nombre
    }
}

class Estudiante extends Persona { //Creamos la nueva clase que va a Heredar de la clase Persona
    curso: string = ""; //Le agregamos el atributo "curso"

    constructor(nombre:string, edad:number, curso:string){ //Creamos el constructor para "Estudiante"
        super(nombre, edad); //Este llama al constuctor de Persona
        this.curso = curso; //Y este asigna el curso de Estudiante
    }

    mostrarCurso(){ //Creamos el método para mostrar el curso
        console.log("Estoy en el curso: " + this.curso); // Imprime el mensaje con el curso
    }
}

let Lista: Estudiante[] = [ //Creamos un nuevo Array llamado Estudiantes
    new Estudiante("Mateo", 15, "Electrónica"), //Objeto 1
    new Estudiante("Juan", 18, "Desarrollo de software") //Objeto 2
];

Lista.forEach(est => { //Con este comando llamamos a los dos métodos o funciones
    est.presentarse(); //Método de Persona
    est.mostrarCurso(); //Método de Estudiante
});

//Al final, que nos muestre el Array con los objetos
console.log(Lista)