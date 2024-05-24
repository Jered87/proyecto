const sliderContent = document.querySelector('.slider-content');

function populateGinSlider() {
  sliderContent.innerHTML = '';
  productosGin.forEach(product => {
    const cardIndex = document.createElement('div');
    cardIndex.classList.add('cardIndex');

    cardIndex.innerHTML = `
      <img src="${product.imagen}" alt="${product.titulo}" class="card-img">
      <div class="card-content">
        <h2 class="card-title">${product.titulo}</h2>
        <p class="card-description">${product.descripcion}</p>
        <a href="#" class="card-button">Comprar</a>
        <h3>$${product.precio}</h3>
      </div>
    `;
    sliderContent.appendChild(cardIndex);
  });
}

populateGinSlider();


function populateRonSlider() {
  sliderContent.innerHTML = '';
  productosRon.forEach(product => {
    const cardIndex = document.createElement('div');
    cardIndex.classList.add('cardIndex');

    cardIndex.innerHTML = `
      <img src="${product.imagen}" alt="${product.titulo}" class="card-img">
      <div class="card-content">
        <h2 class="card-title">${product.titulo}</h2>
        <p class="card-description">${product.descripcion}</p>
        <a href="#" class="card-button">Comprar</a>
        <h3>$${product.precio}</h3>
      </div>
    `;
    sliderContent.append(cardIndex);
  });
}

populateRonSlider();


function populateTequilaSlider() {
  sliderContent.innerHTML = '';
  productosTequila.forEach(product => {
    const cardIndex = document.createElement('div');
    cardIndex.classList.add('cardIndex');

    cardIndex.innerHTML = `
      <img src="${product.imagen}" alt="${product.titulo}" class="card-img">
      <div class="card-content">
        <h2 class="card-title">${product.titulo}</h2>
        <p class="card-description">${product.descripcion}</p>
        <a href="#" class="card-button">Comprar</a>
        <h3>$${product.precio}</h3>
      </div>
    `;
    sliderContent.append(cardIndex);
  });
}

populateTequilaSlider();


function populateVermouthSlider() {
  sliderContent.innerHTML = '';
  productosVermouth.forEach(product => {
    const cardIndex = document.createElement('div');
    cardIndex.classList.add('cardIndex');

    cardIndex.innerHTML = `
      <img src="${product.imagen}" alt="${product.titulo}" class="card-img">
      <div class="card-content">
        <h2 class="card-title">${product.titulo}</h2>
        <p class="card-description">${product.descripcion}</p>
        <a href="#" class="card-button">Comprar</a>
        <h3>$${product.precio}</h3>
      </div>
    `;
    sliderContent.append(cardIndex);
  });
}

populateVermouthSlider();


function populateVodkaSlider() {
  sliderContent.innerHTML = '';
  productosVodka.forEach(product => {
    const cardIndex = document.createElement('div');
    cardIndex.classList.add('cardIndex');

    cardIndex.innerHTML = `
      <img src="${product.imagen}" alt="${product.titulo}" class="card-img">
      <div class="card-content">
        <h2 class="card-title">${product.titulo}</h2>
        <p class="card-description">${product.descripcion}</p>
        <a href="#" class="card-button">Comprar</a>
        <h3>$${product.precio}</h3>
      </div>
    `;
    sliderContent.append(cardIndex);
  });
}

populateVodkaSlider();


function populateWhiskySlider() {
  sliderContent.innerHTML = '';
  productosWhisky.forEach(product => {
    const cardIndex = document.createElement('div');
    cardIndex.classList.add('cardIndex');

    cardIndex.innerHTML = `
      <img src="${product.imagen}" alt="${product.titulo}" class="card-img">
      <div class="card-content">
        <h2 class="card-title">${product.titulo}</h2>
        <p class="card-description">${product.descripcion}</p>
        <a href="#" class="card-button">Comprar</a>
        <h3>$${product.precio}</h3>
      </div>
    `;
    sliderContent.append(cardIndex);
  });
}

populateWhiskySlider();