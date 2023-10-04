import { addCantProducts, subtractCantProducts } from "./add-subtract.js";

const divContadorHeader =document.querySelector('.count-products')
const contadorHeader = document.querySelector('#contador-productos');
const divCadaProducto = document.querySelector('#cart_div_cada_producto');
const precioUnitario = document.querySelector('#cart_precio_unitario');
const cantProductos = document.querySelector('#cart_cantidad');
const add = document.querySelector('#cart_add');
const subtract = document.querySelector('#cart_subtract');
const precio_produc = document.querySelector('#cart_precio_total_producto'); //total de cada producto
const borrar = document.querySelector('#cart_eliminar');
const cantProductosResumen = document.querySelector('#cart_cant_elementos');
const subtotalResumen = document.querySelector('#cart_subtotal');
const envio = document.querySelector('#cart_envio');
const totalResumen = document.querySelector('#cart_precio_total');

//Función que al cargar la página, muestre la cantidad de cada producto y los datos en resumen
window.addEventListener('load', () => {
  contadorHeader.textContent = cantProductos.value;
  precio_produc.textContent=Number(precioUnitario.textContent) * Number(cantProductos.value);
  cantProductosResumen.textContent = Number(cantProductos.value);
  subtotalResumen.textContent = Number(precio_produc.textContent);
  totalResumen.textContent = Number(precio_produc.textContent) + Number(envio.textContent);
});


//Llamada a las funciones del archivo add-subtract.js para agregar o restar cantidad en cada producto
add.addEventListener('click', () => {
  addCantProducts(cantProductos);
});

subtract.addEventListener('click', () => {
  subtractCantProducts(cantProductos);
})

//Función para que cambien los datos al agregar o restar cantidad de producto
add.addEventListener('click', () => {
  contadorHeader.textContent = cantProductos.value;
  precio_produc.textContent = Number(precioUnitario.textContent) * Number(cantProductos.value);
  cantProductosResumen.textContent = Number(cantProductos.value);
  subtotalResumen.textContent = Number(precio_produc.textContent);
  totalResumen.textContent = Number(precio_produc.textContent) + Number(envio.textContent);
});

subtract.addEventListener('click', () => {
  contadorHeader.textContent = cantProductos.value;
  if (cantProductos.value <= 0){
    cantProductos.value = 0;
    precio_produc.textContent = Number(precioUnitario.textContent) * Number(cantProductos.value);
    cantProductosResumen.textContent = Number(cantProductos.value);
    subtotalResumen.textContent = Number(precio_produc.textContent);
    totalResumen.textContent = Number(precio_produc.textContent) + Number(envio.textContent);
  } else {
    precio_produc.textContent = Number(precioUnitario.textContent) * Number(cantProductos.value);
    cantProductosResumen.textContent = Number(cantProductos.value);
    subtotalResumen.textContent = Number(precio_produc.textContent);
    totalResumen.textContent = Number(precio_produc.textContent) + Number(envio.textContent);
  } 
});


borrar.addEventListener('click', () => {
  divCadaProducto.remove();
  // ver para que se cambie lo de resumen
  // cantProductosResumen.textContent = Number(cantProductos.value);
  // subtotalResumen.textContent = Number(precio_produc.textContent);
  // totalResumen.textContent = Number(precio_produc.textContent) + Number(envio.textContent);
})

