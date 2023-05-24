/* eslint-disable no-console */
import { saveTask } from '../lib/firebase.js';
// import { ref } from 'firebase/storage';

function newPost(navigateTo, data) {
  console.log(data.post);
  const section = document.createElement('section');
  const buttonReturn = document.createElement('button');
  const titleNewPost = document.createElement('h1');
  const divNewPost = document.createElement('div');
  divNewPost.classList.add('divNewPost');
  const form = document.createElement('form');
  const paragraphImg = document.createElement('p');
  const getImage = document.createElement('input');
  // const buttonPlus = document.createElement('button');
  const paragraphTitle = document.createElement('p');
  const textAreaTitle = document.createElement('textarea');
  const paragraphReview = document.createElement('p');
  const textAreaReview = document.createElement('textarea');
  const buttonSave = document.createElement('button');

  section.setAttribute('id', 'section');
  textAreaTitle.setAttribute('id', 'textAreaTitle');
  textAreaReview.setAttribute('id', 'textAreaReview');

  titleNewPost.textContent = 'New Post';
  titleNewPost.classList.add('titleNewPost');

  paragraphImg.textContent = 'Add Image';
  paragraphImg.classList.add('paragraphImg');

  getImage.classList.add('getImagen');
  getImage.type = 'file';

  // buttonPlus.classList.add('buttonPlus');
  // buttonPlus.setAttribute('id', 'buttonPlus');

  paragraphTitle.textContent = 'Add Title';
  paragraphTitle.classList.add('paragraphTitle');

  paragraphReview.textContent = 'Add Description';
  paragraphReview.classList.add('paragraphReview');

  textAreaTitle.classList.add('textAreaTitle');
  textAreaTitle.textContent = data.post ? data.post.title : '';
  textAreaReview.classList.add('textAreaReview');
  textAreaReview.textContent = data.post ? data.post.description : '';
  buttonReturn.textContent = '.';
  buttonReturn.classList.add('returnNewPost');
  buttonReturn.addEventListener('click', () => {
    navigateTo('/wall');
  });

  buttonSave.textContent = 'Save';
  buttonSave.classList.add('save');
  // buttonSave.onclick =
  // function uploadimg(){
  //   const refi = firebase.storage().refi();
  //   console.log(refi)
  //   const file = document.querySelector('#buttonPlus').file[0];
  //   const name = new Date() +'-'+ file.name;
  //   if (file == null){
  //     alert('Seleccionar imagen')
  //   }else{
  //     const metadata = {
  //       contentType: file.type
  //     }
  //     const task = refi.chil(name).put(file, metadata);
  //     task
  //     .then(snapshot => snapshot.refi.getDownloadURL())
  //     .then( url => {
  //       console.log(url);
  //       alert('imagen upload successful');
  //       const imageElement = document.querySelector('imagen');
  //       imageElement.src = url;
  //     });
  //   }
  //   console.log(refi);
  // }

  // buttonSave.setAttribute('onclick', 'uploadimg()')
  //  buttonSave.addEventListener('click', () => {
  //   navigateTo('/wall');
  //  });

  form.append(
    paragraphImg,
    getImage,
    // buttonPlus,
    buttonSave,
    paragraphTitle,
    textAreaTitle,
    paragraphReview,
    textAreaReview,
  );

  divNewPost.append(form);

  section.append(buttonReturn, titleNewPost, divNewPost);

  console.log(section);

  section.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = form.textAreaTitle;
    const description = form.textAreaReview;

    saveTask(title.value, description.value).then(() => {
      navigateTo('/wall');
    });

    form.reset();
  });

  return section;
}

export default newPost;
