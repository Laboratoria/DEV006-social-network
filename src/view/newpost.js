import { addPost, auth } from '../lib/index.js';

export const newpost = (navigateTo) => {
  const newPostDiv = document.createElement('div');
  newPostDiv.setAttribute('class', 'newPostDiv');

  // ----------------------------------------------------- Encabezado para regresar al muro
  const header = document.createElement('header');

  const logoImg = document.createElement('img');
  logoImg.setAttribute('src', 'img/logo.png');
  logoImg.setAttribute('alt', 'This is the logo. It is a dog paw inside a heart.');

  const nav = document.createElement('nav');
  nav.setAttribute('class', 'navNewpost');

  const h1 = document.createElement('h1');
  h1.setAttribute('class', 'wallH1');
  h1.textContent = 'Be My Friend';

  const section = document.createElement('section');

  const navSection = document.createElement('nav');

  const hr = document.createElement('hr');

  const iconArrow = document.createElement('img');
  iconArrow.setAttribute('src', '../img/arrow.png');
  iconArrow.setAttribute('id', 'iconArrow');
  iconArrow.addEventListener('click', () => {
    navigateTo('/wall');
  });

  const pCreatePost = document.createElement('p');
  pCreatePost.setAttribute('id', 'pCreatePost');
  pCreatePost.textContent = 'Create post';

  // ----------------------------------------------------- Formulario para crear post
  const formPost = document.createElement('form');
  formPost.setAttribute('class', 'add');
  formPost.setAttribute('class', 'formpost');

  // Contenedor para username y profilepic
  const userContainer = document.createElement('div');
  userContainer.setAttribute('class', 'userContaier');

  const profilePic = document.createElement('img');
  profilePic.setAttribute('src', '../img/Bob.png');
  profilePic.setAttribute('class', 'profilePic');

  const userName = document.createElement('span');
  userName.setAttribute('class', 'userName');
  userName.textContent = auth.currentUser.displayName;

  // Inputs del form
  const petName = document.createElement('input');
  petName.setAttribute('placeholder', 'Pet name');
  petName.setAttribute('type', 'text');
  petName.setAttribute('name', 'petName');
  petName.setAttribute('class', 'petName');
  petName.required = true;

  const petDescription = document.createElement('textarea');
  petDescription.setAttribute('placeholder', 'Describe your pet!');
  petDescription.setAttribute('name', 'petDescription');
  petDescription.setAttribute('class', 'petDescription');
  petDescription.required = true;
  petDescription.setAttribute('cols', '8');
  petDescription.setAttribute('rows', '12');

  const btnPost = document.createElement('button');
  btnPost.setAttribute('id', 'Post');
  btnPost.setAttribute('type', 'submit');
  btnPost.textContent = 'POST';

  // Ejecución de addPost: si los campos están vacíos no se puede publicar
  formPost.addEventListener('submit', (event) => {
    event.preventDefault();
    if (petName.value !== '' && petDescription.value !== '') {
      addPost(petName.value, petDescription.value).then(() => {
        formPost.reset();
        navigateTo('/wall');
      })
        .catch((error) => {
          console.log(error);
        });
    }
  });

  // Inserción de nodos
  newPostDiv.append(header, section, formPost);
  header.append(nav);
  nav.append(logoImg, h1);
  section.append(navSection, hr);
  navSection.append(iconArrow, pCreatePost);
  userContainer.append(profilePic, userName);
  formPost.append(userContainer, petName, petDescription, btnPost);

  return newPostDiv;
};
