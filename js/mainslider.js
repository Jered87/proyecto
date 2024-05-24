const sliderContent = document.querySelector('.slider-content');

function populateGinSlider() {
  sliderContent.innerHTML = '';
  productosGin.forEach(product => {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
      <img src="${product.imagen}" alt="${product.titulo}" class="card-img">
      <div class="card-content">
        <h2 class="card-title">${product.titulo}</h2>
        <p class="card-description">${product.descripcion}</p>
        <a href="#" class="card-button">Comprar</a>
        <h3>$${product.precio}</h3>
      </div>
    `;
    sliderContent.appendChild(card);
  });
}

populateGinSlider();


function populateRonSlider() {
  sliderContent.innerHTML = '';
  productosRon.forEach(product => {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
      <img src="${product.imagen}" alt="${product.titulo}" class="card-img">
      <div class="card-content">
        <h2 class="card-title">${product.titulo}</h2>
        <p class="card-description">${product.descripcion}</p>
        <a href="#" class="card-button">Comprar</a>
        <h3>$${product.precio}</h3>
      </div>
    `;
    sliderContent.appendChild(card);
  });
}

populateRonSlider();


function populateTequilaSlider() {
  sliderContent.innerHTML = '';
  productosTequila.forEach(product => {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
      <img src="${product.imagen}" alt="${product.titulo}" class="card-img">
      <div class="card-content">
        <h2 class="card-title">${product.titulo}</h2>
        <p class="card-description">${product.descripcion}</p>
        <a href="#" class="card-button">Comprar</a>
        <h3>$${product.precio}</h3>
      </div>
    `;
    sliderContent.appendChild(card);
  });
}

populateTequilaSlider();


function populateVermouthSlider() {
  sliderContent.innerHTML = '';
  productosVermouth.forEach(product => {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
      <img src="${product.imagen}" alt="${product.titulo}" class="card-img">
      <div class="card-content">
        <h2 class="card-title">${product.titulo}</h2>
        <p class="card-description">${product.descripcion}</p>
        <a href="#" class="card-button">Comprar</a>
        <h3>$${product.precio}</h3>
      </div>
    `;
    sliderContent.appendChild(card);
  });
}

populateVermouthSlider();


function populateVodkaSlider() {
  sliderContent.innerHTML = '';
  productosVodka.forEach(product => {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
      <img src="${product.imagen}" alt="${product.titulo}" class="card-img">
      <div class="card-content">
        <h2 class="card-title">${product.titulo}</h2>
        <p class="card-description">${product.descripcion}</p>
        <a href="#" class="card-button">Comprar</a>
        <h3>$${product.precio}</h3>
      </div>
    `;
    sliderContent.appendChild(card);
  });
}

populateVodkaSlider();


function populateWhiskySlider() {
  sliderContent.innerHTML = '';
  productosWhisky.forEach(product => {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
      <img src="${product.imagen}" alt="${product.titulo}" class="card-img">
      <div class="card-content">
        <h2 class="card-title">${product.titulo}</h2>
        <p class="card-description">${product.descripcion}</p>
        <a href="#" class="card-button">Comprar</a>
        <h3>$${product.precio}</h3>
      </div>
    `;
    sliderContent.appendChild(card);
  });
}

populateWhiskySlider();