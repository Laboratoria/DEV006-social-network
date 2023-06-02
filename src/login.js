import {auth} from "./firebase/config"

function login(navigateTo) {
  const ctnImage =document.createElement('div');
  const logo = document.createElement('img');
  const section = document.createElement('section');
  const title = document.createElement('h2');
  const buttonReturn = document.createElement('button');
  const form = document.createElement('form');
  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input');
  logo.src = './img/logo.png';
  logo.alt = 'web-logo';
  ctnImage.appendChild(logo)
  // const buttonLogin = document.createElement('button');
  inputEmail.setAttribute("id", "inputE-style");
  inputPass.setAttribute("id", "inputP-style");
  form.setAttribute("id", "form-style");
  section.setAttribute("id", "section2-style")
  inputEmail.placeholder = 'Write email';
  inputPass.placeholder = 'pass';

  title.textContent = 'Login';
  // buttonLogin.textContent = 'go';

  buttonReturn.textContent = 'crear';
  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });

  form.append(inputEmail, inputPass);
  section.append(ctnImage, title, form, buttonReturn);

  return section;
}

export default login;
