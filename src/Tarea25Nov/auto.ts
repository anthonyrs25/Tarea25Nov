// Creamos la clase Auto
class Auto {

    // Método para acelerar
    acelerar(velocidadActual: number, incremento: number): number { // Recibe velocidad actual y cuanto aumenta
        return velocidadActual + incremento; // Devuelve la nueva velocidad
    }

    // Método para frenar
    frenar(velocidadActual: number, decremento: number): number { // Recibe velocidad actual y cuanto frena
        let nuevaVel = velocidadActual - decremento; // Calcula la nueva velocidad
        if (nuevaVel < 0) { // Si es menor que cero...
            return 0; // ...retorna 0
        }
        return nuevaVel; // Si no, devuelve la velocidad correcta
    }

    // Método para calcular velocidad media
    recorrer(distancia: number, tiempo: number): number { // Recibe distancia y tiempo
        return distancia / tiempo; // Calcula km/h
    }
}

// Probamos la clase
let auto = new Auto(); // Creamos un auto

console.log(auto.acelerar(50, 20)); // 70
console.log(auto.frenar(40, 10));   // 30
console.log(auto.recorrer(100, 2)); // 50 km/h
