// file error.js
function error404(navigateTo) {
  const title = document.createElement('h2');
  title.textContent = 'Error 404. Pagina no encontrada';
  title.classList.add('titleError');
  return title;
}

export default error404;
