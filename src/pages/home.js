// home.js

export const welcomePage = (navigateTo) => {
  const welcomeSection = document.createElement('section');
  welcomeSection.classList.add('welcomeSection');

  const logoArticle = document.createElement('article');
  logoArticle.classList.add('articleLogo');

  const logoImg = document.createElement('img');
  logoImg.setAttribute('src', '/DEV006-CINERGIA/src/LOGO.png');
  logoImg.setAttribute('alt', 'Logo: dos boletos para el cine. Uno morado y uno amarillo. Ambos dicen "Cinergia"');
  logoImg.classList.add('logo');

  const bigLogoTxtArticle = document.createElement('article');
  bigLogoTxtArticle.classList.add('articleLogoTxt');

  const bigLogoTxt = document.createElement('h1');

  const sloganArticle = document.createElement('article');
  sloganArticle.classList.add('articleSlogan');

  const cinergiaSloganTxt = document.createElement('h2');

  const cinergiaSloganSpan = document.createElement('span');
  cinergiaSloganSpan.classList.add('spanSloganCinergia');

  const signInAndSignUpArticle = document.createElement('article');
  signInAndSignUpArticle.classList.add('signInAndSignUp');
  signInAndSignUpArticle.setAttribute('id', 'signInSignUp');

  const btnSignIn = document.createElement('button');
  btnSignIn.classList.add('signInBtn');
  btnSignIn.setAttribute('type', 'button');

  const btnSignUp = document.createElement('button');
  btnSignUp.classList.add('signUpBtn');
  btnSignUp.setAttribute('type', 'button');

  btnSignIn.addEventListener('click', () => {
    navigateTo('/signin');
  });

  btnSignUp.addEventListener('click', () => {
    navigateTo('signup');
  });

  bigLogoTxt.textContent = 'Cinergia';
  cinergiaSloganSpan.textContent = 'Conectadxs por el cine';
  btnSignIn.textContent = 'Ingresa';
  btnSignUp.textContent = 'Regístrate';

  logoArticle.appendChild(logoImg);
  bigLogoTxtArticle.appendChild(bigLogoTxt);
  cinergiaSloganTxt.appendChild(cinergiaSloganSpan);
  sloganArticle.appendChild(cinergiaSloganTxt);
  signInAndSignUpArticle.appendChild(btnSignIn);
  signInAndSignUpArticle.appendChild(btnSignUp);
  welcomeSection.appendChild(logoArticle);
  welcomeSection.appendChild(bigLogoTxtArticle);
  welcomeSection.appendChild(cinergiaSloganTxt);
  welcomeSection.appendChild(signInAndSignUpArticle);

  return welcomeSection;
};
