function wall() {
  const form = document.createElement('form');
  const parrafo = document.createElement('p');
  parrafo.textContent = 'hola';

  form.append(parrafo);
  return form;
}

export default wall;
