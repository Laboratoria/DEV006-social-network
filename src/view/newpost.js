import { addPost, auth } from '../lib/index.js';

export const newpost = (navigateTo) => {
  const newPostDiv = document.createElement('div');
  newPostDiv.setAttribute('class', 'newPostDiv');

  const header = document.createElement('header');

  const nav = document.createElement('nav');

  const hr = document.createElement('hr');

  const iconArrow = document.createElement('img');
  iconArrow.setAttribute('src', '../img/arrow.png');
  iconArrow.addEventListener('click', () => {
    navigateTo('/wall');
  });

  const pCreatePost = document.createElement('p');
  pCreatePost.setAttribute('id', 'pCreatePost');
  pCreatePost.textContent = 'Create post';

  const formPost = document.createElement('form');
  formPost.setAttribute('class', 'add');
  formPost.setAttribute('id', 'formpost');

  const userContainer = document.createElement('div');
  userContainer.setAttribute('class', 'userContaier');

  const profilePic = document.createElement('img');
  profilePic.setAttribute('src', '../img/Bob.png');
  profilePic.setAttribute('class', 'profilePic');

  const userName = document.createElement('span');
  userName.setAttribute('id', 'userName');
  userName.textContent = auth.currentUser.displayName;

  const petName = document.createElement('input');
  petName.setAttribute('placeholder', 'Pet name');
  petName.setAttribute('type', 'text');
  petName.setAttribute('name', 'petName');
  petName.required = true;

  const petDescription = document.createElement('textarea');
  petDescription.setAttribute('placeholder', 'Describe your pet!');
  petDescription.setAttribute('name', 'petDescription');
  petDescription.required = true;
  petDescription.setAttribute('cols', '8');
  petDescription.setAttribute('rows', '12');

  const btnPost = document.createElement('button');
  btnPost.setAttribute('id', 'Post');
  btnPost.setAttribute('type', 'submit');
  btnPost.textContent = 'POST';

  formPost.addEventListener('submit', (event) => {
    event.preventDefault();
    if (petName !== '' || petDescription !== '') {
      addPost(petName, petDescription, formPost);
      navigateTo('/wall');
    }
  });

  newPostDiv.append(header, formPost);
  header.append(nav, hr);
  nav.append(iconArrow, pCreatePost);
  userContainer.append(profilePic, userName);
  formPost.append(userContainer, petName, petDescription, btnPost);

  return newPostDiv;
};
