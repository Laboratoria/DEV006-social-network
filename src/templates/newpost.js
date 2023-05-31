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
  const opt1 = document.createElement('option');
  const opt2 = document.createElement('option');
  const opt3 = document.createElement('option');
  const opt4 = document.createElement('option');
  const opt5 = document.createElement('option');
  const opt6 = document.createElement('option');
  const opt7 = document.createElement('option');
  const opt8 = document.createElement('option');
  const opt9 = document.createElement('option');
  const opt10 = document.createElement('option');

  opt1.value = ['State'];
  opt1.text = ['State'];
  opt2.value = ['Happy'];
  opt2.text = ['Happy'];
  opt3.value = ['sad'];
  opt3.text = ['Sad'];
  opt4.value = ['angry'];
  opt4.text = ['Angry'];
  opt5.value = ['I love'];
  opt5.text = ['I love'];
  opt6.value = ['Whim'];
  opt6.text = ['Whim'];
  opt7.value = ['Blame'];
  opt7.text = ['Blame'];
  opt8.value = ['Satisfied'];
  opt8.text = ['Satisfied'];
  opt9.value = ['Healthy'];
  opt9.text = ['Healthy'];
  opt10.value = ['inspiring'];
  opt10.text = ['inspiring'];

  mood.append(opt1, opt2, opt3, opt4, opt5, opt6, opt7, opt8, opt9, opt10);
  console.log(mood[1].value, mood[1].text);


  const select = mood;
  console.log(select, 'select')
  const indexSelect = select.selectedIndex;
  console.log(indexSelect, "Valor");
  select.addEventListener('change',() => {
    const option = select.options[indexSelect];
     console.log(option.value + ': ' + option.text);
  });
  
  alertEmptyField.classList.add('alertEmptyField');

  contenedorNewPost.setAttribute('id', 'contenedorNewPost');
  textAreaTitle.setAttribute('id', 'textAreaTitle');
  textAreaReview.setAttribute('id', 'textAreaReview');
  mood.setAttribute('name', 'select');
  mood.setAttribute('id', 'select');

  titleNewPost.textContent = 'New Post';
  titleNewPost.classList.add('titleNewPost');

  // paragraphImg.textContent = 'Add Image';
  // paragraphImg.classList.add('paragraphImg');

  paragraphMood.textContent = 'Mood';
  paragraphMood.classList.add('paragraphMood');

  // getImage.classList.add('getImagen');
  // getImage.type = 'file';

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
    mood,
    // paragraphImg,
    // getImage,
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
    // const mood = form.sel;
    // const moodSelect = form.mood;
    // console.log(moodSelect, "aca esta el estado")
    // const moodValue = moodSelect.value;

    console.log(mood, 'mood');

    if (!data.identidad) {
      if (title.value.trim() === '' || description.value.trim() === '') {
        alertEmptyField.textContent = 'All text fields must be filled';
        return;
      } else {
        alertEmptyField.textContent = '';
      }

      // saveTask(title.value, description.value);
      // saveTask(title.value, description.value, { mood: moodValue });
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
        // mood: moodValue,
      });
      navigateTo('/wall');
    }

    form.reset();
  });

  return contenedorNewPost;
}

export default newPost;
