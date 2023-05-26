/* eslint-disable no-console */
/* eslint-disable import/no-duplicates */
/* eslint-disable import/no-unresolved */
import { onAuthStateChanged } from 'firebase/auth';
import { signOut } from 'firebase/auth';
import { auth } from './firebase.js';

onAuthStateChanged(auth, async (user) => {
  console.log(user);
});
export const logoutFn = async (navigateTo) => {
  await signOut(auth);
  console.log('el usuario cerro sesion');
  navigateTo('/login');
};
