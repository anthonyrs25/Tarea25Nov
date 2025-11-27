// Creamos la clase Hospital
class Hospital {

    // Método para calcular dosis
    calcularDosis(peso: number, mgPorKg: number): number { // Recibe peso y mg por kg
        return peso * mgPorKg; // Devuelve dosis total
    }

    // Método para calcular IMC
    calcularIMC(peso: number, altura: number): number { // Recibe peso y altura
        return peso / (altura * altura); // Devuelve IMC
    }

    // Método para registrar visitas
    registrarVisitas(visitasActuales: number, nuevas: number): number { // Recibe visitas actuales y nuevas visitas
        return visitasActuales + nuevas; // Devuelve total de visitas
    }
}

// Probamos la clase
let hosp = new Hospital(); // Creamos un hospital

console.log(hosp.calcularDosis(70, 10)); // 700 mg
console.log(hosp.calcularIMC(70, 1.75)); // 22.8 aprox
console.log(hosp.registrarVisitas(5, 2)); // 7
