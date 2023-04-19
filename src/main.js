

import { login } from './view/login.js';


const main = document.getElementById('main');

const btnLoginHome = document.getElementById('btnLoginHome');

btnLoginHome.addEventListener("click", () => {
  main.innerHTML = login();

  const txtEmail = document.getElementById("txtEmail");
  const txtPassword = document.getElementById('txtPassword');

  document.addEventListener('click', handleClick);

  // Remueve el manejador de eventos cuando ya no sea necesario
  btnLoginHome.removeEventListener("click", handleClick);
});