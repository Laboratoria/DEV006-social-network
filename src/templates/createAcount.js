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
  inputEmail.name = 'email';
  inputPass.placeholder = 'Password';
  inputPass.classList.add('password2');
  inputConfPass.placeholder = 'Confirm password';
  inputConfPass.classList.add('confirmPass');

  buttonSingUp.textContent = 'Sing Up';
  buttonSingUp.classList.add('login2');
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
      paragraphEmail.textContent = 'Email no es valido';
    }
  });
  // autenticar login
  // form.addEventListener('submit', async (e) => {
  //   e.preventDefault();
  //   // const name = inputName.value;
  //   const email = inputEmail.value;
  //   const pass = inputPass.value;
  //   console.log('aja', email, pass);
  //   // const confirmpass = inputConfPass.value;

  //   function mensaje() {
  //     const campo = document.forms.form.elements.email;
  //     console.log(campo, 'emailvalue');
  //     // if (campo.checkValidity() && campo.validity.patternMismatch) {
  //     //   campo.setCustomValidity('NO paso');
  //     // }
  //   }
  //   console.log(mensaje());
  //   try {
  //     const userCredentials = await create(
  //       auth,
  //       email,
  //       pass,
  //     );
  //     console.log(userCredentials);
  //   } catch (error) {
  //     if (error.code === 'auth/email-already-in-use') {
  //       // alert('Email already in use');
  //       // const formulario1 = document.forms.form;
  //       mensaje(formulario1);
  //     } else if (error.code === 'auth/invalid-email') {
  //       alert('Invalid email');
  //     } else if (error.code === 'auth/weak-password') {
  //       alert('Password is too weak');
  //     }
  //   }
  // });

  form.append(
    inputName,
    inputEmail,
    paragraphEmail,
    inputPass,
    inputConfPass,
    buttonSingUp,
    buttonGoogle,
    buttonReturn,
  );

  section.append(logo, title, caption, form);
  return section;
}

export default createAcount;
