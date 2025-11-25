class cuentaBancaria { //Creamos la clase principal
    private saldo: number = 0; //Declaramos el atributo privado

    constructor(saldoInicial: number) { //Creamos el constructor
        this.saldo = saldoInicial; //El constructor guarda el saldo inicial
    }
    mostrarSaldoInicial() { //Opté por agregar la función para que muestre el saldo inicial
        console.log("Saldo inicial: " + this.saldo); //Imprime el saldo incial
    }
    depositar(cantidad: number) { //Método para depositar
        console.log("Depositando: " + cantidad); //Imprime la cantidad que se está depositando
        this.saldo += cantidad;
    }
    mostrarSaldo() { //método para mostrar el saldo después de hacer el depósito
        console.log("Saldo actual: " + this.saldo); //Imprime el saldo final
    }
}

let Lista: cuentaBancaria[] = [ //Creamos el array con las cuentas y sus saldos
    new cuentaBancaria(100), 
    new cuentaBancaria(50),
    new cuentaBancaria(200)
];

console.log("SALDOS INICIALES"); //Imprime el saldo inicial de las cuentas
Lista.forEach(cuenta => cuenta.mostrarSaldoInicial()); //Llamar al método que muestra el saldo inicial

console.log("DEPÓSITOS"); //Imprime la cantidad que se deposita
Lista[0]!.depositar(50); //Depósito cuenta1 = 50
Lista[1]!.depositar(20); //Depósito cuenta2 = 20

console.log("SALDOS ACTUALES"); //Imprime el saldo después del depósito
Lista.forEach(cuenta => cuenta.mostrarSaldo()); //Método para mostrar el saldo final

console.log(Lista);
