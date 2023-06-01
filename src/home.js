function home(navigateTo) {
  const section = document.createElement('section');
  const title = document.createElement('h2');
  const formLogin = document.createElement('form');
  const inputAcces = document.createElement('input');
  const inputPassword = document.createElement('input');
  const btnLogin = document.createElement('button');
  const button = document.createElement('button');
  button.setAttribute("id", "button-home");
  btnLogin.setAttribute("id", "button-login");
  section.setAttribute("id", "section-style");
  formLogin.setAttribute("id", "formLogin-style");
  // input home
  inputAcces.placeholder = 'escribe tu email';
  inputPassword.placeholder = 'contraseña';

  // boton de iniciar sesión
  btnLogin.textContent = 'Iniciar sesión';
  btnLogin.addEventListener('click', () => {
    navigateTo();
  });

  // boton de registrarse
  button.textContent = 'Registrarse';
  button.addEventListener('click', () => {
    navigateTo('/login');
  });

  title.textContent = 'RUNNERS NETWORK';

  formLogin.append(inputAcces, inputPassword);
  section.append(title, formLogin, button, btnLogin);
  return section;
}

export default home;
