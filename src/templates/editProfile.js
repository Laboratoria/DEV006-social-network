// import { saveTask } from '../lib/firebase.js';

function editProfile(navigateTo) {
  const sectionEdit = document.createElement('section');
  const buttonReturn = document.createElement('button');
  const inputName = document.createElement('input');
  const inputDescription = document.createElement('input');
  const sel = document.createElement('select');
  const opt1 = document.createElement('option');
  const opt2 = document.createElement('option');


  opt1.value = 'happy';
  opt1.text = 'happy';
  opt2.value = 'sad';
  opt2.text = 'sad';

//   Happy
// Sad
// Angry
// I love
// Whim
// Blame
// Satisfied
// Healthy
// inspiring
Comfortable
  sel.add(opt1)
  sel.add(opt2)

  buttonReturn.textContent = '.';
  buttonReturn.classList.add('returnNewPost');
  buttonReturn.addEventListener('click', () => {
    navigateTo('/wall');
  });

  sectionEdit.setAttribute('id', 'section');

  sectionEdit.append(buttonReturn, sel);
  return sectionEdit;
}

export default editProfile;
