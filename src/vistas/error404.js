// file error.js
function error404() {
  const title = document.createElement('h2');
  title.textContent = 'Error 404 page no found, please go home';
  return title;
}

export default error404;
