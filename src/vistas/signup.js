import { registerUser } from '../lib/auth.js';
import { errorMessages } from '../lib/error.js';

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

  const question = document.createElement('h5');
  const yes = document.createElement('h5');
  const no = document.createElement('h5');
  const checkboxYes = document.createElement('input');
  const checkboxNo = document.createElement('input');
  const buttonEnterSignup = document.createElement('button');
  const buttonReturnSignup = document.createElement('img');
  const showPassword = document.createElement('img');
  const logo = document.createElement('img');
  const header = document.createElement('div');
  const errorPassword = document.createElement('h2');
  const errorEmail = document.createElement('h2');

  inputEmail.placeholder = 'example@gmail.com';
  inputPassword.placeholder = '***********';

  // agregar atributos//
  logo.setAttribute('src', 'images/logo.png');
  errorPassword.setAttribute('id', 'errorPassword');
  errorEmail.setAttribute('id', 'errorEmail');
  emailSignup.textContent = 'Correo electrónico';
  passwordSignup.textContent = 'Contraseña';
  UserSignup.textContent = 'Nombre de Usuario';
  question.textContent = 'Esta aplicación esta pensada para personas que se identifican como mujeres. Por favor responde: ¿Te identificas como mujer?  ';
  checkboxYes.type = 'radio';
  checkboxNo.type = 'radio';
  checkboxYes.id = 'Yes';
  checkboxNo.id = 'No';
  checkboxYes.name = 'checkbox';
  checkboxNo.name = 'checkbox';
  yes.textContent = 'Si';
  no.textContent = 'No';
  yes.id = 'labelYes';
  no.id = 'labelNo';
  buttonReturnSignup.setAttribute('src', 'images/arrow.png');
  inputEmail.setAttribute('id', 'inputEmail');
  inputPassword.setAttribute('id', 'inputPassword');
  buttonEnterSignup.textContent = 'Registrarte';
  inputPassword.setAttribute('type', 'password');
  inputPassword.setAttribute('src', 'images/ojoOculto.png');
  showPassword.setAttribute('id', 'showPasswordLogin');
  showPassword.setAttribute('src', 'images/ojoOculto.png');

  buttonReturnSignup.addEventListener('click', () => {
    navigateTo('/');
  });

  checkboxNo.addEventListener('click', () => {
    navigateTo('/sorry');
  });

  // Registro de usuario//
  buttonEnterSignup.addEventListener('click', (e) => {
    e.preventDefault();
    const email = inputEmail.value;
    const password = inputPassword.value;
    errorEmail.textContent = '';
    errorPassword.textContent = '';
    registerUser(email, password)
      .then(() => {
        console.log('signup');
      })
      .catch((error) => {
        const codeError = error.code;
        errorMessages(codeError, errorEmail, errorPassword);
      });
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
  question.classList.add('question');
  errorPassword.classList.add('errors');
  errorEmail.classList.add('errors');

  // agrupar secciones//
  form.append(
    UserSignup,
    inputUser,
    emailSignup,
    inputEmail,
    errorEmail,
    passwordSignup,
    inputPassword,
    errorPassword,
    buttonEnterSignup,
    question,
    checkboxYes,
    checkboxNo,
    yes,
    no,
    showPassword,
  );
  sectionForm.append(form);
  sectionHeader.append(header, logo);
  section.append(sectionHeader, buttonReturnSignup, sectionForm, form);

  return section;
}
export default signup;
