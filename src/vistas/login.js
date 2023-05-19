// file login.js
import { loginUser, signInWithGoogle } from '../lib/auth.js';

function login(navigateTo) {
  const section = document.createElement('section');
  const sectionHeader = document.createElement('section');
  const sectionForm = document.createElement('section');
  const emailLogin = document.createElement('h4');
  const passwordLogin = document.createElement('h4');
  const form = document.createElement('form');
  const inputEmail = document.createElement('input');
  const inputPassword = document.createElement('input');
  const buttonEnter = document.createElement('button');
  const buttonReturn = document.createElement('img');
  const header = document.createElement('div');
  const logo = document.createElement('img');
  const showPasswordLogin = document.createElement('img');
  const buttonGoogleLogin = document.createElement('button');
  const errorPasswordLogin = document.createElement('span');

  inputEmail.placeholder = 'example@gmail.com';
  inputPassword.placeholder = '***********';

  // agregar texto a los botones//
  buttonEnter.textContent = 'Ingresar';
  emailLogin.textContent = 'Correo electrónico';
  passwordLogin.textContent = 'Contraseña';
  buttonGoogleLogin.textContent = 'Iniciar sesión con Google';

  // evento del click para enviarlo al ulr//
  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });

  // Loguearse  con Google
  buttonGoogleLogin.addEventListener('click', (e) => {
    e.preventDefault();
    signInWithGoogle();
  });
  // Loguearse
  buttonEnter.addEventListener('click', (e) => {
    e.preventDefault();
    const email = inputEmail.value;
    const password = inputPassword.value;
    loginUser(email, password)
      .then(() => {
        console.log('loggedin');
      })
      .catch((error) => {
        console.log(error);
        errorPasswordLogin.innerHTML = error;
      });
  });
  // Ocultar y mostrar contraseña//
  showPasswordLogin.addEventListener('click', (e) => {
    e.preventDefault();
    if (inputPassword.type === 'password') {
      inputPassword.type = 'text';
      showPasswordLogin.src = 'images/ojonoOculto.png';
    } else {
      inputPassword.type = 'password';
      showPasswordLogin.src = 'images/ojoOculto.png';
    }
  });

  // agregar clases//
  section.classList.add('sectionLogin');
  header.classList.add('header');
  logo.classList.add('logo');
  sectionHeader.classList.add('sectionHeader');
  buttonReturn.classList.add('buttonReturn');
  form.classList.add('form');
  buttonEnter.classList.add('buttonEnter');
  buttonGoogleLogin.classList.add('buttonGoogleLogin');
  errorPasswordLogin.classList.add('errors');

  // agregar atributos//
  logo.setAttribute('src', 'images/logo.png');
  buttonReturn.setAttribute('src', 'images/arrow.png');
  inputEmail.setAttribute.id = 'inputEmail';
  inputPassword.setAttribute.id = 'inputPassword';
  inputPassword.setAttribute('type', 'password');
  showPasswordLogin.setAttribute('id', 'showPasswordLogin');
  showPasswordLogin.setAttribute('src', 'images/ojoOculto.png');
  errorPasswordLogin.setAttribute('id', 'errorPasswordLogin');

  // agrupando las secciones//
  sectionHeader.append(header, logo);
  form.append(
    emailLogin,
    inputEmail,
    passwordLogin,
    inputPassword,
    showPasswordLogin,
    errorPasswordLogin,
  );
  sectionForm.append(form, buttonEnter, buttonGoogleLogin);
  section.append(sectionHeader, buttonReturn, sectionForm);

  return section;
}
export default login;
