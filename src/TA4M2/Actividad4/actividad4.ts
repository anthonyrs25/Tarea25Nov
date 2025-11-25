class Animal { //Creamos la clase principal o base
    sonar() { //Definimos el método sonar
    }
}

class Perro extends Animal { //Creamos la clase que hereda
    sonar() { //Sobreescribe el método de la clase base
        console.log("El perro ladra: ¡Guau!"); //Imprime el mensaje
    }
}

class Gato extends Animal { //Creamos la otra clase que hereda
    sonar() { //También sobreeescribe el método de la clase base
        console.log("El gato maúlla: ¡Miau!"); //Imprime el mensaje
    }
}

let Lista: Animal[] = [ //Creamos el array con los dos objetos
    new Perro(), //Agregamos Perro
    new Gato() //Agregamos Gato
];

Lista.forEach(animal => animal.sonar()); //Polimorfismo aplicado a cada animal

console.log(Lista);