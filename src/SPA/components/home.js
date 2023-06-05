/* eslint-disable max-len */
/* eslint-disable no-console */
import { saveTask, onGetPost, deletePost } from '../helpers/lib/Auth';

function home(/* navigateTo */) {
  const section = document.createElement('section');
  const menuAr = document.createElement('article');
  const contenedorIconos = document.createElement('div');
  const divInicio = document.createElement('div');
  const iconInicio = document.createElement('img');
  const labelInicio = document.createElement('label');
  const divCrear = document.createElement('div');
  const iconCrear = document.createElement('img');
  const labelCrear = document.createElement('label');
  const divPerfil = document.createElement('div');
  const iconPerfil = document.createElement('img');
  const labelPerfil = document.createElement('label');
  const divAlerts = document.createElement('div');
  const iconAlerts = document.createElement('img'); /* notificaciones */
  const labelAlerts = document.createElement('label');
  const divHuellasImg = document.createElement('div');
  const huellasImg = document.createElement('img');
  const postAndFooter = document.createElement('div');
  const postAr = document.createElement('article'); /* toda la sección */
  const divLogo = document.createElement('div');
  const logoPost = document.createElement('img');
  const divIconosLogo = document.createElement('div');
  const search = document.createElement('img');
  const comment = document.createElement('img');
  const formPost = document.createElement('form');
  const usuario = document.createElement('input');
  const inputPost = document.createElement('textarea');
  const buttonSend = document.createElement('button');
  const iconSend = document.createElement('img');
  const divPosts = document.createElement('div');
  const divInferior = document.createElement('div');
  const divIconosInferior = document.createElement('div');
  const iconoHomeInf = document.createElement('img');
  const iconoCreateInf = document.createElement('img');
  const iconoPerfilInf = document.createElement('img');
  const perroAr = document.createElement('article');
  const perroImg = document.createElement('img');
  const footerHome = document.createElement('footer');

  iconInicio.setAttribute('src', '../assets/iconHome.png');
  labelInicio.classList.add('text-label');
  labelInicio.textContent = 'Inicio';
  divInicio.classList.add('menu-iconos');
  divInicio.append(iconInicio, labelInicio);

  iconCrear.setAttribute('src', '../assets/iconCrear.png');
  labelCrear.classList.add('text-label');
  labelCrear.textContent = 'Crear';
  divCrear.classList.add('menu-iconos');
  divCrear.append(iconCrear, labelCrear);

  iconPerfil.setAttribute('src', '../assets/iconPerfil.png');
  labelPerfil.classList.add('text-label');
  labelPerfil.textContent = 'Perfil';
  divPerfil.classList.add('menu-iconos');
  divPerfil.append(iconPerfil, labelPerfil);

  iconAlerts.setAttribute('src', '../assets/iconHuella.png');
  labelAlerts.classList.add('text-label');
  labelAlerts.textContent = 'Notificaciones';
  divAlerts.classList.add('menu-iconos');
  divAlerts.append(iconAlerts, labelAlerts);
  contenedorIconos.classList.add('contenedor-icons');
  contenedorIconos.append(divInicio, divCrear, divPerfil, divAlerts);

  huellasImg.setAttribute('src', '../assets/huellasDiv.png');
  divHuellasImg.classList.add('div-huellas');
  divHuellasImg.append(huellasImg);
  menuAr.classList.add('menu');
  menuAr.append(contenedorIconos, divHuellasImg);

  logoPost.setAttribute('src', '../assets/logo-barra.png');
  search.classList.add('search-lupa');
  search.setAttribute('src', '../assets/iconSearch.png');
  comment.classList.add('comment-img');
  comment.setAttribute('src', '../assets/iconComment.png');
  divIconosLogo.classList.add('div-icons-logo');
  divIconosLogo.append(search, comment);
  divLogo.classList.add('div-logo');
  divLogo.append(logoPost, divIconosLogo); /* TODO */

  usuario.classList.add('usuario-post');
  usuario.setAttribute('id', 'task-user'); /* usuario */
  usuario.placeholder = 'Usuario';

  inputPost.classList.add('new-post');
  inputPost.setAttribute('id', 'task-description'); /* editar-post */
  inputPost.placeholder = '¿Qué deseas compartir hoy?';

  iconSend.classList.add('icon-send');
  iconSend.setAttribute('id', 'btn-task'); /* send-post */
  iconSend.setAttribute('src', '../assets/iconSend.png');
  buttonSend.classList.add('button-send');
  buttonSend.append(iconSend); /* todo */

  formPost.classList.add('form-post');
  formPost.setAttribute('id', 'task-form');
  formPost.append(usuario, inputPost, buttonSend); /* todo */

  divPosts.classList.add('container-post'); /* comentarios pasados */
  postAr.classList.add('post-container');
  iconoHomeInf.classList.add('icono-home-inf');
  iconoHomeInf.setAttribute('src', '../assets/iconHome.png');
  iconoCreateInf.classList.add('icono-create-inf');
  iconoCreateInf.setAttribute('src', '../assets/iconCrear.png');
  iconoPerfilInf.classList.add('icono-perfil-inf');
  iconoPerfilInf.setAttribute('src', '../assets/iconPerfil.png');
  divIconosInferior.classList.add('iconos-inferior-img');
  divIconosInferior.append(iconoHomeInf, iconoCreateInf, iconoPerfilInf);
  divInferior.classList.add('inferior');
  divInferior.append(divIconosInferior);
  postAr.append(divLogo, formPost, divPosts, divInferior); /* TODO */

  postAndFooter.classList.add('postAndFooter');
  postAndFooter.append(postAr, footerHome); /* todo */

  footerHome.classList.add('footer-home');
  footerHome.textContent = '@WebDulValLeo';

  perroImg.classList.add('perro-img');
  perroImg.setAttribute('src', '../assets/Perrito.png');
  perroAr.append(perroImg); /* todo */

  section.classList.add('section-home');
  section.append(menuAr, postAndFooter, perroAr);

  window.addEventListener('DOMContentLoaded', () => {
    const renderPost = (posts) => { // Se ejecuta una función con argumento Posts que es el array de objetos que representa los datos de los Posts en la colección de Firestore
      let html = '';
      posts.forEach((post) => { // recorro el array de objetos y en cada uno de los Post creo un nuevo elemento P para luego pintarlo en el HTML
        console.log(post.id);
        html += `
      <div>
      <h3>${post.usuarioPost}</h3>
      <p>${post.description}</p>
      <button class = 'btn-delete' data-id= '${post.id}'>Borrar Post</button>
      </div>
    
      `;
      });

      divPosts.innerHTML = html; // Se pinta el HTML en el div Posts

      const btnDeletPost = document.querySelectorAll('.btn-delete');
      btnDeletPost.forEach((btn) => {
        btn.addEventListener('click', (e) => {
          deletePost(e.target.dataset.id);
        });
      });
    };
    onGetPost(renderPost);
  });

  formPost.addEventListener('submit', (e) => {
    e.preventDefault();
    const description = formPost['task-description'];
    const usuarioPost = formPost['task-user'];
    const postPromise = saveTask(description.value, usuarioPost.value); // Declaro una nueva variable para la promesa, donde invoco la función y como parámetro ingreso el valor que se pone en el textarea
    // La función saveTask devuelve una promesa que se resuelve cuando la tarea se guarda en la base de datos
    postPromise.then(() => {
      console.log(postPromise);
    }).catch((error) => {
      console.log(error);
    });

    formPost.reset();
  });

  return section;
}

export default home;
