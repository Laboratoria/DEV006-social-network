import { addDoc } from 'firebase/firestore';
import { colRef } from '../lib/firebaseAuth.js';

const feed = () => {
  const feedSection = document.createElement('section');
  feedSection.classList.add('feedSection');

  const profileNav = document.createElement('nav');
  profileNav.classList.add('profileNav');

  const logoArticle = document.createElement('article');
  logoArticle.classList.add('articleLogoSignUp');

  const logoImg = document.createElement('img');
  logoImg.setAttribute('src', './pages/images/LOGO.png');
  logoImg.setAttribute('alt', 'Logo: dos boletos para el cine. Uno morado y uno amarillo. Ambos dicen "Cinergia"');
  logoImg.classList.add('logoSignUp');

  const username = document.createElement('p');
  username.classList.add('userSpan');

  const postForm = document.createElement('form');
  postForm.classList.add('postForm');

  const postInput = document.createElement('input');
  postInput.classList.add('postInput');
  postInput.setAttribute('type', 'text');
  postInput.setAttribute('placeholder', '¿Qué quieres compartir hoy?');

  const postBtn = document.createElement('button');
  postBtn.classList.add('postBtn');
  postBtn.setAttribute('type', 'button');

  const postsSection = document.createElement('section');
  postsSection.classList.add('postsSection');

  postBtn.addEventListener('click', (e) => {
    e.preventDefault();

    addDoc(colRef, {
      post: postInput.value,
    })
      .then(() => {
        postForm.reset();
      });
  });

  feedSection.appendChild(profileNav);
  feedSection.appendChild(postForm);
  feedSection.appendChild(postsSection);
  profileNav.appendChild(logoArticle);
  profileNav.appendChild(username);
  logoArticle.appendChild(logoImg);
  postForm.appendChild(postInput);
  postForm.appendChild(postBtn);

  return feedSection;
};
export default feed;
