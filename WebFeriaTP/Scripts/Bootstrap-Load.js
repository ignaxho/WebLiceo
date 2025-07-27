// Verifica que Bootstrap se haya cargado correctamente
document.addEventListener('DOMContentLoaded', function() {
    if (typeof bootstrap === 'undefined') {
        console.error('Bootstrap no se ha cargado correctamente');
        // Puedes cargar una versión local de respaldo aquí
    } else {
        console.log('Bootstrap cargado correctamente');
    }
});