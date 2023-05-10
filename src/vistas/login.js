// file login.js
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

  inputEmail.placeholder = 'example@gmail.com';
  inputPassword.placeholder = '***********';

  // agregar texto a los botones//
  buttonEnter.textContent = 'Ingresar';
  emailLogin.textContent = 'Correo electrónico';
  passwordLogin.textContent = 'Contraseña';

  // evento del click para enviarlo al ulr//
  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });

  // agregar clases//
  section.classList.add('sectionLogin');
  header.classList.add('header');
  logo.classList.add('logo');
  sectionHeader.classList.add('sectionHeader');
  buttonReturn.classList.add('buttonReturn');
  form.classList.add('form');
  buttonEnter.classList.add('buttonEnter');

  // agregar atributos//
  logo.setAttribute('src', 'images/logo.png');
  buttonReturn.setAttribute('src', 'images/arrow.png');

  // agrupando las secciones//
  sectionHeader.append(header, logo);
  form.append(emailLogin, inputEmail, passwordLogin, inputPassword, buttonEnter);
  sectionForm.append(form);
  section.append(sectionHeader, buttonReturn, sectionForm);

  return section;
}
export default login;
