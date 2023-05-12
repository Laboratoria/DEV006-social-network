/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js';
import { auth } from './firebase.js';
// // eslint-disable-next-line no-unused-vars

export const signUpFn = async (navigateTo) => {
  const signupForm = document.querySelector('#signup-form');

  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;

  console.log(email, password);
  console.log(signupForm);
  try {
    const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
    console.log(userCredentials);
    navigateTo('/login');
  } catch (error) {
    if (error) {
      alert('Algo salió mal, verifica tus datos');
    }
  }
};
