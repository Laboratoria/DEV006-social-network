import { welcome } from './view/welcome.js';
welcome();

import  { login } from './view/login.js';

/* const body = document.getElementById('root'); */

const btnLoginHome = document.getElementById('btnLoginHome');

btnLoginHome.addEventListener("click", login)




