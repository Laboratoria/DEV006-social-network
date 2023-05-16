/* eslint-disable import/no-duplicates */
/* eslint-disable import/no-unresolved */
import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js';
import { signOut } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js';
import { auth } from './firebase.js';

onAuthStateChanged(auth, async (user) => {
  console.log(user);
});
export const logoutFn = async (navigateTo) => {
  await signOut(auth);
  console.log('el usuario cerro sesion');
  navigateTo('/login');
};
