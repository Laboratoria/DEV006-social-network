/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import { signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js';
// import login from '../views/register.js';
import { auth } from './firebase.js';

export const signInFn = async (navigateTo) => {
  // const signinForm = document.getElementById('form-login');
  const signinForm = document.querySelector('#form-login');
  console.log(signinForm);

  const email = signinForm['email-input'].value;
  const password = signinForm['password-input'].value;
  console.log(email, password);

  try {
    const credentials = await signInWithEmailAndPassword(auth, email, password);
    console.log(credentials);
    navigateTo('/posts');
  } catch (error) {
    if (error) {
      alert('Algo salió mal, verifica tus datos');
    }
  }
};
