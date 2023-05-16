/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-alert */
import {
  signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup,
} from 'firebase/auth';
import { auth } from '../lib/firebase.js';

export function signIn(navigateTo) {
  // Crear elementos
  const container = document.createElement('div');
  const header = document.createElement('header');
  const logo = document.createElement('img');
  const form = document.createElement('form');
  const emailLabel = document.createElement('label');
  const emailInput = document.createElement('input');
  const passwordLabel = document.createElement('label');
  const passwordInput = document.createElement('input');
  const questionAccount = document.createElement('p');
  const linkSignIn = document.createElement('a');
  const signInButton = document.createElement('button');
  const continueWithGoogleButton = document.createElement('button');

  // Establecer atributos y contenido
  container.classList.add('container');
  logo.setAttribute('src', './images/logoNameEasygym.png');
  emailLabel.textContent = 'Email';
  emailInput.classList.add('insertInfo');
  emailInput.setAttribute('placeholder', 'example@gmail.com');
  passwordLabel.textContent = 'Password';
  passwordInput.classList.add('insertInfo');
  emailInput.setAttribute('type', 'email');
  passwordInput.setAttribute('type', 'password');
  passwordInput.setAttribute('placeholder', 'Mypassword');
  questionAccount.textContent = 'Don\'t have an account?';
  linkSignIn.setAttribute('href', '#');
  linkSignIn.textContent = 'Create account';
  signInButton.classList.add('button');
  signInButton.textContent = 'Sign In';
  continueWithGoogleButton.classList.add('button');
  continueWithGoogleButton.textContent = 'Continue with Google';

  // Agregar elementos al header
  header.appendChild(logo);

  // Agregar elementos al formulario
  form.appendChild(emailLabel);
  form.appendChild(emailInput);
  form.appendChild(passwordLabel);
  form.appendChild(passwordInput);
  form.appendChild(signInButton);
  form.appendChild(continueWithGoogleButton);
  form.appendChild(questionAccount);
  form.appendChild(linkSignIn);

  // Agregar elementos al contenedor (div) especificado
  container.appendChild(header);
  container.appendChild(form);

  // Add event listeners
  linkSignIn.addEventListener('click', (e) => {
    e.preventDefault();
    navigateTo('/createAccount');
  });

  signInButton.addEventListener('click', async (e) => {
    e.preventDefault();

    const email = emailInput.value;
    const password = passwordInput.value;

    console.log(email, password);
    // promesa de la funcion, bloque try.. catch debe ir acompañado de async(funcion asyncrona)
    // await espera que la funcion cumpla con los parametros para ver un resultado o error

    try {
      const userCredentials = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCredentials);
    } catch (error) {
      console.log(error.message);
      console.log(error.code);

      if (error.code === 'auth/wrong-password') {
        alert('Wrong password !');
      } else if (error.code === 'auth/user-not-found') {
        alert('User not found !');
      } else if (error.code === 'auth/missing-password') {
        alert('Introduce your password');
      } else if (error.code === 'auth/invalid-email') {
        alert('Invalid user !');
      } else if (error.code === 'auth/internal-error') {
        alert('Internal error, try again !');
      } else if (error.code) {
        alert('Something went wrong !');
      }
    }
    navigateTo('/wall');
  });

  continueWithGoogleButton.addEventListener('click', async (e) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();

    try {
      const credentials = await signInWithPopup(auth, provider);
      console.log(credentials);
    } catch (error) {
      console.log(error);
    }
  });
  return container;
}
