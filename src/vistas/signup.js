import { registerUser } from '../lib/auth.js';

function signup(navigateTo) {
  // creación de elementos//
  const section = document.createElement('section');
  const sectionForm = document.createElement('section');
  const sectionHeader = document.createElement('section');
  const UserSignup = document.createElement('h4');
  const emailSignup = document.createElement('h4');
  const passwordSignup = document.createElement('h4');
  const form = document.createElement('form');
  const inputUser = document.createElement('input');
  const inputEmail = document.createElement('input');
  const inputPassword = document.createElement('input');
  const passwordBox = document.createElement('div');
  const buttonEnterSignup = document.createElement('button');
  const buttonReturnSignup = document.createElement('img');
  const showPassword = document.createElement('img');
  const logo = document.createElement('img');
  const header = document.createElement('div');
  const errorPassword = document.createElement('span');
  const errorEmail = document.createElement('span');

  inputEmail.placeholder = 'example@gmail.com';
  inputPassword.placeholder = '***********';

  // agregar atributos//
  logo.setAttribute('src', 'images/logo.png');
  errorPassword.setAttribute('id', 'errorPassword');
  errorEmail.setAttribute('id', 'errorEmail');
  emailSignup.textContent = 'Correo electrónico';
  passwordSignup.textContent = 'Contraseña';
  UserSignup.textContent = 'Nombre de Usuario';
  
  buttonReturnSignup.setAttribute('src', 'images/arrow.png');
  inputEmail.setAttribute('id', 'inputEmail');
  inputPassword.setAttribute('id', 'inputPassword');
  buttonEnterSignup.textContent = 'Registrarte';
  inputPassword.setAttribute('type', 'password');
  inputPassword.setAttribute('src', 'images/ojoOculto.png');
  showPassword.setAttribute('src', 'images/ojoOculto.png');
  passwordBox.setAttribute('id', 'passwordBox');

  // Registro de usuario//
  buttonEnterSignup.addEventListener('click', (e) => {
    e.preventDefault();
    const email = inputEmail.value;
    const password = inputPassword.value;
    errorEmail.textContent = '';
    errorPassword.textContent = '';
    registerUser(email, password)
      .then((userResult) => {
        console.log('signup', userResult);
      })
      .catch((error) => {
        console.log(error);
        errorEmail.innerHTML = error;
        errorPassword.innerHTML = error;
        //const codeError = error.code;
        //errorMessages(codeError, errorEmail, errorPassword);
      });
  });

  buttonReturnSignup.addEventListener('click', () => {
    navigateTo('/');
  });

  // // agregar clases//

  header.classList.add('header');
  logo.classList.add('logo');
  sectionForm.classList.add('sectionFormSignup');
  sectionHeader.classList.add('sectionHeaderSignup');
  form.classList.add('formSignup');
  buttonReturnSignup.classList.add('buttonReturnSignup');
  UserSignup.classList.add('subTitlesSignup');
  emailSignup.classList.add('subTitlesSignup');
  passwordSignup.classList.add('subTitlesSignup');
  buttonEnterSignup.classList.add('buttonEnterSignup');
  errorPassword.classList.add('errors');
  errorEmail.classList.add('errors');
  showPassword.classList.add('showPassword');

  // agrupar secciones//
  passwordBox.append(inputPassword, showPassword);
  form.append(
    UserSignup,
    inputUser,
    emailSignup,
    inputEmail,
    errorEmail,
    passwordSignup,
    passwordBox,
    errorPassword,
    buttonEnterSignup,
  );
  sectionForm.append(form);
  sectionHeader.append(header, logo);
  section.append(sectionHeader, buttonReturnSignup, sectionForm, form);

  return section;
}
export default signup;
