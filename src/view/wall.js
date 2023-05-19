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

  const iconHomeHeader = document.createElement('img');
  iconHomeHeader.setAttribute('src', '../img/HOME.png');
  iconHomeHeader.setAttribute('class', 'containerIcons');

  const iconSearchHeader = document.createElement('img');
  iconSearchHeader.setAttribute('src', '../img/LUPA.png');
  iconSearchHeader.setAttribute('class', 'containerIcons');

  const iconAddHeader = document.createElement('img');
  iconAddHeader.setAttribute('src', '../img/AÑADIRINACTIVO.png');
  iconAddHeader.setAttribute('class', 'containerIcons');
  iconAddHeader.addEventListener('mouseover', () => {
    iconAddHeader.src = 'img/AÑADIRACTIVO.png';
  });
  iconAddHeader.addEventListener('mouseout', () => {
    iconAddHeader.src = 'img/AÑADIRINACTIVO.png';
  });
  iconAddHeader.addEventListener('click', () => {
    navigateTo('/newpost');
  });

  const iconProfileHeader = document.createElement('img');
  iconProfileHeader.setAttribute('src', '../img/PROFILE.png');
  iconProfileHeader.setAttribute('class', 'containerIcons');

  // ------------------------------------------------- Inicia menú de hamburguesa
  const navMenu = document.createElement('ul');
  navMenu.setAttribute('class', 'nav-menu');

  const navItem = document.createElement('li');
  navItem.setAttribute('class', 'nav-item btn-log-out');
  navItem.textContent = 'Log Out';

  // cuando el boton sea seleccionado recibira la función de log out y navegara a wall
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

  // --------------------------------------------- Footer con barra de íconos para mobile y tablet
  const footer = document.createElement('footer');
  footer.setAttribute('id', 'footerWall');

  const iconHome = document.createElement('img');
  iconHome.setAttribute('src', '../img/HOME.png');

  const iconSearch = document.createElement('img');
  iconSearch.setAttribute('src', '../img/LUPA.png');

  const iconAdd = document.createElement('img');
  iconAdd.setAttribute('src', '../img/AÑADIRINACTIVO.png');

  iconAdd.addEventListener('mouseover', () => {
    iconAdd.src = 'img/AÑADIRACTIVO.png';
  });
  iconAdd.addEventListener('mouseout', () => {
    iconAdd.src = 'img/AÑADIRINACTIVO.png';
  });
  // Icono de añadir un nuevo post el cual navegara a la vista de newpost
  iconAdd.addEventListener('click', () => {
    navigateTo('/newpost');
  });

  const iconProfile = document.createElement('img');
  iconProfile.setAttribute('src', '../img/PROFILE.png');
  // --------------------------------------------------- Termina footer de mobile y tablet

  // --------------------------------------- Modal de información sobre la huella de perrito
  const modalPaw = document.createElement('dialog');
  modalPaw.setAttribute('class', 'modalPaw');

  const paw = document.createElement('img');
  paw.setAttribute('src', 'img/matchvacio.png');

  // Nos permite ocultar el modal despúes de 5sg
  setTimeout(() => {
    modalPaw.remove();
  }, 5000);
  // Termina modal de información de huella

  // sección de appends
  bodyimg.append(walldiv, footer);
  walldiv.append(header, modalPaw, postsSection);
  modalPaw.append('Match to adopt ', paw);
  header.append(nav);
  nav.append(logoImg, h1, containerIcons, divMenu, navMenu);
  divMenu.append(span1, span2, span3);
  navMenu.append(navItem);
  footer.append(iconHome, iconSearch, iconAdd, iconProfile);
  containerIcons.append(iconHomeHeader, iconSearchHeader, iconAddHeader, iconProfileHeader);

  // ------------------------------------------------- Publicaciones/posts
  // Recuperamos la colección de los "post"
  getPost((queryData) => {
    postsSection.innerHTML = '';
    // se recorre el post para obtener la info que se requiere de la data
    queryData.forEach((post) => {
      // Creación de los nodos para el post
      const postArticle = document.createElement('article');
      postArticle.setAttribute('class', 'postArticle');
      postArticle.setAttribute('data-id', post.id);// Identificamos a cada post su id

      const divUsersPointsEl = document.createElement('div');
      divUsersPointsEl.setAttribute('class', 'divUsersPointsEl');

      const username = document.createElement('span');
      username.textContent = post.data().username;
      // obtenemos el valor de username del displayname para que se muestre en el post
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
      // obtenemos el valor de description de la data para que se muestre en el post
      descriptionPet.setAttribute('class', 'descriptionPet');

      // --------------- Contenedor de la parte inferior del post (nombre de mascota y reacciones)
      const reactionContainer = document.createElement('div');
      reactionContainer.setAttribute('class', 'reactionContainer');

      const namePet = document.createElement('p');
      namePet.textContent = post.data().petName;
      // obtenemos el valor de petname de la data para que se muestre en el post
      namePet.setAttribute('class', 'namePet');

      const likeHeart = document.createElement('img');
      /* Operador ternario para identificar si existe un usuario en la data de like.
      si existe se mostrara la img de activo, si no cambiara a la imagen de corazón blanco */
      likeHeart.setAttribute('src', post.data().like.includes(auth.currentUser.uid) ? 'img/likeactivo.png' : 'img/like.png');
      likeHeart.setAttribute('id', 'likeHeart');

      // span para mostrar la cantidad de like que se ha dado al post
      const likeCount = document.createElement('span');
      likeCount.setAttribute('class', 'likeCount');
      /* se obtiene la longitud de like,
       el cual obtiene los id de los usuarios que han dado click al corazón. */
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
        modal.close(); // al hacer click se cierra el modal
      });

      // Al escoger Delete en el menú, se abre el primer modal
      liDelete.addEventListener('click', () => {
        menuPoints.close();
        modal.open = true;
      });

      // Al hacer clic en la x , se cierra
      iconClose.addEventListener('click', () => {
        menuPoints.close();
      });

      // ------------------- Mensaje de eliminado confirmado
      const modalConfirm = document.createElement('dialog');
      modalConfirm.setAttribute('id', 'modalConfirm');

      const pDeleted = document.createElement('p');
      pDeleted.textContent = 'Deleted';

      const iconCheck = document.createElement('img');
      iconCheck.setAttribute('src', '../img/check.png');

      // ------------------- Fin de mensaje eliminado

      // sección de appends
      divUsersPointsEl.append(username);
      reactionContainer.append(namePet, likeHeart, likeCount, pawMatch);
      postArticle.append(
        divUsersPointsEl,
        descriptionPet,
        reactionContainer,
      );

      modalConfirm.append(pDeleted, iconCheck);

      // --------------condición para el menu points, solo lo veran en el post del usuario activo
      if (post.data().uid === auth.currentUser.uid) {
        divUsersPointsEl.append(iconoPoints);
        postArticle.append(menuPoints);
        liDelete.append(iconTrash, 'Delete');
        liEdit.append(iconEdit, 'Edit');
        menuPoints.append(iconClose, liDelete, liEdit);
        modal.append(pPregunta, ulModal);
        ulModal.append(liConfirm, liCancel);
      }

      // Evento de la huella para ir a adopt
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
        /* Si dentro del array de la key "like" existe el uid del usuario actual,
        entonces se quita el like */
        if (post.data().like.includes(auth.currentUser.uid)) {
          dislikePost(post.id);
        } else {
          likePost(post.id);
        }
      });

      // -------------------------------------------------------- Modal para editar post
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
      // insertamos el nombre del usuario
      userName.textContent = post.data().username;

      const formEdit = document.createElement('form');
      formEdit.setAttribute('class', 'formEdit');

      // En estos dos inputs de acontinuación se inserta la información del post a editar
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

      const buttonEdit = document.createElement('button');
      buttonEdit.setAttribute('id', 'buttonEdit');
      buttonEdit.textContent = 'SAVE';

      // Modal de edición confirmada
      const modalConfirmEdit = document.createElement('dialog');
      modalConfirmEdit.setAttribute('id', 'modalConfirmEdit');

      const pEdit = document.createElement('p');
      pEdit.textContent = 'Edited';

      const iconCheck2 = document.createElement('img');
      iconCheck2.setAttribute('src', '../img/check.png');
      // Fin de modal

      // Sección de addEventListener

      liEdit.addEventListener('click', () => {
        menuPoints.close();
        modalEdit.open = true;
      });

      buttonEdit.addEventListener('click', (evento) => {
        evento.preventDefault();
        // Condición para que los inputs no se guarden vacios
        if (inputEditName.value !== '' && inputEditDescription.value !== '') {
          // se edita el post, y se envian los valores del input para que sean actualizados
          editPosts(post.id, inputEditName.value, inputEditDescription.value);
          // Cerramos el modal
          modalEdit.close();
          // Abrimos modal de confirmación
          modalConfirmEdit.open = true;
          // lo cerramos a los 3 sg
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
      // Fin de addEventListener

      // sección de appends
      modalConfirmEdit.append(pEdit, iconCheck2);
      walldiv.append(modalConfirm, modalConfirmEdit);
      postsSection.append(postArticle, modal, modalEdit);
      modalEdit.append(editContainer, editHr, profilePic, userName, formEdit);
      formEdit.append(inputEditName, inputEditDescription, buttonEdit);
      editContainer.append(cancelEdit, pEditPost);
    });
  });

  return bodyimg;
};
