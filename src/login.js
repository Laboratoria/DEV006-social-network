import { createEmail } from './firebase/config';

function login(navigateTo) {
  const ctnImage = document.createElement('div');
  const logo = document.createElement('img');
  const section = document.createElement('section');

  // const title = document.createElement('h2');

  const buttonReturn = document.createElement('button');
  const form = document.createElement('form');
  const textEmail = document.createElement('p');
  const inputEmail = document.createElement('input');
  const textPassword = document.createElement('p');
  const inputPass = document.createElement('input');
  logo.src = './img/logo.png';
  logo.alt = 'web-logo';
  ctnImage.appendChild(logo);
  // const buttonLogin = document.createElement('button');
  inputEmail.setAttribute('id', 'inputE-style');
  inputPass.setAttribute('id', 'inputPL-style');
  form.setAttribute('id', 'form-style');
  section.setAttribute('id', 'section2-style');
  buttonReturn.setAttribute('id', 'buttonR-style');
  textEmail.setAttribute('id', 'textEmail-style');
  textPassword.setAttribute('id', 'textP-style');
  textEmail.textContent = 'INGRESA TU CORREO';
  textPassword.textContent = 'CREA UNA CONTRASEÑA';

  // title.textContent = 'Login';
  // buttonLogin.textContent = 'go';

  // una constante para tomar el input email y contraseña

  buttonReturn.textContent = 'CREAR';
  buttonReturn.addEventListener('click', () => {
    // capturar valor de input contraseña y usuario
    const email = inputEmail.value;
    const pass = inputPass.value;
    createEmail(email, pass)
      .then((userCredential) => {
        inputEmail.value = '';
        inputPass.value = '';
        // Signed in
        // const user = userCredential.user;
        return userCredential;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);
      });
    navigateTo('/');
  });

  form.append(textEmail, inputEmail, textPassword, inputPass);
  section.append(ctnImage, form, buttonReturn);

  return section;
}

export default login;
