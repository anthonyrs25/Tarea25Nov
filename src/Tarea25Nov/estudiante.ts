// Creamos la clase Estudiante
class Estudiante {

    // Método para agregar una nueva nota y actualizar el promedio
    agregarNota(promedio: number, nuevaNota: number): number { // Recibe promedio actual y nueva nota
        return (promedio + nuevaNota) / 2; // Devuelve el nuevo promedio
    }

    // Método para verificar si aprueba
    aprobar(nota: number, minima: number): boolean { // Recibe nota final y nota mínima para aprobar
        return nota >= minima; // Devuelve true si aprueba, false si no
    }

    // Método para sumar faltas
    calcularFaltas(faltasActuales: number, nuevas: number): number { // Recibe faltas actuales y nuevas faltas
        return faltasActuales + nuevas; // Devuelve el total
    }
}

// Probamos la clase
let est = new Estudiante(); // Creamos un estudiante

console.log(est.agregarNota(10, 18)); // Muestra el nuevo promedio
console.log(est.aprobar(15, 14));     // Muestra true
console.log(est.calcularFaltas(2, 3)); // Muestra 5