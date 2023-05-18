import { signInWithEmailAndPassword } from 'firebase/auth';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../lib/firebase';

function login(navigateTo) {
  const section = document.createElement('section');
  const logo = document.createElement('img');
  const title = document.createElement('h1');
  const caption = document.createElement('h2');
  const form = document.createElement('form');
  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input');
  const buttonSingin = document.createElement('button');
  const paragraphGoogle = document.createElement('p');
  const buttonGoogle = document.createElement('button');
  const paragraphHaveAcount = document.createElement('p');
  const paragraphRegister = document.createElement('p');
  const paragraph = document.createElement('p');
  paragraph.classList.add('paragraph');
  // const paragraphEmail = document.createElement('p');

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

  paragraphGoogle.textContent = 'Or Login using an social media';
  paragraphGoogle.classList.add('paragraphGoogle');

  paragraphHaveAcount.textContent = 'Don´t have acount?';
  paragraphHaveAcount.classList.add('haveAcount');

  paragraphRegister.textContent = 'Register now';
  paragraphRegister.classList.add('register');
  paragraphRegister.setAttribute('id', 'registerNow');
  paragraphRegister.setAttribute("href", '/createAcount')
  paragraphRegister.addEventListener('click', () => {
      navigateTo('/createAcount');
  });

  
  buttonSingin.textContent = 'SING IN';
  buttonSingin.classList.add('login');
  // buttonLogin.addEventListener('click', () => {
  //   navigateTo('/wall');
  // });
  


  inputEmail.addEventListener('input', (e) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(e.target.value)) {
      console.log('pasa la validación');
      paragraph.textContent = '';
    } else {
      paragraph.textContent = 'Email is not valid';
    }
  });

  inputPass.addEventListener('input', (e) => {
    const passRegex = /^.{6,20}$/;
    if (passRegex.test(e.target.value)) {
      console.log('pasa el pass');
      paragraph.textContent = '';
    } else {
      paragraph.textContent = 'Pass is not valid';
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
    inputEmail,
    inputPass,
    buttonSingin,
    buttonGoogle,
    paragraph,
    paragraphGoogle,
    paragraphHaveAcount,
    paragraphRegister
    );
  section.append(logo, title, caption, form);
  return section;
}

export default login;
