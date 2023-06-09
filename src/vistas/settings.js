import { logoutUser } from '../lib/auth.js';
import imageLogo from '../images/logo.png';
import homeImage from '../images/home.png';
import bellImage from '../images/bell.png';
import userImage from '../images/user.png';
import postImage from '../images/post.png';
import settingImage from '../images/Settings.png';

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
  logo.setAttribute('src', imageLogo);
  house.setAttribute('src', homeImage);
  bell.setAttribute('src', bellImage);
  profile.setAttribute('src', userImage);
  newPost.setAttribute('src', postImage);
  config.setAttribute('src', settingImage);
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

  contact.addEventListener('click', () => {
    navigateTo('/buildsite');
  });

  logOut.addEventListener('click', () => {
    logoutUser()
      .then(() => {
        navigateTo('/'); // Redireccionar a login
      })
      .catch((error) => {
        console.log(error);
        // Manejar error
      });
  });

  // Agrupar por secciones//
  sectionHeader.append(house, logo, config);
  sectionFooter.append(bell, newPost, profile);
  sectionConfig.append(privacy, account, logOut, contact);
  section.append(sectionHeader, sectionConfig, sectionFooter);

  return section;
}
export default settings;
