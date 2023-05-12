// nodos para editar post
import { getDocs, query } from 'firebase/firestore';
import { auth, colRef, editPosts } from '../lib/index.js';

export const editPost = (navigateTo) => {
  const editPostDiv = document.createElement('div');
  editPostDiv.setAttribute('class', 'editPostDiv');

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
  iconArrow.addEventListener('click', () => {
    navigateTo('/wall');
  });

  const pEditPost = document.createElement('p');
  pEditPost.setAttribute('class', 'pEditPost');
  pEditPost.textContent = 'Edit post';

  const formPost = document.createElement('form');
  formPost.setAttribute('class', 'add');
  formPost.setAttribute('class', 'formpost');

  const userContainer = document.createElement('div');
  userContainer.setAttribute('class', 'userContaier');

  const profilePic = document.createElement('img');
  profilePic.setAttribute('src', '../img/Bob.png');
  profilePic.setAttribute('class', 'profilePic');

  const userName = document.createElement('span');
  userName.setAttribute('class', 'userName');
  userName.textContent = auth.currentUser.displayName;

  const btnSave = document.createElement('button');
  btnSave.setAttribute('class', 'btnSave');
  btnSave.setAttribute('type', 'submit');
  btnSave.textContent = 'Save';

  /*  formPost.addEventListener('submit', () => {}); */

  editPostDiv.append(header, section, formPost);
  header.append(nav);
  nav.append(logoImg, h1);
  section.append(navSection, hr);
  navSection.append(iconArrow, pEditPost);
  userContainer.append(profilePic, userName);
  formPost.append(userContainer, btnSave);

  const q = (colRef) => {
    const petName = document.createElement('input');
    petName.setAttribute('placeholder', 'Pet name');
    petName.setAttribute('type', 'text');
    petName.setAttribute('name', 'petName');
    petName.textContent = post.petName;
    petName.required = true;

    const petDescription = document.createElement('textarea');
    petDescription.setAttribute('placeholder', 'Describe your pet!');
    petDescription.setAttribute('name', 'petDescription');
    petDescription.required = true;
    petDescription.setAttribute('cols', '8');
    petDescription.setAttribute('rows', '12');
    petName.textContent = post.petDescription;

    formPost.append(petName, petDescription);
  };
  return editPostDiv;
};
/* .then(() => {
    console.log(`Post ${postId} edited successfully`);
  })
  .catch((err) => {
    console.log(`Error editing post ${postId}: ${err.message}`);
  }); */
