function home(navigateTo) {
  const containerHome = document.createElement('div');
  const section = document.createElement('section');
  const title = document.createElement('h2');
  const description = document.createElement('p');
  const msjHome = document.createElement('p');
  const btnLogin = document.createElement('button');
  const btnRegister = document.createElement('button');
  const imgPets = document.createElement('img');

  containerHome.classList.add('container-home');
  containerHome.id = 'containerHome';

  imgPets.src = ('img/huellaIcono.png');
  imgPets.alt = 'icono de huella';
  imgPets.classList.add('img-home');

  btnLogin.textContent = 'Ya soy Amigo';
  btnLogin.classList.add('btn-login');
  btnLogin.addEventListener('click', () => {
    navigateTo('/login');
  });

  btnRegister.textContent = 'Quiero Unirme';
  btnRegister.classList.add('btn-register');
  btnRegister.addEventListener('click', () => {
    navigateTo('/register');
  });

  title.textContent = 'Estamos Perdid@s!!!!';
  title.classList.add('title-home');
  description.textContent = 'Aquí encontrarás una gran comunidad dispuesta a ayudarte con la busqueda de tu mejor amigo o bien podrás ayudar con la busqueda de alguien más, Únete ';
  description.classList.add('description-home');
  msjHome.textContent = 'Recuerda que ellos también son familia....';
  msjHome.classList.add('msj-home');

  containerHome.append(title, imgPets, description, msjHome, btnLogin, btnRegister);
  section.appendChild(containerHome);
  return section;
}

export default home;
