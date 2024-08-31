// Mensaje de transferencia exitosa
document.getElementById('transferForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    document.getElementById('confirmationMessage').style.display = 'block';
    setTimeout(() => {
       document.getElementById('confirmationMessage').style.display = 'none';
    }, 3000);
 });

 //Actualizar saldos
 
 