import {
  exit, deletePost, auth, editPosts, getPost, likePost, dislikePost,
} from '../lib/index.js';

export const wall = (navigateTo) => {
  // ------------------------------------------------- Wallpaper
  const bodyimg = document.createElement('div');
  bodyimg.setAttribute('class', 'bodyimg');

  // ------------------------------------------------- Contenedor de muro/timeline
  const walldiv = document.createElement('div');
  walldiv.setAttribute('id', 'wall');
  walldiv.setAttribute('class', 'wall');

  const postsSection = document.createElement('section');
  postsSection.setAttribute('class', 'postsSection');

  const header = document.createElement('header');

  const logoImg = document.createElement('img');
  logoImg.setAttribute('src', 'img/logo.png');
  logoImg.setAttribute('alt', 'This is the logo. It is a dog paw inside a heart.');

  const nav = document.createElement('nav');
  nav.setAttribute('class', 'wallNav');

  const h1 = document.createElement('h1');
  h1.setAttribute('class', 'wallH1');
  h1.textContent = 'Be My Friend';

  const containerIcons = document.createElement('div');
  containerIcons.setAttribute('class', 'containerIcons');

  const iconHome2 = document.createElement('img');
  iconHome2.setAttribute('src', '../img/HOME.png');
  iconHome2.setAttribute('class', 'containerIcons');

  const iconSearch2 = document.createElement('img');
  iconSearch2.setAttribute('src', '../img/LUPA.png');
  iconSearch2.setAttribute('class', 'containerIcons');

  const iconAdd2 = document.createElement('img');
  iconAdd2.setAttribute('src', '../img/AÑADIRINACTIVO.png');
  iconAdd2.setAttribute('class', 'containerIcons');
  iconAdd2.addEventListener('mouseover', function () {
    this.src = 'img/AÑADIRACTIVO.png';
  });
  iconAdd2.addEventListener('mouseout', function () {
    this.src = 'img/AÑADIRINACTIVO.png';
  });
  iconAdd2.addEventListener('click', () => {
    navigateTo('/newpost');
  });

  const iconProfile2 = document.createElement('img');
  iconProfile2.setAttribute('src', '../img/PROFILE.png');
  iconProfile2.setAttribute('class', 'containerIcons');

  // ------------------------------------------------- Inicia menú de hamburguesa
  const navMenu = document.createElement('ul');
  navMenu.setAttribute('class', 'nav-menu');

  const navItem = document.createElement('li');
  navItem.setAttribute('class', 'nav-item btn-log-out');
  navItem.textContent = 'Log Out';

  navItem.addEventListener('click', () => {
    exit(navigateTo);
  });

  const divMenu = document.createElement('div');
  divMenu.setAttribute('class', 'hamburger');
  divMenu.addEventListener('click', () => {
    divMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  const span1 = document.createElement('span');
  span1.setAttribute('class', 'bar');

  const span2 = document.createElement('span');
  span2.setAttribute('class', 'bar');

  const span3 = document.createElement('span');
  span3.setAttribute('class', 'bar');
  // ------------------------------------------------- Termina menú de hamburguesa

  // ------------------------------------------------- Barra de íconos
  const footer = document.createElement('footer');
  footer.setAttribute('id', 'footerWall');

  const iconHome = document.createElement('img');
  iconHome.setAttribute('src', '../img/HOME.png');

  const iconSearch = document.createElement('img');
  iconSearch.setAttribute('src', '../img/LUPA.png');

  const iconAdd = document.createElement('img');
  iconAdd.setAttribute('src', '../img/AÑADIRINACTIVO.png');
  iconAdd.addEventListener('mouseover', function () {
    this.src = 'img/AÑADIRACTIVO.png';
  });
  iconAdd.addEventListener('mouseout', function () {
    this.src = 'img/AÑADIRINACTIVO.png';
  });
  iconAdd.addEventListener('click', () => {
    navigateTo('/newpost');
  });

  const iconProfile = document.createElement('img');
  iconProfile.setAttribute('src', '../img/PROFILE.png');

  const modalPaw = document.createElement('dialog');
  modalPaw.setAttribute('class', 'modalPaw');

  const paw = document.createElement('img');
  paw.setAttribute('src', 'img/matchvacio.png');

  setTimeout(() => {
    modalPaw.remove();
  }, 5000);

  bodyimg.append(walldiv, footer);
  walldiv.append(header, modalPaw, postsSection);
  modalPaw.append('Match to adopt ', paw);
  header.append(nav);
  nav.append(logoImg, h1, containerIcons, divMenu, navMenu);
  divMenu.append(span1, span2, span3);
  navMenu.append(navItem);
  footer.append(iconHome, iconSearch, iconAdd, iconProfile);
  containerIcons.append(iconHome2, iconSearch2, iconAdd2, iconProfile2);

  // ------------------------------------------------- Publicaciones/posts
  // Recuperamos la colección de los "post"
  getPost((queryData) => {
    postsSection.innerHTML = '';
    queryData.forEach((post) => {
      const postArticle = document.createElement('article');
      postArticle.setAttribute('class', 'postArticle');
      postArticle.setAttribute('data-id', post.id);

      const divUsersPointsEl = document.createElement('div');
      divUsersPointsEl.setAttribute('class', 'divUsersPointsEl');

      const username = document.createElement('span');
      username.textContent = post.data().userid;
      // obtenemos el valor de userid del display name para que se muestre en el post
      username.setAttribute('class', 'wallUsername');

      const iconoPoints = document.createElement('img');
      iconoPoints.setAttribute('src', '../img/menupuntos.png');
      iconoPoints.setAttribute('id', 'iconoPoints');

      // Menú de opciones Delete y Edit
      const menuPoints = document.createElement('dialog');
      menuPoints.setAttribute('class', 'menuPoints');

      const iconTrash = document.createElement('img');
      iconTrash.setAttribute('src', '../img/trash.png');
      iconTrash.setAttribute('id', 'iconTrash');

      const iconClose = document.createElement('img');
      iconClose.setAttribute('src', '../img/cancel.png');
      iconClose.setAttribute('class', 'iconClose');

      const liDelete = document.createElement('li');
      liDelete.setAttribute('class', 'liDelete');

      const iconEdit = document.createElement('img');
      iconEdit.setAttribute('src', '../img/pencil.png');
      iconEdit.setAttribute('id', 'iconEdit');

      const liEdit = document.createElement('li');
      liEdit.setAttribute('class', 'liEdit');
      // Termina menú de Delete y Edit

      const descriptionPet = document.createElement('p');
      descriptionPet.textContent = post.data().description;
      descriptionPet.setAttribute('class', 'descriptionPet');

      const reactionContainer = document.createElement('div');
      reactionContainer.setAttribute('class', 'reactionContainer');

      const namePet = document.createElement('p');
      namePet.textContent = post.data().petName;
      namePet.setAttribute('class', 'namePet');

      const likeHeart = document.createElement('img');
      likeHeart.setAttribute('src', post.data().like.includes(auth.currentUser.uid) ? 'img/likeactivo.png' : 'img/like.png');
      likeHeart.setAttribute('id', 'likeHeart');

      const likeCount = document.createElement('span');
      likeCount.setAttribute('class', 'likeCount');
      likeCount.textContent = post.data().like.length;

      const pawMatch = document.createElement('img');
      pawMatch.setAttribute('src', 'img/matchvacio.png');
      pawMatch.setAttribute('id', 'pawMatch');

      /* Modal para mensaje de confirmación de eliminar post */
      const modal = document.createElement('dialog');
      modal.setAttribute('id', 'modal');

      const ulModal = document.createElement('ul');
      ulModal.setAttribute('class', 'ulModal');

      const pPregunta = document.createElement('p');
      pPregunta.setAttribute('id', 'pPregunta');
      pPregunta.textContent = 'Delete this post?';

      const liConfirm = document.createElement('li');
      liConfirm.setAttribute('id', 'liConfirm');
      liConfirm.textContent = 'Delete';

      const liCancel = document.createElement('li');
      liCancel.setAttribute('class', 'liCancel ');
      liCancel.textContent = 'Cancel';
      liCancel.addEventListener('click', () => {
        modal.close();
      });

      // Al escoger Delete en el menú, se abre el primer modal
      liDelete.addEventListener('click', () => {
        menuPoints.close();
        modal.open = true;
      });

      // Al hacer clic en el menú de opciones, se cierra
      iconClose.addEventListener('click', () => {
        menuPoints.close();
      });

      /* Mensaje de eliminado confirmado */
      const modalConfirm = document.createElement('dialog');
      modalConfirm.setAttribute('id', 'modalConfirm');

      const pDeleted = document.createElement('p');
      pDeleted.textContent = 'Deleted';

      const iconCheck = document.createElement('img');
      iconCheck.setAttribute('src', '../img/check.png');

      divUsersPointsEl.append(username);
      reactionContainer.append(namePet, likeHeart, likeCount, pawMatch);
      postArticle.append(
        divUsersPointsEl,
        descriptionPet,
        reactionContainer,
      );

      modalConfirm.append(pDeleted, iconCheck);
      // ------------------------------------------condición para menu points
      if (post.data().userid === auth.currentUser.displayName) {
        divUsersPointsEl.append(iconoPoints);
        postArticle.append(menuPoints);
        liDelete.append(iconTrash, 'Delete');
        liEdit.append(iconEdit, 'Edit');
        menuPoints.append(iconClose, liDelete, liEdit);
        modal.append(pPregunta, ulModal);
        ulModal.append(liConfirm, liCancel);
      }

      pawMatch.addEventListener('click', () => {
        navigateTo('/adopt');
      });

      liConfirm.addEventListener('click', () => {
        // Eliminar el post
        deletePost(post.id);
        // Cerrar el modal de confirmación
        modal.close();
        // Mostrar el mensaje de eliminado confirmado
        modalConfirm.open = true;
        setTimeout(() => {
          modalConfirm.close();
        }, 3000); // 3000 milisegundos = 3 segundos
      });

      likeHeart.addEventListener('click', (e) => {
        e.preventDefault();

        if (post.data().like.includes(auth.currentUser.uid)) {
          dislikePost(post.id);
        } else {
          likePost(post.id);
        }
      });

      /* Modal para editar post */
      const modalEdit = document.createElement('dialog');
      modalEdit.setAttribute('class', 'modalEdit');

      const editContainer = document.createElement('div');
      editContainer.setAttribute('class', 'editContainer');

      const cancelEdit = document.createElement('img');
      cancelEdit.setAttribute('src', '../img/cancel.png');
      cancelEdit.setAttribute('class', 'iconClose');

      const pEditPost = document.createElement('p');
      pEditPost.setAttribute('id', 'pEditPost');
      pEditPost.textContent = 'Edit post';

      const editHr = document.createElement('hr');
      editHr.setAttribute('class', 'editHr');

      const profilePic = document.createElement('img');
      profilePic.setAttribute('src', '../img/profilepic.jpg');
      profilePic.setAttribute('class', 'profilePic');

      const userName = document.createElement('span');
      userName.setAttribute('class', 'userName');
      userName.textContent = post.data().userid;

      const formEdit = document.createElement('form');
      formEdit.setAttribute('class', 'formEdit');

      const inputEditName = document.createElement('input');
      inputEditName.setAttribute('type', 'text');
      inputEditName.setAttribute('id', 'inputEditName');
      inputEditName.required = true;
      inputEditName.value = `${post.data().petName}`;

      const inputEditDescription = document.createElement('textarea');
      inputEditDescription.setAttribute('id', 'inputEditDescription');
      inputEditDescription.setAttribute('cols', '15');
      inputEditDescription.setAttribute('rows', '6');
      inputEditDescription.required = true;
      inputEditDescription.value = post.data().description;

      const pEdit = document.createElement('p');
      pEdit.textContent = 'Edited';

      const modalConfirmEdit = document.createElement('dialog');
      modalConfirmEdit.setAttribute('id', 'modalConfirmEdit');

      const iconCheck2 = document.createElement('img');
      iconCheck2.setAttribute('src', '../img/check.png');

      const buttonEdit = document.createElement('button');
      buttonEdit.setAttribute('id', 'buttonEdit');
      buttonEdit.textContent = 'SAVE';

      modalConfirmEdit.append(pEdit, iconCheck2);

      liEdit.addEventListener('click', () => {
        menuPoints.close();
        modalEdit.open = true;
      });

      buttonEdit.addEventListener('click', (evento) => {
        evento.preventDefault();
        if (inputEditName.value !== '' && inputEditDescription.value !== '') {
          editPosts(post.id, inputEditName.value, inputEditDescription.value);
          modalEdit.close();
          modalConfirmEdit.open = true;
          setTimeout(() => {
            modalConfirmEdit.close();
          }, 3000);
        }
      });

      cancelEdit.addEventListener('click', () => {
        modalEdit.close();
      });

      iconoPoints.addEventListener('click', () => {
        menuPoints.open = true;
      });

      walldiv.append(modalConfirm, modalConfirmEdit);
      postsSection.append(postArticle, modal, modalEdit);
      modalEdit.append(editContainer, editHr, profilePic, userName, formEdit);
      formEdit.append(inputEditName, inputEditDescription, buttonEdit);
      editContainer.append(cancelEdit, pEditPost);
    });
  });

  return bodyimg;
};
/* function closeMenu() {
    divMenu.classList.remove("active");
    navMenu.classList.remove("active");
} */
/*   navItem.forEach(n => n.addEventListener("click", closeMenu)); */
