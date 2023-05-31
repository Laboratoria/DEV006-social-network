/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */
import { GithubAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from './firebase.js';

export const githubFn = async (navigateTo) => {
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
