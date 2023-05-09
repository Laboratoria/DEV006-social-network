function home(navigateTo) {
  // creación//
  const section = document.createElement('section');
  const sectionForm = document.createElement('section');
  const title = document.createElement('h2');
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
  // agregar atributos//
  logo.setAttribute('src', 'images/logo.png');

  // agregar texto a los botones//
  buttonLogin.textContent = 'Iniciar sesión';
  buttonLogin.addEventListener('click', () => {
    navigateTo('/login');
  });
  buttonSignin.textContent = 'Registrarme';
  title.textContent = '¡Bienvenida a nuestra comunidad exclusiva para mujeres!   Este es un espacio seguro y acogedor donde podrás conectarte con otras mujeres, compartir tus experiencias, hacer nuevas amistades, aprender cosas nuevas y sentirte apoyada en todo momento.Esperamos que disfrutes de tu experiencia aquí.';

  // agrupar secciones//
  sectionHeader.append(header,logo);
  sectionForm.append(title, buttonLogin, buttonSignin);
  section.append(sectionHeader,sectionForm);
  return section;
}
export default home;
