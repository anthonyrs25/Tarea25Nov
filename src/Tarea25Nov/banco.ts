// Creamos la clase Banco
class Banco {

    // Método para depositar dinero
    depositar(saldo: number, monto: number): number { // Recibe saldo actual y monto a depositar
        return saldo + monto; // Retorna el nuevo saldo sumando el monto
    }

    // Método para retirar dinero
    retirar(saldo: number, monto: number): number { // Recibe saldo actual y lo que queremos retirar
        if (monto > saldo) { // Si el monto es mayor al saldo...
            throw new Error("Fondos insuficientes"); // ...lanza un error
        }
        return saldo - monto; // Si hay suficiente dinero, resta y devuelve el nuevo saldo
    }

    // Método para transferir dinero
    transferir(saldoOrigen: number, monto: number): number { // Recibe saldo de la cuenta origen y monto a transferir
        if (monto > saldoOrigen) { // Si la transferencia es mayor al saldo...
            throw new Error("No se puede transferir más del saldo disponible"); // ...error
        }
        return saldoOrigen - monto; // Si no, resta y devuelve el nuevo saldo
    }
}

// Probamos la clase
let banco = new Banco(); // Creamos un banco

// Pruebas
let saldo1 = banco.depositar(100, 50); // Depositamos 50 a un saldo de 100
console.log(saldo1); // Muestra 150

let saldo2 = banco.retirar(saldo1, 30); // Retiramos 30 del saldo 150
console.log(saldo2); // Muestra 120

let saldo3 = banco.transferir(saldo2, 20); // Transferimos 20 del saldo 120
console.log(saldo3); // Muestra 100
