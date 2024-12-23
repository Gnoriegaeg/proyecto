const carrito = JSON.parse(localStorage.getItem('carrito'));
const tablaCarrito = document.querySelector('#tablaCarrito');
const totalCarrito = document.querySelector('#totalCarrito');

document.addEventListener("DOMContentLoaded", () => {
    mostrarCarrito();    
});

function mostrarCarrito(){
    tablaCarrito.innerHTML = "";
    let total = 0;
    if(carrito.length){
        carrito.forEach((producto, index) => {
            const fila = document.createElement("tr");
            fila.innerHTML = `
                <td>${producto.nombre}</td>
                <td>${producto.precio}</td>
                <td><button data-index="${index}" class="btnEliminar">Eliminar</button></td>
            `;
            tablaCarrito.appendChild(fila);

            total = parseInt(total) + parseInt(producto.precio);
        });

        totalCarrito.innerHTML = total;

        document.querySelectorAll(".btnEliminar").forEach((boton) => {
            boton.addEventListener("click", (event) => {
                const index = event.target.getAttribute("data-index");
                carrito.splice(index, 1);
                localStorage.setItem("carrito", JSON.stringify(carrito));
                mostrarCarrito();
            });
        });
    } else {
        tablaCarrito.innerHTML = "<tr><td colspan='2'>El carrito esta vacio</td><tr>";
        totalCarrito.innerHTML = "0.00";
    }
}