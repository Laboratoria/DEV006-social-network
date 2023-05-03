import { salir } from "../lib/index.js";

export const error = (navigateTo) => {
  const title = document.createElement('h2');
  title.textContent = 'Error 404 page no found, please go home';

  const exit = document.createElement('button')
  exit.setAttribute('id', 'btnExit')
  exit.textContent = 'Exit';
  title.append(exit);

  function handleSubmit() {
    salir();
    navigateTo('/');
  }

  exit.addEventListener('click', handleSubmit);
  return title;
};
