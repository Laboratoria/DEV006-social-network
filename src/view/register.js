import {
  createUser,
  securePassword,
  validateEmail,
  validatePassowrds,
} from '../lib/index.js';

export const register = () => {
  const body = document.getElementById('root');
  body.innerHTML = '';

  const bodyimg = document.createElement('div');
  bodyimg.setAttribute('class', 'bodyimg');

  const registerdiv = document.createElement('div');
  registerdiv.setAttribute('id', 'register');
  registerdiv.setAttribute('class', 'register');

  const header = document.createElement('header');

  const logoImg = document.createElement('img');
  logoImg.setAttribute('src', 'img/logo.png');

  const nav = document.createElement('nav');

  const ul = document.createElement('ul');

  const btnHome = document.createElement('li');
  btnHome.setAttribute('id', 'Home');

  const homeLink = document.createElement('a');
  homeLink.setAttribute('href', '/');
  homeLink.textContent = 'Home';

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

  const lastNameLabel = document.createElement('label');
  lastNameLabel.setAttribute('for', 'lastName');
  lastNameLabel.textContent = 'Last Name';
  lastNameLabel.classList.add('labelQuestions');

  const lastName = document.createElement('input');
  lastName.setAttribute('type', 'text');
  lastName.setAttribute('placeholder', 'Last Name');
  lastName.setAttribute('id', 'lastName');

  const txtEmailLabel = document.createElement('label');
  txtEmailLabel.setAttribute('for', 'txtEmail');
  txtEmailLabel.textContent = 'Email';
  txtEmailLabel.classList.add('labelQuestions');

  const txtEmail = document.createElement('input');
  txtEmail.setAttribute('id', 'txtEmail');
  txtEmail.setAttribute('type', 'email');
  txtEmail.setAttribute('placeholder', 'Email');
  txtEmail.addEventListener('blur', validateEmail);

  const spanErrorEmail = document.createElement('span');
  spanErrorEmail.setAttribute('id', 'spanErrorEmail');

  const txtPasswordLabel = document.createElement('label');
  txtPasswordLabel.setAttribute('for', 'txtPassword');
  txtPasswordLabel.textContent = 'Password';
  txtPasswordLabel.classList.add('labelQuestions');

  const txtPassword = document.createElement('input');
  txtPassword.setAttribute('id', 'txtPassword');
  txtPassword.setAttribute('type', 'password');
  txtPassword.setAttribute('placeholder', 'Password');
  txtPassword.addEventListener('keyup', securePassword);

  const spanErrorPassword = document.createElement('span');
  spanErrorPassword.setAttribute('id', 'spanErrorPassword');

  const txtPasswordAgainLabel = document.createElement('label');
  txtPasswordAgainLabel.setAttribute('for', 'txtPasswordAgain');
  txtPasswordAgainLabel.textContent = 'Password (again)';
  txtPasswordAgainLabel.classList.add('labelQuestions');

  const txtPasswordAgain = document.createElement('input');
  txtPasswordAgain.setAttribute('id', 'txtPasswordAgain');
  txtPasswordAgain.setAttribute('type', 'password');
  txtPasswordAgain.setAttribute('placeholder', 'Password (again)');
  txtPasswordAgain.addEventListener('blur', validatePassowrds);

  const spanErrorPasswordAgain = document.createElement('span');
  spanErrorPasswordAgain.setAttribute('id', 'spanErrorPasswordAgain');

  const btnRegister = document.createElement('button');
  btnRegister.setAttribute('id', 'btnRegister');
  btnRegister.setAttribute('type', 'button');
  btnRegister.setAttribute('class', 'button');
  btnRegister.addEventListener('click', createUser);
  btnRegister.textContent = 'Sign Up';
  const spanCreateUser = document.createElement('span');
  spanCreateUser.setAttribute('id', 'spanCreateUser');
  
  body.append(bodyimg);
  bodyimg.append(registerdiv);
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
    spanCreateUser,
  );
};
