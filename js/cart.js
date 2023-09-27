const addCart = document.getElementById('cart_add');
const subtractCart = document.getElementById('cart_subtract');
const cantidadCart = document.getElementById('cart_cantidad');
const precioUnitario = document.getElementById('cart_precio_unitario');
const precioTotalProducto = document.getElementById('cart_precio_total_producto');

const cantElementos = document.getElementById('cart_cant_elementos')
const subtotal = document.getElementById('cart_subtotal')
const envio = document.getElementById('cart_envio')
const precioTotal = document.getElementById('cart_precio_total')

console.log(precioTotalProducto.textContent);

// AGREGAR O RESTAR CANTIDAD DE PRODUCTO
addCart.addEventListener('click', () => cantidadCart.value = Number(cantidadCart.value) + 1);
subtractCart.addEventListener('click', () => {
  if (cantidadCart.value <= 0){
    cantidadCart.value = 0;
  } else {
    cantidadCart.value = Number(cantidadCart.value) - 1;
  } 
});

// AL CARGAR LA PÁGINA SE PONEN TODOS LOS DATOS
window.addEventListener('click', () => {
  precioTotalProducto.textContent = Number(cantidadCart.value) * Number(precioUnitario.textContent);
});
