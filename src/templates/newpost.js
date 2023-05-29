/* eslint-disable no-else-return */
/* eslint-disable no-console */
import { saveTask, updateTask } from '../lib/firebase.js';
// import { ref } from 'firebase/storage';

function newPost(navigateTo, data) {
  console.log(data);
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
  const alertEmptyField = document.createElement('p');
  const buttonSave = document.createElement('button');

  alertEmptyField.classList.add('alertEmptyField');

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

  form.append(
    paragraphImg,
    getImage,
    buttonSave,
    paragraphTitle,
    textAreaTitle,
    paragraphReview,
    textAreaReview,
    alertEmptyField,
  );

  divNewPost.append(form);

  section.append(buttonReturn, titleNewPost, divNewPost);

  console.log(section);

  section.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = form.textAreaTitle;
    const description = form.textAreaReview;

    if (!data.identidad) {
      if (title.value.trim() === '' || description.value.trim() === '') {
        alertEmptyField.textContent = 'All text fields must be filled';
        return;
      } else {
        alertEmptyField.textContent = '';
      }

      saveTask(title.value, description.value);
      navigateTo('/wall');
    } else {
      if (title.value.trim() === '' || description.value.trim() === '') {
        alertEmptyField.textContent = 'All text fields must be filled';
        return;
      } else {
        alertEmptyField.textContent = '';
      }

      console.log(alertEmptyField);
      updateTask(data.identidad, {
        title: title.value,
        description: description.value,
      });
      navigateTo('/wall');
    }

    form.reset();
  });

  return section;
}

export default newPost;
