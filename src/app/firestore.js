/* eslint-disable dot-notation */
import { savePost } from './firebase.js';

export const postsFn = async () => {
  const formPost = document.getElementById('formDoYouWantPost');

  const post = formPost['wantPost'].value;
  savePost(post);

  formPost.reset();
  console.log('en efecto si funciona yeeeiii');
};
