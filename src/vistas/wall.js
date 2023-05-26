import { savePost, fetchPosts } from '../lib/firestore.js';

function wall(navigateTo) {
  const section = document.createElement('section');
  const sectionHeader = document.createElement('section');
  const sectionPosts = document.createElement('section');
  const sectionFooter = document.createElement('section');
  const sectionPopUp = document.createElement('section');
  const house = document.createElement('img');
  const logo = document.createElement('img');
  const config = document.createElement('img');
  const bell = document.createElement('img');
  const profile = document.createElement('img');
  const newPost = document.createElement('img');
  const popUp = document.createElement('div');
  const popUpButton = document.createElement('button');
  const formPost = document.createElement('form');
  const postTitle = document.createElement('h3');
  const postDescription = document.createElement('h3');
  const textTitle = document.createElement('input');
  const textDescription = document.createElement('textarea');

  // agregar clases//
  section.classList.add('section');
  sectionHeader.classList.add('sectionHeader');
  sectionPosts.classList.add('sectionPosts');
  sectionPopUp.classList.add('sectionPopUp');
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
  // agregar atributos//
  logo.setAttribute('src', 'images/logo.png');
  house.setAttribute('src', 'images/home.png');
  config.setAttribute('src', 'images/Settings.png');
  bell.setAttribute('src', 'images/bell.png');
  profile.setAttribute('src', 'images/user.png');
  newPost.setAttribute('src', 'images/post.png');

  popUpButton.textContent = 'Post';
  postTitle.textContent = 'Title';
  postDescription.textContent = 'Description';

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
    console.log(savePost(textTitle.value, textDescription.value));
    formPost.reset();
  });

  function createPostCard(title, description) {
    const resultTitle = document.createElement('h2');
    const containerPost = document.createElement('div');
    const resultDescription = document.createElement('p');

    resultTitle.textContent = title;
    resultDescription.textContent = description;
    containerPost.append(resultTitle, resultDescription);
    sectionPosts.append(containerPost);
  }

  async function showPosts() {
    try {
      await fetchPosts();
      console.log(resultPosts);

      resultPosts.forEach((post) => {
        createPostCard(post.title, post.description);
        console.log(createPostCard);
      });
    } catch (error) {
      console.error('Error al obtener los posts:', error);
    }
  }

  showPosts();
  // Agrupar por secciones//

  popUp.append(formPost);
  formPost.append(postTitle, textTitle, postDescription, textDescription, popUpButton);
  sectionPopUp.append(popUp);
  sectionHeader.append(house, logo, config);
  sectionFooter.append(bell, newPost, profile);
  section.append(sectionHeader, sectionPosts, sectionPopUp, sectionFooter);

  return section;
}

export default wall;
