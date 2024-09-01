document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const tipoDocumento = document.getElementById('dni').value;
    const numeroDocumento = document.getElementById('num-dni').value;
    const nuevoUsuario = document.getElementById('nom-us').value;
    const email = document.getElementById('mail').value;
    const confirmEmail = document.getElementById('confirm-m').value;
    const password = document.getElementById('pass').value;
    const confirmPassword = document.getElementById('confirm-pass').value;

    if (email !== confirmEmail) {
        alert('Los correos electrónicos no coinciden.');
        return;
    }
    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden.');
        return;
    }

    const usuario = {
        tipoDocumento,
        numeroDocumento,
        nuevoUsuario,
        email,
        password
    };

    console.log('Usuario creado:', usuario);
    alert('El usuario ha sido registrado');
});
