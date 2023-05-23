import { registerUser, googleLogin } from '../lib/firebaseAuth.js';

const signup = (navigateTo) => {
  const signUpSection = document.createElement('section');
  signUpSection.classList.add('signUpSection');

  const logoArticle = document.createElement('article');
  logoArticle.classList.add('articleLogoSignUp');

  const logoImg = document.createElement('img');
  logoImg.setAttribute('src', './pages/images/LOGO.png');
  logoImg.setAttribute('alt', 'Logo: dos boletos para el cine. Uno morado y uno amarillo. Ambos dicen "Cinergia"');
  logoImg.classList.add('logoSignUp');

  const signUpTxtSpan = document.createElement('span');
  signUpTxtSpan.classList.add('signUpTxtSpan');

  const signUpTxt = document.createElement('h1');

  const communityTxtSpan = document.createElement('span');
  communityTxtSpan.classList.add('spanCommunityTxt');

  const communityTxt = document.createElement('h2');

  const divForm = document.createElement('div');
  divForm.classList.add('registerBox');

  const signUpForm = document.createElement('form');
  signUpForm.classList.add('signUpForm');

  const userLabel = document.createElement('label');
  userLabel.classList.add('signUp');

  const userInput = document.createElement('input');
  userInput.classList.add('userInput');
  userInput.setAttribute('type', 'text');
  userInput.placeholder = 'Crea un nombre de usuario';

  const emailLabel = document.createElement('label');
  emailLabel.classList.add('signUp');

  const emailInput = document.createElement('input');
  emailInput.classList.add('emailInput');
  emailInput.setAttribute('type', 'email');
  emailInput.setAttribute('id', 'userEmail');
  emailInput.placeholder = 'Introduce tu correo electrónico';

  const passwordLabel = document.createElement('label');
  passwordLabel.classList.add('signUp');

  const passwordInput = document.createElement('input');
  passwordInput.classList.add('passwordInput');
  passwordInput.setAttribute('type', 'password');
  passwordInput.setAttribute('id', 'userPassword');
  passwordInput.placeholder = 'Crea una contraseña';

  const readyBtn = document.createElement('button');
  readyBtn.classList.add('readyBtn');
  readyBtn.setAttribute('id', 'readyBtn');
  readyBtn.setAttribute('type', 'button');

  const foundAccountDiv = document.createElement('div');
  foundAccountDiv.classList.add('foundAccountDiv');

  const foundAccount = document.createElement('p');
  foundAccount.classList.add('foundAccount');

  const foundAccountA = document.createElement('a');
  foundAccountA.setAttribute('id', 'goToSignIn');

  const googleArticle = document.createElement('article');
  googleArticle.setAttribute('class', 'googleArticle');

  const googleTxt = document.createElement('p');
  googleTxt.classList.add('googleTxt');

  const googleBtn = document.createElement('button');
  googleBtn.classList.add('googleBtn');
  googleBtn.setAttribute('type', 'button');

  const googleLogo = document.createElement('Img');
  googleLogo.classList.add('googleLogo');
  googleLogo.setAttribute('src', './pages/images/googleLogo.png');
  googleLogo.setAttribute('alt', 'Logo de Google');

  readyBtn.addEventListener('click', async () => {
    const email = emailInput.value;
    const password = passwordInput.value;
    try {
      await registerUser(email, password);
      navigateTo('/feed');
      // Aquí puedes redirigir al usuario a la página de inicio
    } catch (error) {
      console.error(error);
    }
  });

  foundAccountA.addEventListener('click', () => {
    navigateTo('/signin');
  });

  googleBtn.addEventListener('click', () => {
    googleLogin(navigateTo);
  });

  signUpTxt.textContent = 'Regístrate';
  communityTxt.textContent = 'Y sé parte de la comunidad';
  userLabel.textContent = 'Nombre de usuario:';
  emailLabel.textContent = 'Correo electrónico:';
  passwordLabel.textContent = 'Contraseña:';
  readyBtn.textContent = 'Regístrate';
  foundAccount.textContent = '¿Ya tienes una cuenta?';
  foundAccountA.textContent = 'Inicia sesión';
  googleTxt.textContent = 'O ingresa con:';

  logoArticle.appendChild(logoImg);
  signUpTxtSpan.appendChild(signUpTxt);
  communityTxtSpan.appendChild(communityTxt);
  signUpSection.appendChild(logoArticle);
  signUpSection.appendChild(signUpTxtSpan);
  signUpSection.appendChild(communityTxtSpan);
  signUpForm.appendChild(userLabel);
  signUpForm.appendChild(userInput);
  signUpForm.appendChild(emailLabel);
  signUpForm.appendChild(emailInput);
  signUpForm.appendChild(passwordLabel);
  signUpForm.appendChild(passwordInput);
  signUpForm.appendChild(readyBtn);
  signUpSection.appendChild(signUpForm);
  signUpSection.appendChild(divForm);
  divForm.appendChild(signUpForm);
  divForm.appendChild(foundAccountDiv);
  foundAccountDiv.appendChild(foundAccount);
  foundAccountDiv.appendChild(foundAccountA);
  divForm.appendChild(googleTxt);
  googleBtn.appendChild(googleLogo);
  divForm.appendChild(googleBtn);

  return signUpSection;
};
export default signup;
