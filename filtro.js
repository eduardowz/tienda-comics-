const botones = document.querySelectorAll('.filtro-btn');
const tarjetas = document.querySelectorAll('.producto');

function filtrarProductos(categoria) {
  tarjetas.forEach(tarjeta => {
    tarjeta.hidden = !(categoria === 'todos' || tarjeta.dataset.category === categoria);
  });
}

function marcarActivo(boton) {
  botones.forEach(b => b.classList.remove('activo'));
  boton.classList.add('activo');
}

botones.forEach(boton => {
  boton.addEventListener('click', () => {
    marcarActivo(boton);
    filtrarProductos(boton.dataset.filter);
  });
});