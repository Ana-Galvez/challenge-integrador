function buscarProductos() {
  const inputNombreProducto = document.getElementById('buscar').value;
  fetch('/shop', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ inputNombreProducto }),
  })
  .then(response => response.json())
  .then(data => {
    const resultsContainer = document.getElementById('resultsProducts');
    resultsContainer.innerHTML = '';

    if (data.length > 0) {
      data.forEach(product => {
        const productItem= document.createElement('li');
        productItem.classList.add('slider__item');
        productItem.innerHTML = `
        <article class="card-item">
          <a class="card-item__link" href="/shop/item/${product.product_id}">
          <picture  class="card-item__cover">
          <span class="card-item__tag">Nuevo</span>
          <img class="card-item__img--front" src="/img<%= product.image_front %>" alt="<%= product.product_description %>">
          <img class="card-item__img--back" src="/img<%= product.image_back %>" alt="<%= product.product_description %>">
          </picture>
          <div class="card-item__content">
          <p class="card-item__licence"><%= product.licence_name %></p>
          <h4 class="card-item__name"><%= product.product_name %></h4>
          <p class="card-item__price"><%= product.price %></p>
          <p class="card-item__promo">3 CUOTAS SIN INTERÉS</p>
          </div>
          </a>
        </article>
      `;
      resultsContainer.appendChild(productItem);
    });
    } else {
      const noResultsItem = document.createElement('li');
      noResultsItem.textContent = 'No se encontraron resultados.';
      resultsContainer.appendChild(noResultsItem);
    }
  })
  .catch(error => console.error('Error al buscar productos:', error));
}