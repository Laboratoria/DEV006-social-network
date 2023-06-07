function home(navigateTo) {
  // creación//
  const section = document.createElement('section');
  const sectionForm = document.createElement('section');
  const title = document.createElement('h1');
  const text = document.createElement('p');
  const sectionButton = document.createElement('section');
  const buttonLogin = document.createElement('button');
  const buttonSignin = document.createElement('button');
  const sectionHeader = document.createElement('section');
  const logo = document.createElement('img');
  const header = document.createElement('div');

  // agregar clases//
  title.classList.add('title');
  buttonLogin.classList.add('buttons');
  buttonSignin.classList.add('buttons');
  header.classList.add('header');
  logo.classList.add('logo');
  sectionForm.classList.add('sectionForm');
  sectionHeader.classList.add('sectionHeader');
  section.classList.add('section');
  sectionButton.classList.add('sectionButton');
  text.classList.add('text');
  // agregar atributos//
  logo.setAttribute('src', 'images/logo.png');

  // agregar texto a los botones//
  buttonLogin.textContent = ' Iniciar sesión ';
  buttonLogin.addEventListener('click', () => {
    navigateTo('/login');
  });
  buttonSignin.textContent = '  Registrarme  ';
  buttonSignin.addEventListener('click', () => {
    navigateTo('/question');
  });
  title.textContent = '¡Bienvenida!';
  text.textContent = 'Nuestra comunidad es exclusiva para mujeres. Es un espacio seguro y acogedor donde podrás conectarte con otras chicas, compartir tus experiencias, hacer nuevas amistades, aprender cosas nuevas y sentirte apoyada en todo momento. Esperamos que disfrutes de tu experiencia aquí.';
  // agrupar secciones//
  sectionHeader.append(header, logo);
  sectionButton.append(buttonLogin, buttonSignin);
  sectionForm.append(title, text, sectionButton);
  section.append(sectionHeader, sectionForm);
  return section;
}
export default home;
