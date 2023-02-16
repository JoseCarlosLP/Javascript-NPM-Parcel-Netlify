

const nombre = document.querySelector("#nombre");
const genero=document.querySelector("#genero")
const form = document.querySelector("#saludador-form");
const div = document.querySelector("#resultado-div");



form.addEventListener("submit", (event) => {
  event.preventDefault();
  let gen;
  if(genero.value=="hombre")
    gen="Sr. ";
  else
    gen="Sra. ";
  div.innerHTML = "<p> hola " + gen + nombre.value + "</p>";
});
