import { LoginUser } from '../lib/index.js';
import { createUser } from '../lib/index.js';

export const login = () => {
  
  const body= document.getElementById("root")
  body.innerHTML= "";

  const bodyimg = document.createElement("div");
  bodyimg.setAttribute("class", "bodyimg");

  const logindiv = document.createElement('div');
  logindiv.setAttribute('id','login')
  logindiv.setAttribute('class','login')

  const header = document.createElement("header");

  const logoImg = document.createElement("img");
  logoImg.setAttribute("src", "img/logo.png");

  const nav = document.createElement('nav');

  const ul = document.createElement('ul');

  const btnHome = document.createElement('li');
  btnHome.setAttribute('id', 'Home');

  const homeLink = document.createElement('a');
  homeLink.setAttribute('href','/');
  homeLink.textContent = 'Home';

  const h1 = document.createElement('h1');
  h1.textContent = 'Be My Friend';

  const form = document.createElement('form');
  form.setAttribute('action','#')
  form.setAttribute('method','POST')

  const h2 = document.createElement('h2');
  h2.textContent = 'Log In';

  const group1 = document.createElement('div');
  group1.setAttribute('class','group')

  const txtEmail = document.createElement('input');
  txtEmail.setAttribute('id', 'txtEmail')
  txtEmail.setAttribute('type', 'email')
  txtEmail.setAttribute('placeholder', 'Email')

  const group2 = document.createElement('div')
  group2.setAttribute('class','group')

  const txtPassword = document.createElement('input');
  txtPassword.setAttribute('id', 'txtPassword')
  txtPassword.setAttribute('type', 'password')
  txtPassword.setAttribute('placeholder', 'Password')

  const btnLogin = document.createElement('button');
  btnLogin.setAttribute('id', 'btnLogin');
  btnLogin.setAttribute('type', 'button');
  btnLogin.setAttribute('class', 'button');
  btnLogin.addEventListener('click', LoginUser);
  btnLogin.textContent ='Log In';

  const ulPassword = document.createElement('ul');

  const liPassword = document.createElement('li');
  liPassword.setAttribute('id','forgotPassword');

  const aPassword = document.createElement('a');
  aPassword.setAttribute('href','#');
  aPassword.textContent = 'Forgot Password?'

  const h4 = document.createElement('h4');
  h4.textContent = 'or log in with';
  h4.setAttribute('class','logInWith');

  const hr = document.createElement('hr');

  const btnGoogle = document.createElement('button');
  btnGoogle.setAttribute('class','btnGoogle');
  btnGoogle.textContent = 'Google';

  const imgGoogle = document.createElement('img');
  imgGoogle.setAttribute('src','../img/googleplus.png');

  const ulAccount = document.createElement('ul');

  const liAccount = document.createElement('li');
  liAccount.textContent ='Need an account? '

  const aAccount = document.createElement('a')
  aAccount.setAttribute('href','#')
  aAccount.setAttribute('id','btnSignup')
  aAccount.setAttribute('type','submit')
  aAccount.setAttribute('class','button')
  aAccount.addEventListener('click', createUser );
  aAccount.textContent = 'Sign Up'

  
  body.append(bodyimg);
  bodyimg.append(logindiv);
  logindiv.append(header,h1,form)
  header.append(logoImg,nav)
  nav.append(ul)
  ul.append(btnHome)
  btnHome.append(homeLink)
  form.append(h2,group1,group2,btnLogin,ulPassword,h4,hr,btnGoogle,ulAccount)
  btnGoogle.append(imgGoogle)
  group1.append(txtEmail)
  group2.append(txtPassword)
  ulPassword.append(liPassword)
  liPassword.append(aPassword)
  ulAccount.append(liAccount)
  liAccount.append(aAccount)
  };
  

  const btnLogin = document.getElementById('btnLogin');
  const btnSignup = document.getElementById('btnSignup');
  const btnLogout = document.getElementById('btnLogout');