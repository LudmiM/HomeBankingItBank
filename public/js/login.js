
class FormValidator {
    constructor(formSelector) {
        this.form = document.querySelector(formSelector);
        this.init();
    }

    init() {
        this.form.addEventListener('submit', (event) => this.validateForm(event));
    }

    validateForm(event) {
        const dni = document.getElementById('dni').value;
        const usuario = document.getElementById('usuario').value;
        const clave = document.getElementById('clave').value;

        if (dni && usuario && clave) {
            console.log("Iniciando sesión...");
            window.location.href = '/src/index.html';
            event.preventDefault(); 
        } else {
            alert("Por favor, completa todos los campos.");
            event.preventDefault(); 
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    new FormValidator('.form');
});