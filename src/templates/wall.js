function wall() {
  const form = document.createElement('form');
  const iconoRestaurante = document.createElement('img');
  const contenedor = document.createElement('div');
  contenedor.classList.add('contenedor');
  const iconoAgregar = document.createElement('img');
  const iconoMuro = document.createElement('img');
  const iconoPerfil = document.createElement('img');

  // const parrafo = document.createElement('p');

  iconoRestaurante.src = './img/iconoRestaurante.png';
  iconoRestaurante.classList.add('iconoRestaurante');

  iconoAgregar.src = './img/iconoAgregar.png';
  iconoAgregar.classList.add('iconoAgregar');

  iconoMuro.src = './img/iconoMuro.png';
  iconoMuro.classList.add('iconoMuro');

  iconoPerfil.src = './img/iconoPerfil.png';
  iconoPerfil.classList.add('iconoPerfil');

  contenedor.append(iconoMuro, iconoAgregar, iconoPerfil);

  form.append(iconoRestaurante, contenedor);
  return form;
}

export default wall;
