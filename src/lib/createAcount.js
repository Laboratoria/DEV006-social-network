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
  logo.classList.add('logo-img');

  title.textContent = 'Welcome to Foodiegram';
  caption.textContent = 'Create Acount';

  inputName.placeholder = 'Name';
  inputName.classList.add('inputName');

  inputEmail.placeholder = 'Email';

  inputPass.placeholder = 'Password';
  inputConfPass.placeholder = 'Confirm password';

  buttonSingUp.textContent = 'Sing Up';
  buttonSingUp.addEventListener('click', () => {
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
