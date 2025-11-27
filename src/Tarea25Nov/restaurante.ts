// Creamos la clase Restaurante
class Restaurante {

    // Método para calcular el total de un producto
    calcularTotal(precio: number, cantidad: number): number { // Recibe precio y cantidad
        return precio * cantidad; // Devuelve precio total
    }

    // Método para aplicar un descuento
    aplicarDescuento(total: number, descuento: number): number { // Recibe total y porcentaje
        return total - (total * descuento / 100); // Devuelve total con descuento
    }

    // Método para calcular propina
    calcularPropina(total: number, porcentaje: number): number { // Recibe total y porcentaje de propina
        return total * (porcentaje / 100); // Devuelve el valor de la propina
    }
}

// Probamos la clase
let rest = new Restaurante(); // Creamos un restaurante

console.log(rest.calcularTotal(10, 3)); // 30
console.log(rest.aplicarDescuento(100, 10)); // 90
console.log(rest.calcularPropina(90, 15)); // 13.5
