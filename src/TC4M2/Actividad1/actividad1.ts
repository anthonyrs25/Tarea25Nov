//Creamos una clase que se llame Persona
class Persona {
    nombre: string = ""; //Agregamos el atributo "Nombre"
    edad: number = 0; //Agregamos el atributo "Edad"

    constructor(nombre:string, edad:number){ //Creamos el "Constructor"
        this.nombre = nombre; //Este asigna el nombre
        this.edad = edad; //Y este asigna la edad
    }
    presentarse(){ //Ahora creamos la función con el nombre "presentarse"
    console.log("Hola soy " + this.nombre); //Imprime la presentación
    }
}
let Lista : Persona[] = [ //Creamos un array con los 3 objetos, en este caso, 3 nombres
    new Persona('Anthony', 25), //Primer objeto
    new Persona('Fernando', 24), //Segundo objeto
    new Persona('Jhostin', 22), //Tercer objeto
];

console.log(Lista); //Imprime toda la lista al ejecutar el código