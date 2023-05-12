/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js';
import { auth } from './firebase.js';
// eslint-disable-next-line no-unused-vars
import register from '../views/register.js';

document.addEventListener('DOMContentLoaded', () => {
  const signupForm = document.querySelector('#signup-form');
  signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    console.log(email, password);

    try {
      const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
      console.log(userCredentials);
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Email already in use');
      } else if (error.code === 'auth/invalid-email') {
        alert('Please enter a valid email address');
      } else if (error.code === 'auth/weak-password') {
        alert('Your password is too weak. Please try again.');
      } else if (error.code) {
        alert('Something want wrong');
      }
    }
  });
});
