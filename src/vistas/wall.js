import {
  savePost, onGetPosts, deletePost, getPost, updatePost, addLike, removeLike,
} from '../lib/firestore.js';
import { auth } from '../lib/configFirebase.js';
// import { doc } from 'firebase/firestore';

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
  const errorPostTitle = document.createElement('p');
  const errorPostDescription = document.createElement('p');
  let editStatus = false;
  let idStatus = '';

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

  // agregar atributos//
  logo.setAttribute('src', 'images/logo.png');
  house.setAttribute('src', 'images/home.png');
  config.setAttribute('src', 'images/Settings.png');
  bell.setAttribute('src', 'images/bell.png');
  profile.setAttribute('src', 'images/user.png');
  newPost.setAttribute('src', 'images/post.png');
  popUpClose.setAttribute('src', 'images/close.png');

  // se agrega el textContent a botones
  popUpButton.textContent = 'Post';
  postTitle.textContent = 'Titulo';
  postDescription.textContent = 'Descripción';

  // clickeado para img de house
  house.addEventListener('click', () => {
    navigateTo('/wall');
  });
  // clickeado para img de config
  config.addEventListener('click', () => {
    navigateTo('/settings');
  });
  // clickeado para img de notificaciones
  bell.addEventListener('click', () => {
    navigateTo('/buildsite');
  });
  // clickeado para img de perfil
  profile.addEventListener('click', () => {
    navigateTo('/buildsite');
  });
  // Pop up para crear nuevo post
  newPost.addEventListener('click', () => {
    popUp.style.display = 'block';
  });
  // Boton para publicar nuevo post
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

    if (!editStatus) {
      if (textTitle.value !== '' && textDescription.value !== '') {
        await savePost(textTitle.value, textDescription.value);
        console.log('saved new post'); // Added: Log "saved new post"
      }
      formPost.reset();
      // editStatus = false;
      popUp.style.display = 'none';
    } else { // Added: Handle editStatus true
      updatePost(idStatus, { title: textTitle.value, description: textDescription.value });
      formPost.reset();
      popUp.style.display = 'none';
      editStatus = false;
    }
  });

  // Boton para cerrar pop up de nuevo post
  popUpClose.addEventListener('click', () => {
    popUp.style.display = 'none';
  });
  // Funcion para dar o quitar like
  // Funcion para crear el contenedor y tarjeta de cada post
  function createPostCard(title, description, name, fullDate, id, useruid, likes) {
    const resultTitle = document.createElement('h2');
    const containerPost = document.createElement('div');
    const resultDescription = document.createElement('p');
    const deleteButton = document.createElement('img');
    const resultUser = document.createElement('p');
    const resultFullDate = document.createElement('p');
    const yesDelete = document.createElement('button');
    const deletePopup = document.createElement('div');
    const noDelete = document.createElement('button');
    const editButton = document.createElement('img');
    const currentUser = auth.currentUser;
    const isOwner = currentUser && currentUser.uid === useruid;
    const like = document.createElement('img');
    const likeCounter = document.createElement('span');
    const likeContainer = document.createElement('div');
    const containerReactions = document.createElement('div');
    // se valida si el usuario es el dueño del post, para que
    // le aparezca la opcion de edit y delete(isOwner)
    containerReactions.append(
      deleteButton,
      editButton,
      deletePopup,
    );
    if (isOwner) {
      containerPost.append(
        resultUser,
        resultTitle,
        resultDescription,
        resultFullDate,
        containerReactions,
        like,
      );
    } else {
      containerPost.append(
        resultUser,
        resultTitle,
        resultDescription,
        resultFullDate,
        like,
      );
    }
    // Insertar textos
    resultTitle.textContent = title;
    resultDescription.textContent = description;
    resultUser.textContent = name;
    resultFullDate.textContent = fullDate;
    yesDelete.textContent = 'SI';
    noDelete.textContent = 'NO';
    deletePopup.textContent = '¿Estas segura de que deseas eliminar tu post?';
    popUpButton.innerText = 'Post';
    likeCounter.textContent = likes.length;

    // Crear clases
    resultTitle.classList.add('resultTitle');
    containerPost.classList.add('containerPost');
    resultDescription.classList.add('resultDescription');
    deleteButton.classList.add('deleteButton');
    resultUser.classList.add('resultUser');
    errorPostTitle.classList.add('errorsPosts');
    errorPostDescription.classList.add('errorsPosts');
    resultFullDate.classList.add('resultFullDate');
    deletePopup.classList.add('deletePopup');
    noDelete.classList.add('buttonNoDelete');
    yesDelete.classList.add('buttonYesDelete');
    editButton.classList.add('editButton');
    like.classList.add('like');
    likeCounter.classList.add('likeCounter');
    likeContainer.classList.add('likeContainer');
    containerReactions.classList.add('containerReactions');
    // likeLiked.classList.add('likeLiked');

    // Agregar atributos
    deleteButton.setAttribute('src', 'images/delete.png');
    yesDelete.setAttribute('data-id', id);
    editButton.setAttribute('data-id', id);
    like.setAttribute('data-id', id);
    editButton.setAttribute('src', 'images/edit.png');
    like.setAttribute('src', 'images/Like.png');
    like.setAttribute('id', 'likeButton');
    // likeLiked.setAttribute('src', 'images/LikeColor.png');
    if (likes.includes(currentUser.uid)) {
      like.setAttribute('src', 'images/LikeColor.png');
    }

    // funcion para que al momento de clickear se esconda el popup de delete
    noDelete.addEventListener('click', () => {
      deletePopup.style.display = 'none';
    });
    // Funcion del yesDelete, se importo deletePost
    yesDelete.addEventListener('click', ({ target: { dataset } }) => {
      deletePost(dataset.id);
      console.log(dataset.id);
    });

    // Boton para mostrar la confirmacion de eliminar post
    deleteButton.addEventListener('click', (e) => {
      e.preventDefault();
      deletePopup.style.display = 'block';
    });

    like.addEventListener('click', (e) => {
      e.preventDefault();
      if (likes.includes(currentUser.uid)) {
        removeLike(id);
        console.log('like removed');
      } else {
        addLike(id);
        console.log('like added');
      }
    });

    // Verificar si el usuario ya dio like a un post
    editButton.addEventListener('click', async ({ target: { dataset } }) => {
      popUp.style.display = 'block';
      const doc = await getPost(dataset.id);
      const post = doc.data();
      textTitle.value = post.title;
      textDescription.value = post.description;
      popUpButton.innerText = 'Actualizar';
      editStatus = true;
      idStatus = dataset.id;
    });

    // Agrupar por secciones
    deletePopup.append(yesDelete, noDelete);
    likeContainer.append(
      resultFullDate,
      like,
      likeCounter,
  
    );
    containerPost.append(
      resultUser,
      resultTitle,
      resultDescription,
      likeContainer,
    );
    sectionPosts.append(containerPost);
  }

  // funcion para organizar por post
  function showPosts(arrayPosts) {
    sectionPosts.innerHTML = '';
    arrayPosts.forEach((post) => {
      createPostCard(
        post.title,
        post.description,
        post.name,
        post.fullDate,
        post.id,
        post.useruid,
        post.likes,
      );
    });
  }
  onGetPosts(showPosts);

  // Agrupar por secciones

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
  section.append(sectionHeader, sectionPosts, popUp, sectionFooter);

  return section;
}

export default wall;
