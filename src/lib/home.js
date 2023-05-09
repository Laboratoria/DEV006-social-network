function home(navigateTo) {
  const section = document.createElement('section');
  const form = document.createElement('form');
  const buttonLogin = document.createElement('button');
  const buttonCreate = document.createElement('button');
  const logo = document.createElement('img');

  logo.src = './img/logoSinfondo.png';
  logo.classList.add('logoimg');


  buttonLogin.textContent = 'Login';
  buttonLogin.classList.add('login');
  buttonLogin.addEventListener('click', () => {
    navigateTo('/login');
  });

  buttonCreate.textContent = 'Create Acount';
  buttonCreate.classList.add('createAcount');
  buttonCreate.addEventListener('click', () => {
    navigateTo('/loginCreate');
  });

  form.append(buttonLogin, buttonCreate);
  section.append(logo, form);
  return section;
}

export default home;
