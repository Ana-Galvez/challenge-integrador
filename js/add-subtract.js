function addCantProducts(elemento) {
  elemento.value = Number(elemento.value) + 1;
};

function subtractCantProducts(elemento) {
  if (elemento.value <= 0){
    elemento.value = 0;
  } else {
    elemento.value = Number(elemento.value) - 1;
  } 
}

export {
  addCantProducts,
  subtractCantProducts,
}