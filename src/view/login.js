import { 
  LoginUser, 
  validateEmail, 
  signPop 
} from '../lib/index.js';

import { footer } from './footer.js';

export const login = (navigateTo) => {
  /* const body = document.getElementById('root');
  body.innerHTML = '';
 */
  const bodyimg = document.createElement('div');
  bodyimg.setAttribute('class', 'bodyimg');

  const logindiv = document.createElement('div');
  logindiv.setAttribute('id', 'login');
  logindiv.setAttribute('class', 'login');

  const header = document.createElement('header');

  const logoImg = document.createElement('img');
  logoImg.setAttribute('src', 'img/logo.png');
  logoImg.setAttribute('alt', 'This is the logo. It is a dog paw inside a heart.')

  const nav = document.createElement('nav');

  const ul = document.createElement('ul');

  const btnHome = document.createElement('li');
  btnHome.setAttribute('id', 'Home');

  const homeLink = document.createElement('a');
  homeLink.textContent = 'Home';
  homeLink.addEventListener('click', () => {
    navigateTo('/')});
  

  const h1 = document.createElement('h1');
  h1.textContent = 'Be My Friend';

  const form = document.createElement('form');

  const h2 = document.createElement('h2');
  h2.textContent = 'Log In';

  const group1 = document.createElement('div');
  group1.setAttribute('class', 'group');

  const txtEmail = document.createElement('input');
  txtEmail.setAttribute('id', 'txtEmail');
  txtEmail.setAttribute('type', 'email');
  txtEmail.setAttribute('placeholder', 'Email');
  txtEmail.addEventListener('blur', validateEmail);

  const spanErrorEmail = document.createElement('span');
  spanErrorEmail.setAttribute('id', 'spanErrorEmail');

  const group2 = document.createElement('div');
  group2.setAttribute('class', 'group');

  const txtPassword = document.createElement('input');
  txtPassword.setAttribute('id', 'txtPassword');
  txtPassword.setAttribute('type', 'password');
  txtPassword.setAttribute('placeholder', 'Password');

  const spanErrorPassword = document.createElement('span');
  spanErrorPassword.setAttribute('id', 'spanErrorPassword');

  const btnLogin = document.createElement('button');
  btnLogin.setAttribute('id', 'btnLogin');
  btnLogin.setAttribute('type', 'button');
  btnLogin.setAttribute('class', 'button');
  btnLogin.addEventListener('click', LoginUser);
  btnLogin.textContent = 'Log In';

  const containerLogin = document.createElement('div');
  containerLogin.classList.add('containerLogin');

  const ulPassword = document.createElement('ul');

  const liPassword = document.createElement('li');
  liPassword.setAttribute('id', 'forgotPassword');

  const aPassword = document.createElement('a');
  aPassword.setAttribute('href', '#');
  aPassword.textContent = 'Forgot Password?';

  const h4 = document.createElement('h4');
  h4.textContent = 'or log in with';
  h4.setAttribute('class', 'logInWith');

  const hr = document.createElement('hr');

  const btnGoogle = document.createElement('button');
  btnGoogle.setAttribute('class', 'btnGoogle');
  btnGoogle.textContent = 'Google';
  btnGoogle.addEventListener('click', signPop);

  const imgGoogle = document.createElement('img');
  imgGoogle.setAttribute('src', '../img/googleplus.png');
  imgGoogle.setAttribute('alt', 'This is the G logo from Google. It is inside the Google log in button.');
  

  const ulAccount = document.createElement('ul');

  const liAccount = document.createElement('li');
  liAccount.textContent = 'Need an account? ';

  const aAccount = document.createElement('a');
  aAccount.setAttribute('id', 'btnSignup');
  aAccount.setAttribute('type', 'submit');
  aAccount.setAttribute('class', 'button');
  aAccount.textContent = 'Sign Up';
  aAccount.addEventListener('click', () => {
    navigateTo('/register')});

  bodyimg.append(logindiv, footer());
  logindiv.append(header, h1, form);
  header.append(logoImg, nav);
  nav.append(ul);
  ul.append(btnHome);
  btnHome.append(homeLink);
  form.append(h2, group1, group2, btnLogin, containerLogin);

  containerLogin.append(ulPassword, h4, hr, btnGoogle, ulAccount);

  btnGoogle.append(imgGoogle);
  group1.append(txtEmail, spanErrorEmail);
  group2.append(txtPassword, spanErrorPassword);
  ulPassword.append(liPassword);
  liPassword.append(aPassword);
  ulAccount.append(liAccount);
  liAccount.append(aAccount);

  return bodyimg;
};
