function home(navigateTo) {
  const section = document.createElement('section');
  const title = document.createElement('h2');
  const btnLogin = document.createElement('button');
  const btnRegister = document.createElement('button');

  btnLogin.textContent = 'Login';
  btnLogin.addEventListener('click', () => {
    navigateTo('/login');
  });

  btnRegister.textContent = 'Register';
  btnRegister.addEventListener('click', () => {
    navigateTo('/register');
  });

  title.textContent = 'Bienevenido';

  section.append(title, btnLogin, btnRegister);
  return section;
}

export default home;
