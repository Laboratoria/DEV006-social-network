import { saveTask, onGetPost, deletePost } from "../helpers/lib/Auth";

function home(/* navigateTo */) {
  const section = document.createElement('section');
  const menuAr = document.createElement('article');
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
  const postAr = document.createElement('article'); /* toda la sección */
  const divLogo = document.createElement('div');
  const logoPost = document.createElement('img');
  const formPost = document.createElement('form');
  const usuario = document.createElement('input');
  const inputPost = document.createElement('textarea');
  const buttonSend = document.createElement('button');
  const iconSend = document.createElement('img');
  const divPosts = document.createElement('div');
  const perroAr = document.createElement('article');
  const perroImg = document.createElement('img');

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
  labelPerfil.textContent = 'Perfil';
  divPerfil.classList.add('menu-iconos');
  divPerfil.append(iconPerfil, labelPerfil);

  iconAlerts.setAttribute('src', '../assets/iconHuella.png');
  labelAlerts.textContent = 'Notificaciones';
  divAlerts.classList.add('menu-iconos');
  divAlerts.append(iconAlerts, labelAlerts);

  huellasImg.setAttribute('src', '../assets/huellasDiv.png');
  divHuellasImg.classList.add('div-huellas');
  divHuellasImg.append(huellasImg);
  menuAr.classList.add('menu');
  menuAr.append(divInicio, divCrear, divPerfil, divAlerts, divHuellasImg);

  logoPost.setAttribute('src', '../assets/logo-barra.png');
  divLogo.classList.add('div-logo');
  divLogo.append(logoPost); /* TODO */

  usuario.classList.add('usuario-post');
  usuario.setAttribute('id', 'task-user'); /* usuario */
  usuario.placeholder = 'Ingresa tu nombre de usuario';

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

  postAr.classList.add('post-container');
  postAr.append(divLogo, formPost); /* TODO */

  perroImg.classList.add('perro-img');
  perroImg.setAttribute('src', '../assets/Perrito.png');
  perroAr.append(perroImg); /* todo */
  divPosts.classList.add('container-post');

  section.classList.add('section-home');
  section.append(menuAr, postAr,divPosts, perroAr);

  window.addEventListener('DOMContentLoaded',  () =>{
    const renderPost = (posts) => { //Se ejecuta una función con argumento Posts que es el array de objetos que representa los datos de los Posts en la colección de Firestore
      let html = '';
      posts.forEach((post) => { //recorro el array de objetos y en cada uno de los Post creo un nuevo elemento P para luego pintarlo en el HTML
        console.log(post.id);
        html += `
      <div>
      <h3>${post.usuarioPost}</h3>
      <p>${post.description}</p>
      <button class = 'btn-delete' data-id= '${post.id}'>Borrar Post</button>
      </div>
    
      `;
      });
     
      divPosts.innerHTML = html; //Se pinta el HTML en el div Posts
      
      const btnDeletPost = document.querySelectorAll('.btn-delete');
      btnDeletPost.forEach(btn => {
        btn.addEventListener('click', (e)=> {
          deletePost(e.target.dataset.id);
        })
      })
    };
    onGetPost(renderPost);
  })


  formPost.addEventListener('submit',(e)=> {
    e.preventDefault();
    const description = formPost['task-description'];
    const usuarioPost = formPost['task-user'];
    const postPromise = saveTask(description.value, usuarioPost.value) //Declaro una nueva variable para la promesa, donde invoco la función y como parámetro ingreso el valor que se pone en el textarea
   //La función saveTask devuelve una promesa que se resuelve cuando la tarea se guarda en la base de datos
    postPromise.then(() =>{
      console.log(postPromise);
    }).catch((error)=> {
      console.log(error);
    })

    formPost.reset()
  }); 
  


  return section;
}

export default home;
