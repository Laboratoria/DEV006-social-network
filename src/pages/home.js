// home.js

const welcomePage = (navigateTo) => {
  const welcomeSection = document.createElement('section');
  welcomeSection.classList.add('welcomeSection');

  const logoArticle = document.createElement('article');
  logoArticle.classList.add('articleLogo');

  const logoImg = document.createElement('img');
  logoImg.setAttribute('src', './pages/images/LOGO.png');
  logoImg.setAttribute('alt', 'Logo: dos boletos para el cine. Uno morado y uno amarillo. Ambos dicen "Cinergia"');
  logoImg.classList.add('logo');

  const bigLogoTxtArticle = document.createElement('article');
  bigLogoTxtArticle.classList.add('articleLogoTxt');

  const bigLogoTxt = document.createElement('h3');

  const welcomeBox = document.createElement('div');
  welcomeBox.classList.add('welcomeBox');

  const cinergiaWelcome = document.createElement('h2');

  const cinergiaSloganTxt = document.createElement('h3');

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
    navigateTo('/signup');
  });

  bigLogoTxt.textContent = 'Conectadxs por el cine';
  cinergiaWelcome.textContent = 'Bienvenidx a Cinergia';
  cinergiaSloganTxt.textContent = 'Descubre y comparte todo acerca del cine';
  btnSignIn.textContent = 'Ingresa';
  btnSignUp.textContent = 'Regístrate';

  logoArticle.appendChild(logoImg);
  bigLogoTxtArticle.appendChild(bigLogoTxt);
  welcomeSection.appendChild(logoArticle);
  welcomeSection.appendChild(bigLogoTxtArticle);
  welcomeBox.appendChild(cinergiaWelcome);
  welcomeBox.appendChild(cinergiaSloganTxt);
  welcomeBox.appendChild(btnSignIn);
  welcomeBox.appendChild(btnSignUp);
  welcomeSection.appendChild(welcomeBox);

  return welcomeSection;
};
export default welcomePage;
