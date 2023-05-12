/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */
import { GithubAuthProvider, signInWithPopup } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js';
import { auth } from './firebase.js';

export const githubSignInFn = async (navigateTo) => {
  const githubLogin = document.querySelector('#loginGit');
  console.log(githubLogin);

  const provider = new GithubAuthProvider();

  try {
    const credentials = await signInWithPopup(auth, provider);
    console.log(credentials);
    navigateTo('/posts');
  } catch (error) {
    console.log(error);
  }
};
