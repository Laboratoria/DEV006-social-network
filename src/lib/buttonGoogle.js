/* eslint-disable no-console */
// import { createAcount } from '../templates/createAcount.js';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from './firebase.js';

const loginGoogle = document.createElement('button');
loginGoogle.classList.add('google');
const createGoogle = document.createElement('button');
createGoogle.classList.add('google');

const buttonGoogle = document.querySelector('.google');

buttonGoogle.addEventListener('click', () => {
  const provider = new GoogleAuthProvider();
  try {
    const credential = signInWithPopup(auth, provider);
    console.log(credential, 'pasa');
  } catch (error) {
    console.log(error, 'pasa error');
  }
});

export default buttonGoogle;
