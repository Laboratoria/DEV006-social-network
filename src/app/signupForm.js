/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from './firebase.js';
// // eslint-disable-next-line no-unused-vars

export const signUpFn = async (navigateTo) => {
  const signupForm = document.querySelector('#signup-form');

  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;
  const confirmPassword = signupForm['signup-confirm-password'].value;
  const name = signupForm['name-input'].value;

  if (password !== confirmPassword) {
    alert('Las contraseñas no coinciden');
    return;
  }

  console.log(email, password, confirmPassword);
  console.log(signupForm);
  try {
    const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
    const userNamePost = await updateProfile(userCredentials.user, { displayName: name });

    console.log(userCredentials);
    console.log(userNamePost);
    navigateTo('/login');
  } catch (error) {
    if (error.code === 'auth/invalid-email') alert('Por favor ingresa un email válido');

    if (error.code === 'auth/weak-password') alert('Ingresa una contraseña válida');

    if (error.code === 'auth/email-already-in-use') alert('El email ya se encuentra asosiado a una cuenta');
  }
};
