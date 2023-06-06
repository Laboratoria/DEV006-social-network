/* eslint-disable no-alert */
/* eslint-disable no-console */
// eslint-disable-next-line import/no-duplicates
import { signInWithEmailAndPassword } from 'firebase/auth';
// eslint-disable-next-line import/no-duplicates
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../lib/firebase';

function login(navigateTo) {
  const section = document.createElement('section');
  const logo = document.createElement('img');
  const logoGoogle = document.createElement('img');
  const title = document.createElement('h1');
  const backgroundLogin = document.createElement('div');
  const form = document.createElement('div');
  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input');
  const buttonSingin = document.createElement('button');
  const paragraphGoogle = document.createElement('p');
  const buttonGoogle = document.createElement('button');
  const paragraphHaveAcount = document.createElement('p');
  const paragraphRegister = document.createElement('p');
  const alertEmail = document.createElement('p');
  const alertPass = document.createElement('p');

  section.classList.add('sectionLogin');

  alertEmail.classList.add('alertEmail');
  alertPass.classList.add('alertPass');
  form.classList.add('divLogin')

  backgroundLogin.classList.add('backgroundLogin');

  logo.src = './img/logoSinfondo.png';
  logo.classList.add('logoimg');

  title.textContent = 'Welcome to Foodiegram';
  title.classList.add('title');

  inputEmail.placeholder = 'Email';
  inputEmail.classList.add('emailSingIn');
  inputEmail.type = 'email';

  inputPass.placeholder = 'Password';
  inputPass.classList.add('passwordSingIn');
  inputPass.type = 'password';
  inputPass.autocomplete = 'current-password';

  paragraphGoogle.textContent = 'Or Login using a social media';
  paragraphGoogle.classList.add('paragraphGoogle');

  paragraphHaveAcount.textContent = 'Dont have acount?';
  paragraphHaveAcount.classList.add('haveAcount');

  paragraphRegister.textContent = 'Register now';
  paragraphRegister.classList.add('register');
  paragraphRegister.setAttribute('id', 'registerNow');
  paragraphRegister.setAttribute('href', '/createAcount');
  paragraphRegister.addEventListener('click', () => {
    navigateTo('/createAcount');
  });
  buttonSingin.textContent = 'SIGN IN';
  buttonSingin.classList.add('singIn');

  inputEmail.addEventListener('input', (e) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(e.target.value)) {
      console.log('pasa la validación');
      alertEmail.textContent = '';
    } else {
      alertEmail.textContent = 'Email is not valid';
    }
  });

  inputPass.addEventListener('input', (e) => {
    const passRegex = /^.{6,20}$/;
    if (passRegex.test(e.target.value)) {
      console.log('pasa el pass');
      alertPass.textContent = '';
    } else {
      alertPass.textContent = 'Pass is not valid';
    }
  });

  buttonSingin.addEventListener('click', async (e) => {
    e.preventDefault();
    const email = inputEmail.value;
    const pass = inputPass.value;
    try {
      const credentials = await signInWithEmailAndPassword(auth, email, pass);
      console.log(credentials, 'valor de los campos');
      navigateTo('/wall');
    } catch (error) {
      if (error.code === 'auth/wrong-password') {
        alert('Contraseña incorrecta');
      } else if (error.code === 'auth/user-not-found') {
        alert('Usuario no encontrado');
      } else {
        alert('Error al iniciar sesión');
      }
    }
  });

  buttonGoogle.textContent = 'SING IN WITH GOOGLE';
  buttonGoogle.classList.add('buttonGoogle');
  buttonGoogle.setAttribute('id', 'buttonGoogle');
  // logoGoogle.src = './img/logogoogle.png';
  // logoGoogle.classList.add('logoGoogle');

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

  form.append(
    title,
    inputEmail,
    alertEmail,
    inputPass,
    alertPass,
    buttonSingin,
    buttonGoogle,
    paragraphGoogle,
    paragraphHaveAcount,
    paragraphRegister,
    // logoGoogle,
  );
  section.append(logo, form, backgroundLogin);
  return section;
}

export default login;
