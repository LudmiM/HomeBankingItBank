class Payment {
    constructor(provider, amount, account, userKey) {
        this.provider = provider;
        this.amount = amount;
        this.account = account;
        this.userKey = userKey;
    }

    validate() {  
        if (this.provider === "") {  
            return "Por favor, seleccione un proveedor de servicio.";  
        }  
        if (this.amount <= 0) {  
            return "El monto debe ser mayor a cero.";  
        }  
        if (this.account.trim() === "") {  
            return "Ingrese un número de cuenta.";  
        }  
        if (this.userKey.trim() === "") {  
            return "La clave del usuario es incorrecta.";  
        }  
        return null;  
    }  

    process() {
        return `Pago realizado a ${this.provider} por un importe de ${this.amount}.`;
    }

    static processPayment() {
        const provider = document.getElementById('provider').value;
        const amount = document.getElementById('amount').value;
        const account = document.getElementById('account').value;
        const userKey = document.getElementById('userKey').value;

        const payment = new Payment(provider, amount, account, userKey); 

        const error = payment.validate();  
        if (error) {  
            document.getElementById('message').innerText = error;  
            return;  
        } 

        const resultMessage = payment.process();  
        document.getElementById('message').innerText = resultMessage; 
    }
}

window.Payment = Payment;
