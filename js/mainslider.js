const sliderContent = document.querySelector('.slider-content');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let indexActual = 0;

function populateSlider(arraySlide) {
  sliderContent.innerHTML = '';
  arraySlide.forEach(product => {
    const cardIndex = document.createElement('div');
    cardIndex.classList.add('cardIndex');

    cardIndex.innerHTML = `
      <img src="${product.imagen}" alt="${product.titulo}" class="card-img">
      <div class="card-content">
        <h2 class="card-title">${product.titulo}</h2>
        <p class="card-description">${product.descripcion}</p>
        <button class="card-button">Comprar</button>
        <h3 class= "precioProductos">$${product.precio}</h3>
      </div>
    `;
    sliderContent.append(cardIndex);
    /*sliderContent.addEventListener('click', botonesClick)*/
  });
}

function mostrarSlide(index) {
  const slides = document.querySelectorAll('.cardIndex');
  if(index >= slides.length) {
    indexActual = 0; // vuelve al comienzo
  }
  // si es menor q cero es q retrocedimos y queremos ir al ultimo slide
  if (index < 0){
    indexActual = slides.length -1; 
  }
  //desplaza a la izq un multiplo del 100% del contenedor por cada indice
  sliderContent.style.transform = `translateX(-${indexActual * 100}%)`;
} 


prevBtn.addEventListener('click', () => {
  indexActual--;
  mostrarSlide(indexActual);
});

nextBtn.addEventListener('click', () => {
  indexActual++;
  mostrarSlide(indexActual);
});

// const productos = [
//   { id: 1, titulo: 'Producto 1', descripcion: 'Descripción 1', precio: 100, imagen: './img/absolut.png' },
//   { id: 2, titulo: 'Producto 2', descripcion: 'Descripción 2', precio: 200, imagen: './img/chivaslitro.png' },
//   { id: 3, titulo: 'Producto 3', descripcion: 'Descripción 3', precio: 300, imagen: './img/diplomatico.png' },
//   { id: 4, titulo: 'Producto 4', descripcion: 'Descripción 4', precio: 400, imagen: './img/orodeoaxaca.png' },
//   { id: 5, titulo: 'Producto 5', descripcion: 'Descripción 5', precio: 500, imagen: './img/principe.png' }
// ];
populateSlider(productosGin);
mostrarSlide(indexActual);



