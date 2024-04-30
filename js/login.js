const openModal = document.querySelector("#button-user");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".logIn");
const emailInput = document.querySelector("#emailInput");
const passwordInput = document.querySelector("#passwordInput");
//----------------------------------------
const googleI = document.querySelector(".fa-google");
const facebookI = document.querySelector(".fa-facebook-f");
const emailI = document.querySelector(".fa-envelope");
//------------------------------------------------

/// evento click y la funcionalidad de que agregue la clase modal--show y elimiar el scroll
openModal.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.add("modal--show");
  document.body.style.overflow = 'hidden';
});

///evento click a la varaible closeModal y la funcionalidad de que si los campos email y paswword no tienen un string vacio remueva la classe modal--show y que redireccione el home con un retraso de 3 segundos. Y si no se cumple que muestre un Alert
closeModal.addEventListener("click", (e) => {
  e.preventDefault();

  if (emailInput.value !== "" && passwordInput.value !== "") {
    modal.classList.remove("modal--show");

    setTimeout(() => {
      window.location.href = "../index.html";
    }, 3000);
  } else {
    alert("Por favor ingresa tu email y contraseña.");
  }
});

/// Funcionalidad con el evento click, al darle sobre los icons del login te redirecciona a distitntos sitios web simulando un login por distintos proveedores de cuentas
facebookI.addEventListener("click", () => {
  window.location.href = `https://www.facebook.com/`;
});

googleI.addEventListener("click", () => {
  window.location.href = `https://accounts.google.com/`;
});

emailI.addEventListener("click", () => {
  window.location.href = `https://login.live.com`;
});
