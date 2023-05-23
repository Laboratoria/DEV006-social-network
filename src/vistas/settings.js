function settings(navigateTo) {
  const section = document.createElement('section');
  const sectionHeader = document.createElement('section');
  const sectionConfig = document.createElement('section');
  const sectionFooter = document.createElement('section');
  const house = document.createElement('img');
  const logo = document.createElement('img');
  const bell = document.createElement('img');
  const profile = document.createElement('img');
  const newPost = document.createElement('img');
  const config = document.createElement('img');
  const privacy = document.createElement('button');
  const account = document.createElement('button');
  const logOut = document.createElement('button');
  const contact = document.createElement('button');

  // agregar clases//
  section.classList.add('section');
  sectionHeader.classList.add('sectionHeader');
  sectionConfig.classList.add('sectionConfig');
  sectionFooter.classList.add('sectionFooter');
  bell.classList.add('bell');
  profile.classList.add('profile');
  newPost.classList.add('newPost');
  logo.classList.add('logoWall');
  house.classList.add('house');
  config.classList.add('config');
  privacy.classList.add('buttonsConfig');
  account.classList.add('buttonsConfig');
  logOut.classList.add('buttonsConfig');
  contact.classList.add('buttonsConfig');

  // agregar atributos//
  logo.setAttribute('src', 'images/logo.png');
  house.setAttribute('src', 'images/home.png');
  bell.setAttribute('src', 'images/bell.png');
  profile.setAttribute('src', 'images/user.png');
  newPost.setAttribute('src', 'images/post.png');
  config.setAttribute('src', 'images/Settings.png');
  config.classList.add('config');
  privacy.textContent = ('Privacidad');
  account.textContent = ('Cuenta');
  logOut.textContent = ('Cerrar sesión');
  contact.textContent = ('Contáctanos');

  privacy.addEventListener('click', () => {
    navigateTo('/buildsite');
  });

  account.addEventListener('click', () => {
    navigateTo('/buildsite');
  });

  logOut.addEventListener('click', () => {
    navigateTo('/buildsite');
  });

  contact.addEventListener('click', () => {
    navigateTo('/buildsite');
  });

  // Agrupar por secciones//
  sectionHeader.append(house, logo, config);
  sectionFooter.append(bell, newPost, profile);
  sectionConfig.append(privacy, account, logOut, contact);
  section.append(sectionHeader, sectionConfig, sectionFooter);

  return section;
}
export default settings;
