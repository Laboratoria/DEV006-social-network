/* eslint-disable prefer-template */
/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from './firebase.js';

export const googleFn = (navigateTo) => {
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then((credentials) => {
      console.log(credentials);
      navigateTo('/posts');
      alert('Bienvenid@ ' + credentials.user.displayName);
    })
    .catch((error) => {
      console.log(error);
    });
};

// export const googleFn = async (navigateTo) => {
//   // const googleLogin = document.querySelector('#loginGoogle');
//   // console.log(googleLogin);

//   const provider = new GoogleAuthProvider();

//   try {
//     const credentials = await signInWithPopup(auth, provider);
//     console.log(credentials);
//     navigateTo('/posts');
//     alert('Bienvenid@ ' + credentials.user.displayName);
//   } catch (error) {
//     console.log(error);
//   }
// };
