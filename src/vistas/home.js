function home(navigateTo) {
  const section = document.createElement('section');
  const title = document.createElement('h2');
  const buttonLogin = document.createElement('button');
  const buttonSignin = document.createElement('button');

  buttonLogin.textContent = 'Iniciar sesión';
  buttonLogin.addEventListener('click', () => {
    navigateTo('/login');
  });
  buttonSignin.textContent = 'Registrarme';
  title.textContent = 'Welcome';

  section.append(title, buttonLogin, buttonSignin);
  return section;
}
export default home;
