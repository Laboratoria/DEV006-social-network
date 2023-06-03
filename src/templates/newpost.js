/* eslint-disable no-else-return */
/* eslint-disable no-console */
import { saveTask, updateTask } from '../lib/firebase.js';
// import { ref } from 'firebase/storage';

function newPost(navigateTo, data) {
  console.log(data);
  const contenedorNewPost = document.createElement('div');
  const buttonReturn = document.createElement('button');
  const titleNewPost = document.createElement('h1');
  const divNewPost = document.createElement('div');
  divNewPost.classList.add('divNewPost');
  const form = document.createElement('form');
  // const paragraphImg = document.createElement('p');
  // const getImage = document.createElement('input');
  const paragraphTitle = document.createElement('p');
  const textAreaTitle = document.createElement('textarea');
  const paragraphReview = document.createElement('p');
  const textAreaReview = document.createElement('textarea');
  const alertEmptyField = document.createElement('p');
  const buttonSave = document.createElement('button');
  const paragraphMood = document.createElement('p');
  const mood = document.createElement('select');
  const opt0 = document.createElement('option');
  const opt1 = document.createElement('option');
  const opt2 = document.createElement('option');
  const opt3 = document.createElement('option');
  const opt4 = document.createElement('option');
  const opt5 = document.createElement('option');
  const opt6 = document.createElement('option');
  const opt7 = document.createElement('option');
  const opt8 = document.createElement('option');
  const opt9 = document.createElement('option');

  opt0.disabled = true; // Deshabilitar la opción en blanco
  opt0.selected = true; // Establecerla como seleccionada
  opt0.text = 'Select a state'; // Texto de la opción en blanco
  opt1.value = ['Happy'];
  opt1.text = ['Happy'];
  opt2.value = ['Sad'];
  opt2.text = ['Sad'];
  opt3.value = ['Angry'];
  opt3.text = ['Angry'];
  opt4.value = ['I love'];
  opt4.text = ['I love'];
  opt5.value = ['Whim'];
  opt5.text = ['Whim'];
  opt6.value = ['Blame'];
  opt6.text = ['Blame'];
  opt7.value = ['Satisfied'];
  opt7.text = ['Satisfied'];
  opt8.value = ['Healthy'];
  opt8.text = ['Healthy'];
  opt9.value = ['Inspiring'];
  opt9.text = ['inspiring'];

  mood.append(opt0, opt1, opt2, opt3, opt4, opt5, opt6, opt7, opt8, opt9);
  // console.log(mood[1].value, mood[1].text);

  const select = mood;
  let selectedMood = '';
  console.log(select, 'select');
  select.addEventListener('change', (e) => {
    console.log(e.target.value);
    selectedMood = e.target.value;
    // select.style.display = mood ? 'none' : 'block';
  });

  alertEmptyField.classList.add('alertEmptyField');

  contenedorNewPost.setAttribute('id', 'contenedorNewPost');
  textAreaTitle.setAttribute('id', 'textAreaTitle');
  textAreaReview.setAttribute('id', 'textAreaReview');
  mood.setAttribute('name', 'select');
  mood.setAttribute('id', 'select');

  titleNewPost.textContent = 'New Post';
  titleNewPost.classList.add('titleNewPost');

  paragraphMood.textContent = 'Mood';
  paragraphMood.classList.add('paragraphMood');

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
    paragraphMood,
    select,
    buttonSave,
    paragraphTitle,
    textAreaTitle,
    paragraphReview,
    textAreaReview,
    alertEmptyField,
  );

  contenedorNewPost.append(buttonReturn, titleNewPost, form);

  contenedorNewPost.addEventListener('submit', (e) => {
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

      // saveTask(title.value, description.value);
      saveTask(title.value, description.value, selectedMood);
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

  return contenedorNewPost;
}

export default newPost;
