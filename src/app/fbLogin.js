/* eslint-disable import/no-unresolved */
/* eslint-disable prefer-template */
/* eslint-disable no-alert */
/* eslint-disable no-console */
import { FacebookAuthProvider, signInWithPopup } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js';
import { auth } from './firebase.js';

export const fbSignInFn = async (navigateTo) => {
  const loginFb = document.querySelector('#loginFb');
  console.log(loginFb);

  const provider = new FacebookAuthProvider();

  try {
    const credentials = await signInWithPopup(auth, provider);
    console.log(credentials);
    navigateTo('/posts');
    alert('Bienvenid@ ' + credentials.user.displayName);
  } catch (error) {
    console.log(error);
  }
};
