// import { addCantProducts, subtractCantProducts } from "./add-subtract.js";

const cantidad =document.querySelector('#cantidad');
const add = document.querySelector('#add');
const subtract = document.querySelector('#subtract');

//Llamada a las funciones del archivo add-subtract.js para agregar o restar cantidad en cada producto
add.addEventListener('click', () => {
    cantidad.value = Number(cantidad.value) + 1;
  });
  
subtract.addEventListener('click', () => {
  if (cantidad.value <= 0){
    cantidad.value = 0;
  } else {
    cantidad.value = Number(cantidad.value) - 1;
  } 
  })
