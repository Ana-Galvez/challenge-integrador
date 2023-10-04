function dataResumen(precio_produc,precioUnitario,cantProductos,cantProductosResumen,subtotalResumen,totalResumen,envio){
    precio_produc.textContent=Number(precioUnitario.textContent) * Number(cantProductos.value);
    cantProductosResumen.textContent = Number(cantProductos.value);
    subtotalResumen.textContent = Number(precio_produc.textContent);
    totalResumen.textContent = Number(precio_produc.textContent) + Number(envio.textContent);
};
export{
    dataResumen,
}