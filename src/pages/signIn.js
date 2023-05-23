import { loginUser, googleLogin } from '../lib/firebaseAuth.js';

const signin = (navigateTo) => {
  const signInSection = document.createElement('section');
  signInSection.classList.add('signInSection');

  const logoArticle = document.createElement('article');
  logoArticle.classList.add('articleLogoSignUp');

  const logoImg = document.createElement('img');
  logoImg.setAttribute('src', './pages/images/LOGO.png');
  logoImg.setAttribute('alt', 'Logo: dos boletos para el cine. Uno morado y uno amarillo. Ambos dicen "Cinergia"');
  logoImg.classList.add('logoSignUp');

  const signInTxtSpan = document.createElement('span');
  signInTxtSpan.classList.add('signInTxtSpan');

  const signInTxt = document.createElement('h1');

  const communityTxtSpan = document.createElement('span');
  communityTxtSpan.classList.add('spanCommunityTxt');

  const communityTxt = document.createElement('h2');

  const divForm = document.createElement('div');
  divForm.classList.add('signInBox');

  const signInForm = document.createElement('form');
  signInForm.classList.add('signInForm');

  const emailLabel = document.createElement('label');
  emailLabel.classList.add('signIn');

  const emailInput = document.createElement('input');
  emailInput.classList.add('emailInput');
  emailInput.setAttribute('type', 'email');
  emailInput.setAttribute('id', 'userEmail');

  const passwordLabel = document.createElement('label');
  passwordLabel.classList.add('signIn');

  const passwordInput = document.createElement('input');
  passwordInput.classList.add('passwordInput');
  passwordInput.setAttribute('type', 'password');
  passwordInput.setAttribute('id', 'userPassword');

  const readyBtn = document.createElement('button');
  readyBtn.classList.add('readyBtn');
  readyBtn.setAttribute('id', 'readyBtn');
  readyBtn.setAttribute('type', 'button');

  const foundAccountDiv = document.createElement('div');
  foundAccountDiv.classList.add('foundAccountDiv');

  const forgetPassword = document.createElement('a');
  forgetPassword.classList.add('forgetPassword');

  const foundAccount = document.createElement('p');
  foundAccount.classList.add('foundAccount');

  const foundAccountA = document.createElement('a');
  foundAccountA.setAttribute('id', 'goToSignIn');
  foundAccountA.classList.add('foundAccountA');

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
      await loginUser(email, password);
      navigateTo('/feed');
      // Aquí puedes redirigir al usuario a la página de inicio
    } catch (error) {
      console.error(error);
    }
  });

  foundAccountA.addEventListener('click', () => {
    navigateTo('/signup');
  });

  googleBtn.addEventListener('click', () => {
    googleLogin(navigateTo);
  });

  // googleBtn.addEventListener...
  signInTxt.textContent = 'Inicia sesión';
  communityTxt.textContent = 'Y conecta con el mundo del cine';
  emailLabel.textContent = 'Correo electrónico:';
  passwordLabel.textContent = 'Contraseña:';
  readyBtn.textContent = 'Iniciar sesión';
  forgetPassword.textContent = '¿Olvidaste la contraseña?';
  foundAccount.textContent = '¿No tienes una cuenta?';
  foundAccountA.textContent = 'Regístrate';
  googleTxt.textContent = 'O ingresa con:';

  logoArticle.appendChild(logoImg);
  signInTxtSpan.appendChild(signInTxt);
  communityTxtSpan.appendChild(communityTxt);
  signInSection.appendChild(logoArticle);
  signInSection.appendChild(signInTxtSpan);
  signInSection.appendChild(communityTxtSpan);
  signInForm.appendChild(emailLabel);
  signInForm.appendChild(emailInput);
  signInForm.appendChild(passwordLabel);
  signInForm.appendChild(passwordInput);
  signInForm.appendChild(readyBtn);
  signInForm.appendChild(forgetPassword);
  signInSection.appendChild(signInForm);
  signInSection.appendChild(divForm);
  divForm.appendChild(signInForm);
  divForm.appendChild(foundAccountDiv);
  foundAccountDiv.appendChild(foundAccount);
  foundAccountDiv.appendChild(foundAccountA);
  divForm.appendChild(googleTxt);
  googleBtn.appendChild(googleLogo);
  divForm.appendChild(googleBtn);

  return signInSection;
};
export default signin;
