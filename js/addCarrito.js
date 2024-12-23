document.addEventListener("DOMContentLoaded", () => {
    // Obtener todos los botones de agregar al carrito
    const botonesAgregar = document.querySelectorAll(".btn-agregar");
    console.log(botonesAgregar);
    
    // Iterar sobre cada boton
    botonesAgregar.forEach(boton => {
        // Agregar un event listener a cada boton
        boton.addEventListener("click", (event) => {
            event.preventDefault();

            // Obtener datos del producto
            const nombre = boton.getAttribute("data-nombre");
            const precio = boton.getAttribute("data-precio");
            console.log(nombre);
            console.log(precio);

            // Obtener el carrito actual de localStorage
            const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
            console.log(carrito);
            
            // Agregar el producto al carrito
            carrito.push({ nombre, precio });

            // Guardar el carrito actualizado en localStorage
            localStorage.setItem("carrito", JSON.stringify(carrito));

            alert(`${nombre} agregado al carrito.`);
        });
    });
});