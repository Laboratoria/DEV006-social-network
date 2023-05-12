/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
import { signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js';
import login from '../views/register.js';
import { auth } from './firebase.js';

document.addEventListener('DOMContentLoaded', () => {
  const signupForm = document.querySelector('#form-login');
  signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = signupForm['email-input'].value;
    const password = signupForm['password-input'].value;

    try {
      const credentials = await signInWithEmailAndPassword(auth, email, password);
      console.log(credentials);
    } catch (error) {
      if (error.code === 'auth/wrong-password') {
        alert('Wrong Password');
      } else if (error.code === 'auth/user-not-found') {
        alert('User not found');
      } else if (error.code) {
        alert('Something want wrong');
      }
    }
  });
});
