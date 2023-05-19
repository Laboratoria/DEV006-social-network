import { signUpFn } from '../app/signupForm';
import { googleSignInFn } from '../app/googleLogin';
import { githubSignInFn } from '../app/githubLogin';

function register(navigateTo) {
  const section = document.createElement('section');
  const containerRegister = document.createElement('div');
  const containerTitle = document.createElement('div');
  const containerRegisterWith = document.createElement('div');
  const title = document.createElement('h2');
  const imgReturn = document.createElement('img');
  const imgPaw = document.createElement('img');
  const form = document.createElement('form');
  const nameInput = document.createElement('input');
  const emailInput = document.createElement('input');
  const passwordInput = document.createElement('input');
  const confirmPasswordInput = document.createElement('input');
  const btnSignUp = document.createElement('button');
  const registerWith = document.createElement('p');
  const registerGoogle = document.createElement('img');
  const registerGit = document.createElement('img');

  containerRegister.classList.add('container-register');
  containerTitle.classList.add('container-title-register');
  containerRegisterWith.classList.add('container-register-with');
  title.classList.add('title-register');
  imgReturn.classList.add('img-return-register');
  imgPaw.classList.add('img-paw-register');
  form.classList.add('form-register');
  nameInput.classList.add('name-input-register');
  emailInput.classList.add('email-input-register');
  passwordInput.classList.add('password-input-register');
  confirmPasswordInput.classList.add('confirm-password-input-register');
  btnSignUp.classList.add('btn-sign-up-register');
  registerWith.classList.add('register-with-register');
  registerGoogle.classList.add('register-google-register');
  registerGit.classList.add('register-git-register');

  nameInput.id = 'name-input';
  form.id = 'signup-form';
  emailInput.id = 'signup-email';
  passwordInput.id = 'signup-password';
  confirmPasswordInput.id = 'signup-confirm-password';

  btnSignUp.type = 'submit';

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    signUpFn(navigateTo);
  });

  title.textContent = 'Estamos Perdid@s!!!!';
  btnSignUp.textContent = 'Registrarme';
  registerWith.textContent = 'O registrate con:';

  nameInput.placeholder = 'Nombre';
  nameInput.setAttribute('required', 'true');
  emailInput.placeholder = 'Email';
  emailInput.type = 'email';
  emailInput.setAttribute('required', 'true');
  passwordInput.placeholder = 'Contraseña:';
  passwordInput.type = 'password';
  passwordInput.setAttribute('required', 'true');
  confirmPasswordInput.placeholder = 'Confirma tu contraseña:';
  confirmPasswordInput.type = 'password';
  confirmPasswordInput.setAttribute('required', 'true');

  imgPaw.src = 'img/huellaIcono.png';
  imgPaw.alt = 'huella';

  imgReturn.src = 'img/back.png';
  imgReturn.alt = 'Regresar';
  imgReturn.addEventListener('click', () => {
    navigateTo('/');
  });

  registerGoogle.src = ('img/google.webp');
  registerGoogle.alt = 'Imagen google';
  registerGoogle.addEventListener('click', () => {
    googleSignInFn(navigateTo);
  });

  registerGit.src = ('img/github.png');
  registerGit.alt = 'Imagen github';
  registerGit.addEventListener('click', () => {
    githubSignInFn(navigateTo);
  });

  containerTitle.append(title, imgPaw);
  form.append(nameInput, emailInput, passwordInput, confirmPasswordInput, btnSignUp);
  containerRegisterWith.append(registerGoogle, registerGit);
  containerRegister.append(imgReturn, containerTitle, form, registerWith, containerRegisterWith);
  section.appendChild(containerRegister);

  return section;
}

export default register;
