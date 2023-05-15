// import { loginFirebase } from ".";

function login(navigateTo) {
  const section = document.createElement('section');
  const logo = document.createElement('img');
  const title = document.createElement('h1');
  const caption = document.createElement('h2');
  const form = document.createElement('form');
  const inputEmail = document.createElement('input');
  const inputErrorEmail = document.createElement('p');
  const inputPass = document.createElement('input');
  const inputErrorPass = document.createElement('p');
  const buttonLogin2 = document.createElement('button');
  const buttonGoogle = document.createElement('button');
  const buttonReturn = document.createElement('button');
  // const expresiones = {
  //   password: /^.{6,12}$/, // 4 a 12 digitos.
  //   correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  // };

  logo.src = './img/logoSinfondo.png';
  logo.classList.add('logoimg');

  title.textContent = 'Welcome to Foodiegram';
  title.classList.add('title');

  caption.textContent = 'Login';
  caption.classList.add('caption');

  inputEmail.placeholder = 'Email';
  inputEmail.classList.add('email');
  inputEmail.type = 'email';
  inputErrorEmail.textContent = '';
  inputErrorEmail.classList.add('inputErrorEmail');

  inputPass.placeholder = 'Password';
  inputPass.classList.add('password');
  inputPass.type = 'password';
  inputErrorPass.classList.add('inputErrorPass');

  buttonLogin2.textContent = 'Login';
  buttonLogin2.classList.add('login2');
  buttonLogin2.addEventListener('click', () => {
    navigateTo('/wall');
    // loginFirebase()
  });
  buttonGoogle.textContent = 'continue with GOOGLE';
  buttonGoogle.classList.add('google');
  buttonGoogle.addEventListener('click', () => {
    navigateTo('/wall');
  });
  buttonReturn.textContent = '.';
  buttonReturn.classList.add('return');
  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });

  inputEmail.addEventListener('input', (e) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(e.target.value)) {
      console.log('pasa la validación');
      document.querySelector('inputErrorEmail').classList.remove('.inputErrorEmail');
      inputErrorEmail.textContent = '';
    } else {
      document.querySelector('inputErrorEmail').classList.add('.inputErrorEmail');
      inputErrorEmail.textContent = 'Email no es valido';
    }console.log(inputErrorEmail, 'esta corriendo');
  });

  // const validarCampo = (expresion, input, campo) => {
  //   if(expresion.test(input.value)){
  //     document.getElementById(`grupo__usuario`).classList.remove('formulario__grupo-incorrecto');
  //     document.getElementById(`grupo__usuario}`).classList.add('formulario__grupo-correcto');
  // };

  form.append(
    inputEmail,
    inputErrorEmail,
    inputErrorPass,
    inputPass,
    buttonLogin2,
    buttonGoogle,
    buttonReturn,
  );
  section.append(logo, title, caption, form);
  return section;
}

export default login;
