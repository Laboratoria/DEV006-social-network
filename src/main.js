import { welcome } from './view/welcome.js';
welcome();

import  { login } from './view/login.js';

const body = document.getElementById('body');
const btnLoginHome = document.getElementById('btnLoginhome');
btnLoginHome.addEventListener("click", () =>{

  body.innerHTML= login();
});
