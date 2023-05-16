// import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, create } from '../lib/firebase.js';

function createAcount(navigateTo) {
  const section = document.createElement('section');
  const logo = document.createElement('img');
  const title = document.createElement('h1');
  const caption = document.createElement('h2');
  const form = document.createElement('form');
  const paragraph = document.createElement('p');
  const inputName = document.createElement('input');
  const inputEmail = document.createElement('input');
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
  inputPass.setAttribute('id', 'pass1');

  inputConfPass.placeholder = 'Confirm password';
  inputConfPass.classList.add('confirmPass');
  inputConfPass.type = 'password';
  inputConfPass.setAttribute('id', 'pass2');

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
      console.log(e.target.value)
      console.log('pasa la validación');
      paragraph.textContent = '';
    } else {
      paragraph.textContent = 'Email is not valid';
    }
  });

  inputPass.addEventListener('input', (e) => {
    const passRegex = /^.{6,12}$/;
    if (passRegex.test(e.target.value)) {
      console.log('pasa el pass');
      paragraph.textContent = '';
    } else {
      paragraph.textContent = 'Pass is not valid';
    }
  });

  inputConfPass.addEventListener('input', (e) => {
    function verificarClave() {
      const pass1 = document.getElementById('pass1');
      const pass2 = document.getElementById('pass2');
      if(pass1.value != pass2.value) {
        paragraph.textContent = 'Pass not mach';
        return false
      } else {
        paragraph.textContent = ''
        return true
      }
    } verificarClave()
  });

  buttonSingUp.addEventListener('click', async (e) => {
    e.preventDefault();
    const email = inputEmail.value;
    const pass = inputPass.value;
    const confPass = inputConfPass.value;

  //   form.appendChild(paragraph);
  //   if (pass.length < 6) {
  //     paragraph.textContent = 'The password must be at least 6 characters';
  //     return;
  //   }
  //   if (pass !== confPass) {
  //     paragraph.textContent = 'Passwords do not match';
  //     return;
  //   }
  //   if (pass == confPass) {
  //     paragraph.textContent = 'Passwords match';
  //     return;
  //   }
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
    }
  });

  form.append(
    inputName,
    inputEmail,
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
