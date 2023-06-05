import {createEmail} from "./firebase/config"

function login(navigateTo) {
  const ctnImage =document.createElement('div');
  const logo = document.createElement('img');
  const section = document.createElement('section');
  //const title = document.createElement('h2');
  const buttonReturn = document.createElement('button');
  const form = document.createElement('form');
  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input');
  logo.src = './img/logo.png';
  logo.alt = 'web-logo';
  ctnImage.appendChild(logo)
  // const buttonLogin = document.createElement('button');
  inputEmail.setAttribute("id", "inputE-style");
  inputPass.setAttribute("id", "inputPL-style");
  form.setAttribute("id", "form-style");
  section.setAttribute("id", "section2-style");
  buttonReturn.setAttribute("id", "buttonR-style");
  inputEmail.placeholder = 'Write email';
  inputPass.placeholder = 'pass';

  //title.textContent = 'Login';
  // buttonLogin.textContent = 'go';

  buttonReturn.textContent = 'CREAR';
  buttonReturn.addEventListener('click', () => {
    createEmail("odettdpo@gmail.com", "12345")
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
    navigateTo('/');
  });

  form.append(inputEmail, inputPass);
  section.append(ctnImage, form, buttonReturn);

  return section;
}

export default login;

