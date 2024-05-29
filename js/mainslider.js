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


function getRandomElements(array, count) {
    const shuffledArray = array.sort(() => Math.random() - 0.5);
    return shuffledArray.slice(0, count);
}

const randomElements = getRandomElements(arrayDeArrays, 10);
populateSlider(randomElements);
mostrarSlide(indexActual);



