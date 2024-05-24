const sectionTarjetas = document.querySelector('.tarjetas');

// Función para manejar el evento de clic en los botones "Comprar"
function botonesClick(event) {
    const productoId = event.target.id;
    // Aquí puedes agregar la lógica para manejar la compra del producto
    console.log(`Producto con ID ${productoId} agregado al carrito`);
}

// Función para cargar los productos
function cargarProductos(arrayproductos){
    sectionTarjetas.innerHTML= " " ;// vacia el contenedor
    arrayproductos.forEach(producto => {
        const div = document.createElement('div'); //por cada elemento del array crea un div
        div.classList.add('card')//le agrega la clase card
        //carga el contenedor con los datos provenientes del array
        div.innerHTML = ` 
        <img src="../${producto.imagen}" alt="Imagen de ejemplo" class="card-img">
        <div class="card-content">
            <h2 class="card-title">${producto.titulo}</h2>
            <p class="card-description">${producto.descripcion}</p>
            <button class="card-button" id="${producto.id}">Comprar</button>
            <h3 class="precioProductos">$${producto.precio}</h3>
        </div>
        `
        sectionTarjetas.append(div)//agrega el elemento al html
    });

    // Añadir eventos de clic a los botones "Comprar"
    const botonesComprar = document.querySelectorAll('.card-button');
    botonesComprar.forEach(boton => {
        boton.addEventListener('click', botonesClick);
    });
}

