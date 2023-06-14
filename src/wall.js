//import { async } from 'regenerator-runtime';
import { doc } from 'firebase/firestore/lite';
import { eventsCollection,getPost,  } from './firebase/config';

function wall(navigateTo) {
  const headerWall = document.createElement('header');
  const ctnHeader = document.createElement('div');
  const imgHeader = document.createElement('img');
  const btnLogOut = document.createElement('button');
  const mainWall = document.createElement('main');
  const section1 = document.createElement('section');
  const newPost = document.createElement('div');
  const inputPost = document.createElement('input');
  const btnPost = document.createElement('button');
  const ctnPost = document.createElement('div');
  const liPost = document.createElement('p');

  headerWall.setAttribute('id', 'header');
  ctnHeader.setAttribute('id', 'container-1');
  imgHeader.setAttribute('id', 'img-logo');
  btnLogOut.setAttribute('id', 'logOut');
  mainWall.setAttribute('id', 'mainWall');
  section1.setAttribute('id', 'section1');
  newPost.setAttribute('id', 'divNewPost');
  inputPost.setAttribute('id', 'inputNewPost');
  ctnPost.setAttribute('id', 'post');
  liPost.setAttribute('id', 'newPost');
  btnPost.setAttribute('id', 'btnPost');

  imgHeader.src = './img/header-mobile2.png';
  imgHeader.alt = 'header-logo';
  ctnHeader.appendChild(imgHeader);

  inputPost.placeholder = '¡Comparte tus eventos!';
  btnLogOut.textContent = 'CERRAR SESION';

  // cerrar sesión
  btnLogOut.addEventListener('click', () => {
    navigateTo('/');
  });

  btnPost.textContent = 'PUBLICAR';
  btnPost.addEventListener('click', async() => {
    const newPosts = inputPost.value;
    console.log(newPosts);
    eventsCollection(newPosts)
      .then((posts) => {
        inputPost.value = '';
        // console.log(inputPost);
        return posts;
      });

   const eventsSnapshot= await getPost()
   

   eventsSnapshot.forEach(doc => {
    console.log(doc);
   })
   //const eventsList = eventsSnapshot.docs.map((doc) => doc.data()); 
   


   //return eventsList;
   
  });

  ctnPost.appendChild(liPost);
  newPost.append(inputPost, btnPost);

  section1.append(newPost, ctnPost);

  headerWall.append(ctnHeader, btnLogOut);
  mainWall.append(headerWall, section1);
  return mainWall;
}

// const btnPost = document.getElementById('btnPost');
// const idNewPost = document.getElementById('newPost');
/* const getEventDB = async () => {
  const eventsCollection = collection(db, 'eventos');
  const eventsSnapshot = await getDocs(eventsCollection);
  const eventsList = eventsSnapshot.docs.map((doc) => doc.data());

  return eventsList;
}; */

export default wall;
