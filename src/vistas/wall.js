import { savePost, onGetPosts } from '../lib/firestore.js';

function wall(navigateTo) {
  const section = document.createElement('section');
  const sectionHeader = document.createElement('section');
  const sectionPosts = document.createElement('section');
  const sectionFooter = document.createElement('section');
  const house = document.createElement('img');
  const logo = document.createElement('img');
  const config = document.createElement('img');
  const bell = document.createElement('img');
  const profile = document.createElement('img');
  const newPost = document.createElement('img');
  const popUp = document.createElement('div');
  const popUpClose = document.createElement('img');
  const popUpButton = document.createElement('button');
  const formPost = document.createElement('form');
  const postTitle = document.createElement('h3');
  const postDescription = document.createElement('h3');
  const textTitle = document.createElement('input');
  const textDescription = document.createElement('textarea');
  const deletePopup = document.createElement('div');
  const yesDelete = document.createElement('button');
  const noDelete = document.createElement('button');

  // agregar clases//
  section.classList.add('section');
  sectionHeader.classList.add('sectionHeader');
  sectionPosts.classList.add('sectionPosts');
  sectionFooter.classList.add('sectionFooter');
  bell.classList.add('bell');
  profile.classList.add('profile');
  newPost.classList.add('newPost');
  logo.classList.add('logoWall');
  house.classList.add('house');
  config.classList.add('config');
  popUp.classList.add('popUp');
  popUpButton.classList.add('popUpButton');
  formPost.classList.add('formPost');
  postTitle.classList.add('postTitle');
  postDescription.classList.add('postDescription');
  textTitle.classList.add('textTitle');
  textDescription.classList.add('textDescription');
  popUpClose.classList.add('popUpClose');
  deletePopup.classList.add('deletePopup');
  yesDelete.classList.add('buttonYesDelete');
  noDelete.classList.add('buttonNoDelete');

  // agregar atributos//
  logo.setAttribute('src', 'images/logo.png');
  house.setAttribute('src', 'images/home.png');
  config.setAttribute('src', 'images/Settings.png');
  bell.setAttribute('src', 'images/bell.png');
  profile.setAttribute('src', 'images/user.png');
  newPost.setAttribute('src', 'images/post.png');
  popUpClose.setAttribute('src', 'images/close.png');

  yesDelete.textContent = 'SI';
  noDelete.textContent = 'NO';
  popUpButton.textContent = 'Post';
  postTitle.textContent = 'Title';
  postDescription.textContent = 'Description';
  deletePopup.textContent = '¿Estas segura de que deseas eliminar tu post?';

  // clickeado para img de house
  house.addEventListener('click', () => {
    navigateTo('/wall');
  });
  // clickeado para img de config
  config.addEventListener('click', () => {
    navigateTo('/settings');
  });
  bell.addEventListener('click', () => {
    navigateTo('/buildsite');
  });
  profile.addEventListener('click', () => {
    navigateTo('/buildsite');
  });
  // POPUP//
  newPost.addEventListener('click', () => {
    console.log('hola');
    popUp.style.display = 'block';
  });

  popUpButton.addEventListener('click', async (e) => {
    e.preventDefault();
    popUp.style.display = 'none';
    await savePost(textTitle.value, textDescription.value);
    formPost.reset();
  });

  popUpClose.addEventListener('click', () => {
    popUp.style.display = 'none';
  });
  noDelete.addEventListener('click', () => {
    deletePopup.style.display = 'none';
  });

  function createPostCard(title, description) {
    const resultTitle = document.createElement('h2');
    const resultDescription = document.createElement('p');
    const deleteButton = document.createElement('img');
    const containerReactions = document.createElement('div');

    resultTitle.textContent = title;
    resultDescription.textContent = description;
    // agregar atributos
    deleteButton.setAttribute('src', 'images/delete.png');

    // crear clases
    resultTitle.classList.add('resultTitle');
    containerPost.classList.add('containerPost');
    resultDescription.classList.add('resultDescription');
    deleteButton.classList.add('deleteButton');
    containerReactions.classList.add('containerReactions');

    deleteButton.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('hola');
      deletePopup.style.display = 'block';
    });

    deletePopup.append(yesDelete, noDelete);
    containerPost.append(resultTitle, resultDescription, deleteButton, containerReactions);
    sectionPosts.append(containerPost);
  }

  function showPosts(arrayPosts) {
    sectionPosts.innerHTML = '';
    arrayPosts.forEach((post) => {
      createPostCard(post.title, post.description);
    });
  }
  onGetPosts(showPosts);

  // Agrupar por secciones//

  popUp.append(formPost);
  formPost.append(popUpClose, postTitle, textTitle, postDescription, textDescription, popUpButton);
  sectionHeader.append(house, logo, config);
  sectionFooter.append(bell, newPost, profile);
  section.append(sectionHeader, sectionPosts, popUp, deletePopup, sectionFooter);

  return section;
}

export default wall;
