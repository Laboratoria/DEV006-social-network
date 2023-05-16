/* eslint-disable no-console */
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../lib/firebase.js';

function home(navigateTo) {
  const section = document.createElement('section');
  const form = document.createElement('form');
  const buttonLogin = document.createElement('button');
  const buttonCreate = document.createElement('button');
  const buttonGoogle = document.createElement('button');
  const logo = document.createElement('img');

  logo.src = './img/logoSinfondo.png';
  logo.classList.add('logoimg');

  buttonLogin.textContent = 'Login';
  buttonLogin.classList.add('login');
  buttonLogin.addEventListener('click', () => {
    navigateTo('/login');
  });

  buttonCreate.textContent = 'Create Acount';
  buttonCreate.classList.add('createAcount');
  buttonCreate.addEventListener('click', () => {
    navigateTo('/loginCreate');
  });

  buttonGoogle.textContent = 'Continue with GOOGLE';
  buttonGoogle.classList.add('google');

  buttonGoogle.addEventListener('click', async (e) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();
    try {
      const credential = await signInWithPopup(auth, provider);
      console.log(credential);
      navigateTo('/wall');
    } catch (error) {
      console.log(error, 'pasa error');
    }
  });

  form.append(buttonLogin, buttonCreate, buttonGoogle);
  section.append(logo, form);
  return section;
}

export default home;
