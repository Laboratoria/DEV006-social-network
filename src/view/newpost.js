import { addPost } from '../lib/index.js';

export const newpost = (navigateTo) => {
  const newPostDiv = document.createElement('div');

  const header = document.createElement('header');

  const nav = document.createElement('nav');

  const iconArrow = document.createElement('img');
  iconArrow.setAttribute('src', '../img/arrow.png');
  iconArrow.addEventListener('click', () => {
    navigateTo('/wall');
  });

  const pCreatePost = document.createElement('p');
  pCreatePost.setAttribute('id', 'pCreatePost');
  pCreatePost.textContent = 'Create post';

  const userName = document.createElement('span');
  userName.setAttribute('id', 'userName');
  userName.textContent = 'Username';

  const formPost = document.createElement('form');
  formPost.setAttribute('class', 'add');
  formPost.setAttribute('id', 'formpost');

  const petName = document.createElement('input');
  petName.setAttribute('placeholder', 'Pet name');
  petName.setAttribute('type', 'text');
  petName.setAttribute('name', 'petName');
  petName.required = true;

  const petDescription = document.createElement('textarea');
  petDescription.setAttribute('placeholder', 'Describe your pet!');
  /*  petDescription.setAttribute('type', 'text'); */
  petDescription.setAttribute('name', 'petDescription');
  petDescription.required = true;

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

  newPostDiv.append(header, userName, formPost);
  header.append(nav);
  nav.append(iconArrow, pCreatePost);
  formPost.append(petName, petDescription, btnPost);

  return newPostDiv;
};
