
import { login } from './view/login.js';
import { navbar } from './view/navbar.js';

const main = document.getElementById('main');
const header = document.getElementById('header')
const btnLoginHome = document.getElementById('btnLoginHome');
const txtEmail = document.getElementById("txtEmail");
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');
const btnSignup = document.getElementById('btnSignup');
const btnLogout = document.getElementById('btnLogout');

btnLoginHome.addEventListener("click", () =>{
    header.innerHTML= navbar();
    main.innerHTML= login();
})