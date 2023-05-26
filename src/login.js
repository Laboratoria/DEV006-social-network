export function login(navigateTo) {
  const LoginSection = document.createElement('section');
  const logoGrande = document.createElement('img');
  const divHome = document.createElement('div');
  const inputUser = document.createElement('input');
  const inputPassword = document.createElement('input');
  const loginBtn = document.createElement('button');
  const loginGoogle = document.createElement('button');
  const textRegister = document.createElement('p');
  const linkRegister = document.createElement('p'); // revisar como saltar a vista de registro
  const imgFamiliaHome = document.createElement('img');
  const footer = document.createElement('footer');

  logoGrande.className = 'logoGrande';
  inputUser.className = 'inputUser';
  inputPassword.className = 'inputPass';
  loginBtn.className = 'btnOrange';
  loginGoogle.className = 'btnGoogle';
  textRegister.className = 'textRegister';
  linkRegister.className = 'linkRegister';
  imgFamiliaHome.className = 'familyImg';
  footer.className = 'footer';
  divHome.className = 'divLogin';
  logoGrande.src = './img/logoLKP_final.png';
  inputUser.placeholder = 'User';
  inputPassword.placeholder = 'Password';
  loginBtn.textContent = 'Login';
  loginGoogle.textContent = 'Google';
  textRegister.textContent = "Don't have an account?";
  linkRegister.textContent = 'Register';
  imgFamiliaHome.src = './img/comunidad.png';
  footer.textContent = 'Copyright © 2023 Isabel Lira, Kat Bravo & Alejandra Martínez';

  divHome.append(inputUser, inputPassword, loginBtn, loginGoogle, textRegister, linkRegister);
  LoginSection.append(logoGrande, divHome,imgFamiliaHome, footer);
  document.getElementById('root').appendChild(LoginSection);
  
  return divGrande;
}