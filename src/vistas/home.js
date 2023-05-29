export function home(navigateTo) {
  const homeSection = document.createElement('section');
  const logoGrande = document.createElement('img');
  const divHome = document.createElement('div');
  const textoHome = document.createElement('p');
  const buttonRegisterHome = document.createElement('button');
  const buttonLoginHome = document.createElement('button');
  const imgFamiliaHome = document.createElement('img');
  const footer = document.createElement('footer');

  logoGrande.className = 'logoGrande';
  divHome.className = 'divHome';
  textoHome.className = 'textoHome';
  buttonRegisterHome.className = 'btnRegisterHome';
  buttonLoginHome.className = 'btnLoginHome';
  imgFamiliaHome.className = 'familyImg';
  footer.className = 'footer';
  logoGrande.src = './img/logoLKP_final.png';
  textoHome.textContent = 'Let Kids Play is an application that seeks to generate meeting spaces between people who are caregivers of children ♥♥♥';
  buttonLoginHome.textContent = 'Login';
  buttonRegisterHome.textContent = 'Register';
  imgFamiliaHome.src = './img/comunidad.png';
  footer.textContent = 'Copyright © 2023 Isabel Lira, Kat Bravo & Alejandra Martínez';

  buttonLoginHome.addEventListener('click', () => {
      navigateTo('/login');
  });

  buttonRegisterHome.addEventListener('click', () => {
    navigateTo('/register');
  });

  divHome.append(textoHome, buttonRegisterHome, buttonLoginHome);
  homeSection.append(logoGrande, divHome, imgFamiliaHome, footer);
  return homeSection;
}