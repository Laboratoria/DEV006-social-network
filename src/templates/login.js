import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../lib/firebase';

function login(navigateTo) {
  const section = document.createElement('section');
  const logo = document.createElement('img');
  const title = document.createElement('h1');
  const caption = document.createElement('h2');
  const form = document.createElement('form');
  const inputEmail = document.createElement('input');
  // const inputErrorEmail = document.createElement('p');
  const inputPass = document.createElement('input');
  const buttonLogin = document.createElement('button');
  const buttonGoogle = document.createElement('button');
  const buttonReturn = document.createElement('button');
  const paragraph = document.createElement('p');
  // const paragraphEmail = document.createElement('p');

  logo.src = './img/logoSinfondo.png';
  logo.classList.add('logoimg');

  title.textContent = 'Welcome to Foodiegram';
  title.classList.add('title');

  caption.textContent = 'Login';
  caption.classList.add('caption');

  inputEmail.placeholder = 'Email';
  inputEmail.classList.add('email');
  inputEmail.type = 'email';

  inputPass.placeholder = 'Password';
  inputPass.classList.add('password');
  inputPass.type = 'password';

  buttonGoogle.textContent = 'continue with GOOGLE';
  buttonGoogle.classList.add('google');
  buttonGoogle.addEventListener('click', () => {
    navigateTo('/wall');
  });
  buttonLogin.textContent = 'Login';
  buttonLogin.classList.add('login');
  buttonLogin.addEventListener('click', () => {
    navigateTo('/wall');
  });
  buttonReturn.textContent = '.';
  buttonReturn.classList.add('return');
  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });

  buttonLogin.addEventListener('click', async (e) => {
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

  form.append(paragraph, inputEmail, inputPass, buttonLogin, buttonGoogle, buttonReturn);
  section.append(logo, title, caption, form);
  return section;
}

export default login;
