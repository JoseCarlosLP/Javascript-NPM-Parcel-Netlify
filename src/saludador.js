const nombre = document.querySelector("#nombre");
const genero=document.querySelector("#genero");
const edad=document.querySelector("#edad");
const form = document.querySelector("#saludador-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let gen;
  if(genero.value=="hombre")
    if(edad.value>30)
      gen="Sr. ";
    else 
      gen="Joven ";
  else
    if(edad.value>30)
      gen="Sra. ";
    else
      gen="Srta. ";
  div.innerHTML = "<p> hola " + gen + nombre.value + "</p>";
});
