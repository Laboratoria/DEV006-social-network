function home(navigateTo) {
  const section = document.createElement('section');
  const form = document.createElement('form');
  const buttonLogin = document.createElement('button');
  const buttonCreate = document.createElement('button');
  const logo = document.createElement('img');
  logo.src = './img/logoSinfondo.png';

  buttonLogin.textContent = 'Login';
  buttonLogin.addEventListener('click', () => {
    navigateTo('/login');
  });

  buttonCreate.textContent = 'Create Acount';
  buttonCreate.addEventListener('click', () => {
    navigateTo('/loginCreate');
  });

  form.append(buttonLogin, buttonCreate);
  section.append(logo, form);
  return section;
}

export default home;
