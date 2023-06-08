/* eslint-disable no-console */
import {
  signInWithRedirect,
  getRedirectResult,
  GoogleAuthProvider,
} from 'firebase/auth';
import { userLogin } from '../helpers/lib/Auth';
import { auth } from '../helpers/lib/firebase';

function login(navigateTo) {
// llamar al DOM y crear cada elemento
  const section = document.createElement('section');
  const sectionLogin = document.createElement('section');
  const sectionLogo = document.createElement('div');
  const logo = document.createElement('img');
  const sectionPets = document.createElement('div');
  const animales = document.createElement('img');
  const form = document.createElement('form');
  const contenedorC = document.createElement('article');
  const iconoHeart = document.createElement('img');
  const labelCorreo = document.createElement('label');
  const inputCorreo = document.createElement('input');
  const contenedorP = document.createElement('article');
  const iconHeart = document.createElement('img');
  const labelPassword = document.createElement('label');
  const inputPassword = document.createElement('input');
  const buttonLogin = document.createElement('button'); // iniciar sesión
  const buttonSignGoogle = document.createElement('button');
  const image = document.createElement('img');
  const contenedorR = document.createElement('section');
  const pregunta = document.createElement('h2');
  const buttonRegistrate = document.createElement('a');
  const divIzquierdo = document.createElement('div');
  const cel = document.createElement('img');
  const texto = document.createElement('p');
  const divFooterLogin = document.createElement('div');
  const footerLogin = document.createElement('footer');

  /* agregando imagen al dom dentro de esta seccion
  logo.src = '../assets/logo1.png';
  animales.src = '../assets/imagPets2.jpg'; */

  // Agregar atributos a las img del logo
  logo.classList.add('logo');
  logo.setAttribute('src', '../assets/logo1.png');
  sectionLogo.classList.add('sectionLogo');
  sectionLogo.append(logo);

  // agregando atributos a la img de los pets
  animales.classList.add('animales');
  animales.setAttribute('src', '../assets/pets.jpg');
  sectionPets.className = 'sectionPets';

  buttonSignGoogle.classList.add('google');
  image.src = '../assets/google.png';
  image.alt = 'Button Image';
  // Agregar la imagen al botón
  buttonSignGoogle.appendChild(image);

  iconoHeart.classList.add('icon-heart');
  iconoHeart.setAttribute('src', '../assets/logo2.png');
  labelCorreo.textContent = 'Correo';
  contenedorC.append(iconoHeart, labelCorreo);

  inputCorreo.setAttribute('id', 'email');
  inputCorreo.placeholder = 'example@gmail.com';

  iconHeart.classList.add('icon-heart');
  iconHeart.setAttribute('src', '../assets/logo2.png');
  labelPassword.textContent = 'Contraseña';
  contenedorP.append(iconHeart, labelPassword);

  inputPassword.setAttribute('id', 'password');
  inputPassword.placeholder = '********';

  pregunta.textContent = '¿No tienes una cuenta?';
  buttonRegistrate.classList.add('button-registrate');
  buttonRegistrate.textContent = 'Regístrate';
  contenedorR.classList.add('centrado');
  contenedorR.append(pregunta, buttonRegistrate);

  footerLogin.classList.add('footer-login');
  footerLogin.textContent = '@WebDulValLeo';
  divFooterLogin.classList.add('div-footer-login');
  divFooterLogin.append(footerLogin);

  // PANTALLA PC
  texto.textContent = 'Ingresa a nuestra app y forma parte de esta linda comunidad. Comparte tips, anécdotas y/o recetas para tus mascotas.';
  cel.classList.add('cel-perro');
  cel.setAttribute('src', '../assets/celPerrito.png');
  divIzquierdo.classList.add('div-left');
  divIzquierdo.append(texto, cel);

  // callback a los botones
  buttonLogin.classList.add('login');
  buttonLogin.textContent = 'Iniciar Sesión';
  buttonRegistrate.addEventListener('click', () => {
    navigateTo('/registro');
  });

  // agregando elementos al form
  form.append(contenedorC, inputCorreo, contenedorP, inputPassword, buttonLogin);
  sectionPets.append(animales, form, buttonSignGoogle, contenedorR);

  // agregando elementos a toda la seccion login
  sectionLogin.classList.add('sectionLogin');
  sectionLogin.append(sectionLogo, sectionPets, divFooterLogin);

  // agregar los elementos al DOM
  section.classList.add('sectionGeneral');
  section.append(
    divIzquierdo,
    sectionLogin,
  );

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = inputCorreo.value;
    const password = inputPassword.value;
    const promesa = userLogin(email, password);
    promesa.then((userCredential) => {
      sessionStorage.setItem('user', userCredential.user.uid);
      sessionStorage.setItem('email', userCredential.user.email);
      navigateTo('/home');
    }).catch((error) => {
      const alerta = document.querySelector('.message-error');
      if (alerta) {
        alerta.remove();
      }
      const mensajeError = document.createElement('p');
      mensajeError.textContent = error.code;
      mensajeError.classList.add('message-error');
      form.appendChild(mensajeError);
    });
  });

  buttonSignGoogle.addEventListener('click', () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  });

  getRedirectResult(auth).then((userCredential) => {
    console.log(userCredential);
    if (userCredential) {
      // // GUARDAR LA INFO EN EL SESION STORAGE
      sessionStorage.setItem('user', userCredential.user.uid);
      sessionStorage.setItem('email', userCredential.user.email);
      navigateTo('/home');
    }
  });

  return section;
}

export default login;
