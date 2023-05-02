import {
  createUser,
  securePassword,
  validateEmail,
  validatePassowrds,
} from '../lib/index.js';

import { footer } from './footer.js';

export const register = (navigateTo) => {
  const bodyimg = document.createElement('div');
  bodyimg.setAttribute('class', 'bodyimg');

  const registerdiv = document.createElement('div');
  registerdiv.setAttribute('id', 'register');
  registerdiv.setAttribute('class', 'register');

  const header = document.createElement('header');

  const logoImg = document.createElement('img');
  logoImg.setAttribute('src', 'img/logo.png');
  logoImg.setAttribute('alt', 'This is the logo. It is a dog paw inside a heart.');

  const nav = document.createElement('nav');

  const ul = document.createElement('ul');

  const btnHome = document.createElement('li');
  btnHome.setAttribute('id', 'Home');

  const homeLink = document.createElement('a');
  homeLink.textContent = 'Home';
  homeLink.addEventListener('click', () => {
    navigateTo('/');
  });

  const h1 = document.createElement('h1');
  h1.textContent = 'Be My Friend';

  // -------------------------------------------------INICIA EL FORMULARIO
  const form = document.createElement('form');

  const h2 = document.createElement('h2');
  h2.textContent = 'Sign Up';

  const userNameLabel = document.createElement('label');
  userNameLabel.setAttribute('for', 'userName');
  userNameLabel.textContent = 'Name';
  userNameLabel.classList.add('labelQuestions');

  const userName = document.createElement('input');
  userName.setAttribute('type', 'text');
  userName.setAttribute('placeholder', 'Name');
  userName.setAttribute('id', 'userName');
  userName.required = true;
  userName.setAttribute('aria-required', 'true');
  userName.setAttribute('pattern', '^[a-zA-Z]{2,}$');

  const lastNameLabel = document.createElement('label');
  lastNameLabel.setAttribute('for', 'lastName');
  lastNameLabel.textContent = 'Last Name';
  lastNameLabel.classList.add('labelQuestions');

  const lastName = document.createElement('input');
  lastName.setAttribute('type', 'text');
  lastName.setAttribute('placeholder', 'Last Name');
  lastName.setAttribute('id', 'lastName');
  lastName.required = true;
  lastName.setAttribute('aria-required', 'true');
  lastName.setAttribute('pattern', '^[a-zA-Z]{2,}$');

  const txtEmailLabel = document.createElement('label');
  txtEmailLabel.setAttribute('for', 'txtEmail');
  txtEmailLabel.textContent = 'Email';
  txtEmailLabel.classList.add('labelQuestions');

  const txtEmail = document.createElement('input');
  txtEmail.setAttribute('id', 'txtEmail');
  txtEmail.setAttribute('type', 'email');
  txtEmail.setAttribute('placeholder', 'Email');
  txtEmail.required = true;
  txtEmail.setAttribute('aria-required', 'true');

  const spanErrorEmail = document.createElement('span');
  spanErrorEmail.setAttribute('id', 'spanErrorEmail');

  txtEmail.addEventListener('blur', () => {
    validateEmail(txtEmail, txtEmail.value, spanErrorEmail);
  });

  const txtPasswordLabel = document.createElement('label');
  txtPasswordLabel.setAttribute('for', 'txtPassword');
  txtPasswordLabel.textContent = 'Password';
  txtPasswordLabel.classList.add('labelQuestions');

  const txtPassword = document.createElement('input');
  txtPassword.setAttribute('id', 'txtPassword');
  txtPassword.setAttribute('type', 'password');
  txtPassword.setAttribute('placeholder', 'Password');
  txtPassword.required = true;
  txtPassword.setAttribute('aria-required', 'true');

  const spanErrorPassword = document.createElement('span');
  spanErrorPassword.setAttribute('id', 'spanErrorPassword');

  txtPassword.addEventListener('keyup', () => {
    securePassword(txtPassword, spanErrorPassword);
  });

  const txtPasswordAgainLabel = document.createElement('label');
  txtPasswordAgainLabel.setAttribute('for', 'txtPasswordAgain');
  txtPasswordAgainLabel.textContent = 'Password (again)';
  txtPasswordAgainLabel.classList.add('labelQuestions');

  const txtPasswordAgain = document.createElement('input');
  txtPasswordAgain.setAttribute('id', 'txtPasswordAgain');
  txtPasswordAgain.setAttribute('type', 'password');
  txtPasswordAgain.setAttribute('placeholder', 'Password (again)');
  txtPasswordAgain.required = true;
  txtPasswordAgain.setAttribute('aria-required', 'true');

  const spanErrorPasswordAgain = document.createElement('span');
  spanErrorPasswordAgain.setAttribute('id', 'spanErrorPasswordAgain');

  txtPasswordAgain.addEventListener('blur', () => {
    validatePassowrds(
      txtPassword.value,
      txtPasswordAgain,
      txtPasswordAgain.value,
      spanErrorPasswordAgain,
    );
  });

  const btnRegister = document.createElement('button');
  btnRegister.setAttribute('id', 'btnRegister');
  btnRegister.setAttribute('type', 'submit');
  btnRegister.setAttribute('class', 'button');
  btnRegister.textContent = 'Sign Up';

  function handleSubmit() {
    createUser();
    navigateTo('/error');
  }

  form.addEventListener('submit', handleSubmit);

  bodyimg.append(registerdiv, footer());
  registerdiv.append(header, h1, form);
  header.append(logoImg, nav);
  nav.append(ul);
  ul.append(btnHome);
  btnHome.append(homeLink);
  form.append(
    h2,
    userNameLabel,
    userName,
    lastNameLabel,
    lastName,
    txtEmailLabel,
    txtEmail,
    spanErrorEmail,
    txtPasswordLabel,
    txtPassword,
    spanErrorPassword,
    txtPasswordAgainLabel,
    txtPasswordAgain,
    spanErrorPasswordAgain,
    btnRegister,
  );
  return bodyimg;
};
