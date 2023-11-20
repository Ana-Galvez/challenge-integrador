function addToCart(producto) {
  const addQuantity = document.querySelector('#add')
  const subtractQuantity = document.querySelector('#subtract')
  const quantityProduct = document.querySelector('#cantidad')


  const savedProduct = localStorage.getItem('funko')
  console.log(savedProduct);

  if (!savedProduct) {
    const newProduct = producto
    newProduct.quantity = Number(quantityProduct.value)
    localStorage.setItem('funko',JSON.stringify([newProduct]))
  }
}