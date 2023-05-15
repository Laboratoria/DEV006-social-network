// import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, create } from '../lib/firebase.js';

function createAcount(navigateTo) {
  const section = document.createElement('section');
  const logo = document.createElement('img');
  const title = document.createElement('h1');
  const caption = document.createElement('h2');
  const form = document.createElement('form');
  const inputName = document.createElement('input');
  const inputEmail = document.createElement('input');
  const paragraphEmail = document.createElement('p');
  const inputPass = document.createElement('input');
  const inputConfPass = document.createElement('input');
  const buttonSingUp = document.createElement('button');
  const buttonGoogle = document.createElement('button');
  const buttonReturn = document.createElement('button');
  logo.src = './img/logoSinfondo.png';
  logo.classList.add('logoimg');

  title.textContent = 'Welcome to Foodiegram';
  title.classList.add('title');

  caption.textContent = 'Create Acount';
  caption.classList.add('caption');

  inputName.placeholder = 'Name';
  inputName.classList.add('name');
  inputEmail.placeholder = 'Email';
  inputEmail.classList.add('email2');
  inputEmail.type = 'email';
  inputEmail.name = 'email';
  inputPass.placeholder = 'Password';
  inputPass.classList.add('password2');
  inputPass.type = 'password';
  inputConfPass.placeholder = 'Confirm password';
  inputConfPass.classList.add('confirmPass');

  buttonSingUp.textContent = 'Sing Up';
  buttonSingUp.classList.add('loginCreateAcount');
  buttonSingUp.addEventListener('submit', () => {
    navigateTo('/wall');
  });

  buttonGoogle.textContent = 'continue with GOOGLE';
  buttonGoogle.classList.add('google');
  buttonGoogle.addEventListener('click', () => {
    navigateTo('/wall');
  });

  buttonReturn.textContent = '.';
  buttonReturn.classList.add('return');
  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });

  inputEmail.addEventListener('input', (e) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(e.target.value)) {
      console.log('pasa la validación');
      paragraphEmail.textContent = '';
    } else {
      paragraph.textContent = 'Email is not valid';
    }
  });

  buttonSingUp.addEventListener('click', async (e) => {
    e.preventDefault();
    const email = inputEmail.value;
    const pass = inputPass.value;
    const confPass = inputConfPass.value;

    form.appendChild(paragraph);
    if (pass.length < 6) {
      paragraph.textContent = 'The password must be at least 6 characters';
      return;
    }
    if (pass !== confPass) {
      paragraph.textContent = 'Passwords do not match';
      return;
    }
    try {
      const userCredentials = await create(
        auth,
        email,
        pass,
      );
      console.log(userCredentials);
      navigateTo('/wall');
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Email already in use');
      } else if (error.code === 'auth/invalid-email') {
        alert('Invalid email');
      } else if (error.code === 'auth/weak-password') {
        alert('Password is too weak');
      }
      paragraphEmail.textContent = 'Email no es valido';
    }
  });

  form.append(
    inputName,
    inputEmail,
    paragraphEmail,
    inputPass,
    inputConfPass,
    buttonSingUp,
    buttonGoogle,
    buttonReturn,
    paragraph,
  );

  section.append(logo, title, caption, form);
  return section;
}

export default createAcount;
