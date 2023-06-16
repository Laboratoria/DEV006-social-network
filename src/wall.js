// import { async } from 'regenerator-runtime';
// import { doc } from 'firebase/firestore/lite';
// import { async } from 'regenerator-runtime';
import { deleteDocument, eventsCollection, fetchPost, onSnapshot, } from "./firebase/config";

function wall(navigateTo) {
  const headerWall = document.createElement("header");
  const ctnHeader = document.createElement("div");
  const imgHeader = document.createElement("img");
  const btnLogOut = document.createElement("button");
  const mainWall = document.createElement("main");
  const section1 = document.createElement("section");
  const newPost = document.createElement("div");
  const inputPost = document.createElement("input");
  const btnPost = document.createElement("button");
  const ctnPost = document.createElement("div");

  headerWall.setAttribute("id", "header");
  ctnHeader.setAttribute("id", "container-1");
  imgHeader.setAttribute("id", "img-logo");
  btnLogOut.setAttribute("id", "logOut");
  mainWall.setAttribute("id", "mainWall");
  section1.setAttribute("id", "section1");
  newPost.setAttribute("id", "divNewPost");
  inputPost.setAttribute("id", "inputNewPost");
  ctnPost.setAttribute("id", "post");
  btnPost.setAttribute("id", "btnPost");

  imgHeader.src = "./img/header-mobile2.png";
  imgHeader.alt = "header-logo";
  ctnHeader.appendChild(imgHeader);

  inputPost.placeholder = "¡Comparte tus eventos!";
  btnLogOut.textContent = "CERRAR SESION";



  

  window.addEventListener("DOMContentLoaded", async () => {
   
    onSnapshot(fetchPost, (querySnapshot) => {
    
      querySnapshot.forEach((doc) => {
        const liPost = document.createElement("p");
        liPost.setAttribute("id", "newPost");
        const postData = doc.data();
        console.log(postData);

        liPost.textContent = postData.publicaciones;
        ctnPost.appendChild(liPost);
        console.log(doc.id);

        //botón de borrar
        const buttonDelete = document.createElement("button");
        buttonDelete.setAttribute("class", "deletePublication");
        buttonDelete.textContent = "borrar";

        buttonDelete.addEventListener("click", async () => {
          const borrar = await deleteDocument(doc.id);
          console.log(borrar);
        });

        liPost.appendChild(buttonDelete);
      });
      
    });
  

    
  });



  btnPost.textContent = "PUBLICAR";
  btnPost.addEventListener("click", () => {
    const newPosts = inputPost.value;
    console.log(newPosts);
    eventsCollection(newPosts).then((posts) => {
      inputPost.value = "";

      return posts;
    });
  });

  // cerrar sesión
  btnLogOut.addEventListener("click", () => {
    navigateTo("/");
  });

  // ctnPost.appendChild(liPost);
  newPost.append(inputPost, btnPost);


  section1.append(newPost, ctnPost);

  headerWall.append(ctnHeader, btnLogOut);
  mainWall.append(headerWall, section1);
  return mainWall;
}

export default wall;
