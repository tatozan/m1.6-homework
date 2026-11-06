const boton = document.getElementById('changeColorBtn');
const caja = document.getElementById('box');

boton.addEventListener('click', function() {
    // Si la caja tiene la clase 'cambiado' se la saca; si no la tiene, se la pone
    caja.classList.toggle('cambiado');
});