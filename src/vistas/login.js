export function login(navigateTo) {
  const LoginSection = document.createElement('section');
  const logoGrande = document.createElement('img');
  const divLogin = document.createElement('div');
  const inputUser = document.createElement('input');
  const inputPassword = document.createElement('input');
  const loginBtn = document.createElement('button');
  const loginGoogle = document.createElement('button');
  const divRegister = document.createElement('div');
  const textRegister = document.createElement('p');
  const linkRegister = document.createElement('p'); // revisar como saltar a vista de registro
  const imgFamiliaHome = document.createElement('img');
  const footer = document.createElement('footer');

  logoGrande.className = 'logoGrande';
  inputUser.className = 'inputUser';
  inputPassword.className = 'inputPass';
  loginBtn.className = 'btnLogin';
  loginGoogle.className = 'btnGoogle';
  textRegister.className = 'textRegister';
  linkRegister.className = 'linkRegister';
  imgFamiliaHome.className = 'familyImg';
  footer.className = 'footer';
  divLogin.className = 'divLogin';

  logoGrande.src = './img/logoLKP_final.png';
  inputUser.placeholder = 'User';
  inputPassword.placeholder = 'Password';
  loginBtn.textContent = 'Login';
  loginGoogle.textContent = 'Google';
  textRegister.textContent = "Don't have an account?";
  linkRegister.textContent = 'Register';
  imgFamiliaHome.src = './img/comunidad.png';
  footer.textContent = 'Copyright © 2023 Isabel Lira, Kat Bravo & Alejandra Martínez';

  divRegister.addEventListener('click', () => {
    navigateTo('/register');
  });

  divRegister.append(textRegister, linkRegister)
  divLogin.append(inputUser, inputPassword, loginBtn, loginGoogle, divRegister);
  LoginSection.append(logoGrande, divLogin, imgFamiliaHome, footer);
  return LoginSection;

}