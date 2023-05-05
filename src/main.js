// Este es el punto de entrada de tu aplicacion

import {login, logout} from "./auth.js";
const buttonLogin = document.querySelector("#button-login");
buttonLogin.addEventListener("click", async e => {
  try {
    await login ();
  } catch (error){

  }
});