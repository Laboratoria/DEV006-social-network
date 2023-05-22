// ----------- Pagína de error la cual sera mostrada si la ruta no es encontrada
export const error = () => {
  const title = document.createElement('h2');
  title.textContent = 'Error 404 page no found, please go home';

  return title;
};
