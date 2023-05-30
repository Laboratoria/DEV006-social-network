export function register(navigateTo) {
  const registerSection = document.createElement('section');
  const logoPeque = document.createElement('img');
  const divRegister = document.createElement('div');
  const inputMail = document.createElement('input');
  const inputUserRegister = document.createElement('input');
  const inputPasswordRegister = document.createElement('input');
  const registerBtn = document.createElement('button');
  const registerGoogle = document.createElement('button');
  const returnDiv = document.createElement('div');
  const returnImg = document.createElement('img');
  const returnLink = document.createElement('p');
  const imgFamiliaHome = document.createElement('img');

  logoPeque.className = 'logoPeque';
  divRegister.className = 'divRegister';
  inputMail.className = 'inputMail';
  inputUserRegister.className = 'inputUserRegister';
  inputPasswordRegister.className = 'inputPassRegister';
  registerBtn.className = 'btnRegister';
  registerGoogle.className = 'btnRegGoogle';
  returnDiv.className = 'returnDiv';
  returnImg.className = 'returnImg';
  returnLink.className = 'returnLink';
  imgFamiliaHome.className = 'familyImg';
  
  logoPeque.src = './img/logoLKP_final.png';
  inputMail.placeholder = 'E-mail';
  inputUserRegister.placeholder = 'User';
  inputPasswordRegister.placeholder = 'Password';
  registerBtn.textContent = 'Register';
  registerGoogle.textContent = 'Google';
  returnImg.src = './img/left-arrowOrange.png';
  returnLink.textContent= 'Return';
  imgFamiliaHome.src = './img/comunidad.png';

  returnDiv.addEventListener('click', () => {
    navigateTo('/');
  });

  returnDiv.append(returnImg,returnLink);
  divRegister.append(inputMail, inputUserRegister, inputPasswordRegister, registerBtn, registerGoogle, returnDiv);
  registerSection.append(logoPeque, divRegister, imgFamiliaHome);
  return registerSection;
}