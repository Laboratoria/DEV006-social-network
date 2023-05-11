function createAcount(navigateTo) {
  const section = document.createElement('section');
  const logo = document.createElement('img');
  const title = document.createElement('h1');
  const caption = document.createElement('h2');
  const form = document.createElement('form');
  const inputName = document.createElement('input');
  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input');
  const inputConfPass = document.createElement('input');
  const buttonSingUp = document.createElement('button');
  const buttonGoogle = document.createElement('button');
  const buttonReturn = document.createElement('button');

  logo.src = './img/logoSinfondo.png';
  logo.classList.add('logoimg');

  title.textContent = 'Welcome to Foodiegram';
  title.classList.add('title');

  caption.textContent = 'Create Acount';
  caption.classList.add('caption');

  inputName.placeholder = 'Name';
  inputName.classList.add('name');
  inputEmail.placeholder = 'Email';
  inputEmail.classList.add('email2');
  inputPass.placeholder = 'Password';
  inputPass.classList.add('password2');
  inputConfPass.placeholder = 'Confirm password';
  inputConfPass.classList.add('confirmPass');

  buttonSingUp.textContent = 'Sing Up';
  buttonSingUp.classList.add('login2');
  buttonSingUp.addEventListener('click', () => {
    navigateTo('/wall');
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

  form.append(
    inputName,
    inputEmail,
    inputPass,
    inputConfPass,
    buttonSingUp,
    buttonGoogle,
    buttonReturn,
  );
  section.append(logo, title, caption, form);
  return section;
}

export default createAcount;
