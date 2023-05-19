import { LoginUser, signPop } from '../lib/index.js';
import { validateEmail } from '../lib/validation.js';
import { footer } from './footer.js';
// argumento de navigateTo para funcionalidad del router
export const login = (navigateTo) => {
  // ------------------------------------------------- Wallpaper
  const bodyimg = document.createElement('div');
  bodyimg.setAttribute('class', 'bodyimg');

  // ------------------------------------------------- Contenedor de log in/inicio de sesión
  const logindiv = document.createElement('div');
  logindiv.setAttribute('id', 'login');
  logindiv.setAttribute('class', 'login');

  const header = document.createElement('header');

  const logoImg = document.createElement('img');
  logoImg.setAttribute('src', 'img/logo.png');
  logoImg.setAttribute('alt', 'This is the logo. It is a dog paw inside a heart.');

  const nav = document.createElement('nav');

  const ul = document.createElement('ul');
  // -----------------------------------------Boton de Home en el nav
  const btnHome = document.createElement('li');
  btnHome.setAttribute('id', 'Home');
  // -----------------------------------------Evento listener del Boton Home
  const homeLink = document.createElement('a');
  homeLink.textContent = 'Home';
  homeLink.addEventListener('click', () => {
    navigateTo('/');
  });

  const h1 = document.createElement('h1');
  h1.textContent = 'Be My Friend';

  // ------------------------------------------------- Inicio de formulario de log in
  const form = document.createElement('form');

  const h2 = document.createElement('h2');
  h2.textContent = 'Log In';

  const group1 = document.createElement('div');
  group1.setAttribute('class', 'group');

  const txtEmail = document.createElement('input');
  txtEmail.setAttribute('id', 'txtEmail');
  txtEmail.setAttribute('type', 'email');
  txtEmail.setAttribute('placeholder', 'Email');

  const spanErrorEmail = document.createElement('span');
  spanErrorEmail.setAttribute('id', 'spanErrorEmail');
  // -------------------------- Evento listener blur(no enfocado) en txtEmail con fx validateEmail
  txtEmail.addEventListener('blur', () => {
    validateEmail(txtEmail, spanErrorEmail);
  });

  const group2 = document.createElement('div');
  group2.setAttribute('class', 'group');

  const txtPassword = document.createElement('input');
  txtPassword.setAttribute('id', 'txtPassword');
  txtPassword.setAttribute('type', 'password');
  txtPassword.setAttribute('placeholder', 'Password');

  const spanErrorPassword = document.createElement('span');
  spanErrorPassword.setAttribute('id', 'spanErrorPassword');
  // ------------------------------------btn del login
  const btnLogin = document.createElement('button');
  btnLogin.setAttribute('id', 'btnLogin');
  btnLogin.setAttribute('type', 'button');
  btnLogin.setAttribute('class', 'button');
  btnLogin.textContent = 'Log In';

  // ----------------------evento listener click en btnLogin funcion login y navega a wall
  btnLogin.addEventListener('click', () => {
    LoginUser(navigateTo);
  });
  // ------------------------------------------------- Fin de formulario

  // --------------------------------------------- Otras opciones de logIn en contenerdor inferior
  const containerLoginOptions = document.createElement('div');
  containerLoginOptions.classList.add('containerLoginOptions');

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
  // ----------------------------------  btnGoogle para registro
  const btnGoogle = document.createElement('button');
  btnGoogle.setAttribute('class', 'btnGoogle');
  btnGoogle.textContent = 'Google';
  // ---------------------------------- evento listener btnGoogle registro y navega a wall
  btnGoogle.addEventListener('click', (e) => {
    e.preventDefault();
    signPop(navigateTo);
  });
  // -----------------------------------mensaje de error si no inicia sesion con google
  const spanErrorGoogle = document.createElement('span');
  spanErrorGoogle.setAttribute('id', 'spanErrorGoogle');

  const imgGoogle = document.createElement('img');
  imgGoogle.setAttribute('src', '../img/btn_google_light_normal_ios.svg');
  imgGoogle.setAttribute('alt', 'This is the G logo from Google. It is inside the Google log in button.');

  const ulAccount = document.createElement('ul');

  const liAccount = document.createElement('li');
  liAccount.textContent = 'Need an account? ';

  const aAccount = document.createElement('a');
  aAccount.setAttribute('id', 'btnSignup');
  aAccount.setAttribute('type', 'submit');
  aAccount.setAttribute('class', 'button');
  aAccount.textContent = 'Sign Up';

  // --------------------------------evento listener para ancla Sign Up y navega a register
  aAccount.addEventListener('click', () => {
    navigateTo('/register');
  });
  // -------------------------seccion para insertar nodos
  bodyimg.append(logindiv, footer());
  logindiv.append(header, h1, form);
  header.append(nav);
  nav.append(logoImg, ul);
  ul.append(btnHome);
  btnHome.append(homeLink);
  form.append(h2, group1, group2, btnLogin, containerLoginOptions);
  containerLoginOptions.append(ulPassword, h4, hr, btnGoogle, spanErrorGoogle, ulAccount);
  btnGoogle.append(imgGoogle);
  group1.append(txtEmail, spanErrorEmail);
  group2.append(txtPassword, spanErrorPassword);
  ulPassword.append(liPassword);
  liPassword.append(aPassword);
  ulAccount.append(liAccount);
  liAccount.append(aAccount);

  return bodyimg;
};
