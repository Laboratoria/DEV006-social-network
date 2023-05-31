import { savePost, onGetPosts } from '../lib/firestore.js';

const userName = localStorage.getItem('userName');
console.log(userName);

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
  const errorPostTitle = document.createElement('p');
  const errorPostDescription = document.createElement('p');

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
  // dateCreated.classList.add('dateCreated');

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
  postTitle.textContent = 'Titulo';
  postDescription.textContent = 'Descripción';
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

    if (textTitle.value === '') {
      errorPostTitle.innerHTML = '*Por favor escribe un título';
    } else {
      errorPostTitle.innerHTML = '';
    }

    if (textDescription.value === '') {
      errorPostDescription.innerHTML = '*Por favor escribe una descripción';
    } else {
      errorPostDescription.innerHTML = '';
    }

    if (textTitle.value !== '' && textDescription.value !== '') {
      await savePost(textTitle.value, textDescription.value);
      formPost.reset();
      popUp.style.display = 'none';
    }
  });

  popUpClose.addEventListener('click', () => {
    popUp.style.display = 'none';
  });
  noDelete.addEventListener('click', () => {
    deletePopup.style.display = 'none';
  });

  function createPostCard(title, description, name, fullDate) {
    const resultTitle = document.createElement('h2');
    const containerPost = document.createElement('div');
    const resultDescription = document.createElement('p');
    const deleteButton = document.createElement('img');
    const containerReactions = document.createElement('div');
    const resultUser = document.createElement('p');
    const resultFullDate = document.createElement('p');

    resultTitle.textContent = title;
    resultDescription.textContent = description;
    resultUser.textContent = name;
    resultFullDate.textContent = fullDate;
    console.log(fullDate);
    console.log(name);

    // dateCreated.textContent = dateCreated;
    // agregar atributos
    deleteButton.setAttribute('src', 'images/delete.png');

    // crear clases
    resultTitle.classList.add('resultTitle');
    containerPost.classList.add('containerPost');
    resultDescription.classList.add('resultDescription');
    deleteButton.classList.add('deleteButton');
    containerReactions.classList.add('containerReactions');
    resultUser.classList.add('resultUser');
    errorPostTitle.classList.add('errorsPosts');
    errorPostDescription.classList.add('errorsPosts');
    resultFullDate.classList.add('resultFullDate');

    deleteButton.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('hola');
      deletePopup.style.display = 'block';
    });

    deletePopup.append(yesDelete, noDelete);
    containerPost.append(
      resultUser,
      resultTitle,
      resultDescription,
      resultFullDate,
      containerReactions,
      deleteButton,
    );
    sectionPosts.append(containerPost);
  }

  function showPosts(arrayPosts) {
    sectionPosts.innerHTML = '';
    arrayPosts.forEach((post) => {
      createPostCard(post.title, post.description, post.name, post.fullDate);
      console.log(post.fullDate);
    });
  }
  onGetPosts(showPosts);

  // Agrupar por secciones//

  popUp.append(formPost);
  formPost.append(
    popUpClose,
    postTitle,
    textTitle,
    errorPostTitle,
    postDescription,
    textDescription,
    errorPostDescription,
    popUpButton,
  );
  sectionHeader.append(house, logo, config);
  sectionFooter.append(bell, newPost, profile);
  section.append(sectionHeader, sectionPosts, popUp, deletePopup, sectionFooter);

  return section;
}

export default wall;
