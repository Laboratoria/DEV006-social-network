
import { login } from './view/login.js';

const main = document.getElementById('main');
const btnLoginHome = document.getElementById('btnLoginHome');
const txtEmail = document.getElementById("txtEmail");
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');
const btnSignup = document.getElementById('btnSignup');
const btnLogout = document.getElementById('btnLogout');

btnLoginHome.addEventListener("click", () =>{
    main.innerHTML= login();
})