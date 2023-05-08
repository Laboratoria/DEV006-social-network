/* eslint-disable no-console */
// Importar las vistas
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { home } from './pages/home.js';
import { auth } from './lib/index.js';

const root = document.getElementById('root');

const routes = [
  { path: '/', component: home },
];
home(root);
// const default= '/';

const loginForm = document.querySelector('form');

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = loginForm.querySelector('input[type="email"]').value;
  const password = loginForm.querySelector('input[type="password"]').value;

  console.log(email, password);
  // promesa de la funcion, bloque try.. catch debe ir acompañado de async(funcion asyncrona)
  // await espera que la funcion cumpla con los parametros para ver un resultado o error
  try {
    const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
    console.log(userCredentials);
  } catch (error) {
    console.log(error.message);
    console.log(error.code);

    if (error.code === 'auth/email-already-in-use') {
      alert('Email already in use');
    } else if (error.code === 'auth/invalid-email') {
      alert('Invalid email');
    } else if (error.code === 'auth/weak-password') {
      alert('Your password must have a minimum of 6 characters ');
    } else if (error.code === 'auth/invalid-email' && error.code === 'auth/weak-password') {
      alert('Your email and password are invalid');
    } else if (error.code) {
      alert('Something went wrong');
    }
  }
});
