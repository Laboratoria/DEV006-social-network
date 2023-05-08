// file login.js
function login(navigateTo) {
  const section = document.createElement('section');
  const emailLogin = document.createElement('h4');
  const passwordLogin = document.createElement('h4');
  const form = document.createElement('form');
  const inputEmail = document.createElement('input');
  const inputPassword = document.createElement('input');
  const buttonEnter = document.createElement('button');
  const buttonReturn = document.createElement('button');

  inputEmail.placeholder = 'example@gmail.com';
  inputPassword.placeholder = '***********';

  buttonEnter.textContent = 'Ingresar';
  buttonReturn.textContent = 'X';
  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });

  form.append(inputEmail, inputPassword, buttonEnter, emailLogin, passwordLogin);
  section.append(form, buttonReturn);

  return section;
}
export default login;
