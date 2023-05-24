// import { saveTask } from '../lib/firebase.js';

function editProfile(navigateTo) {
  const section = document.createElement('section');
  const buttonReturn = document.createElement('button');

  buttonReturn.textContent = '.';
  buttonReturn.classList.add('returnNewPost');
  buttonReturn.addEventListener('click', () => {
    navigateTo('/wall');
  });

  section.append(buttonReturn);

  return section;
}

export default editProfile;
