function error() {
  const errorTxt = document.createElement('h1');
  errorTxt.textContent = 'Error 404: página no encontrada. Por favor, regresa a la página de bienvenida.';
  return errorTxt;
}

export default error;
