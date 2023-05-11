// import { auth } from './lib/configFireBase.js';
import { auth } from './lib/configFireBase.js';
import { createUserWithEmailAndPassword } from 'firebase/auth';


function signup(navigateTo) {
  // creación//
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

  const logo = document.createElement('img');
  const header = document.createElement('div');

  inputEmail.placeholder = 'example@gmail.com';
  inputPassword.placeholder = '***********';

  // agregar atributos//
  logo.setAttribute('src', 'images/logo.png');
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
  buttonReturnSignup.addEventListener('click', () => {
    navigateTo('/');
  });
  buttonEnterSignup.addEventListener('click', (e) => {
    e.preventDefault();
    const email = inputEmail.value;
    const password = inputPassword.value;
    console.log(email, password);

    // const signValue= (email, password) =>createUserWithEmailAndPassword(auth, email, password);

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log('signup', userCredential);
      })
      .catch((error) => {
        console.error(error);
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

  // agrupar secciones//
  // eslint-disable-next-line max-len

  form.append(
    UserSignup,
    inputUser,
    emailSignup,
    inputEmail,
    passwordSignup,
    inputPassword,
    buttonEnterSignup,
    question,
    checkboxYes,
    checkboxNo,
    yes,
    no,
  );
  sectionForm.append(form);
  sectionHeader.append(header, logo);
  section.append(sectionHeader, buttonReturnSignup, sectionForm, form);

  return section;
}
export default signup;
