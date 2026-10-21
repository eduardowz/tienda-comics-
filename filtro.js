const botones = document.querySelectorAll('.filtro-btn');
const tarjetas = document.querySelectorAll('.producto');

function filtrarProductos(categoria) {
  let visibles = 0;
  tarjetas.forEach(tarjeta => {
    const coincide = categoria === 'todos' || tarjeta.dataset.category === categoria;
    tarjeta.hidden = !coincide;
    if (coincide) visibles++;
  });
  if (visibles === 0) {
    console.warn('Ninguna tarjeta coincide con el filtro: ' + categoria);
  }
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

filtrarProductos('todos');
marcarActivo(document.querySelector('[data-filter="todos"]'));