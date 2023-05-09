function login(navigateTo) {
  const section = document.createElement('section');
  const logo = document.createElement('img');
  const title = document.createElement('h1');
  const caption = document.createElement('h2');
  const form = document.createElement('form');
  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input');
  const buttonLogin2 = document.createElement('button');
  const buttonGoogle = document.createElement('button');
  const buttonReturn = document.createElement('button');

  logo.src = './img/logoSinfondo.png';

  title.textContent = 'Welcome to Foodiegram';
  caption.textContent = 'Login';

  inputEmail.placeholder = 'Email';
  inputPass.placeholder = 'Password';

  buttonLogin2.textContent = 'Login';
  buttonLogin2.addEventListener('click', () => {
    navigateTo('/wall');
  });
  buttonGoogle.textContent = 'continue with GOOGLE';
  buttonGoogle.addEventListener('click', () => {
    navigateTo('/wall');
  });
  buttonReturn.textContent = '<';
  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });

  form.append(inputEmail, inputPass, buttonLogin2, buttonGoogle, buttonReturn);
  section.append(logo, title, caption, form);
  return section;
}

export default login;
