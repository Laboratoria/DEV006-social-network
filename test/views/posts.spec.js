// import { getAuth } from 'firebase/auth';
import { posts } from '../../src/views/posts.js';
// import { logoutFn } from '../../src/app/logout.js';
import {
//   savePost,
//   onGetPosts,
//   deletePost,
//   getPost,
//   updatePost,
} from '../../src/app/firebase.js';

jest.mock('firebase/auth', () => ({
  getAuth: () => ({
    currentUser: {
      displayName: 'user1',
      uid: 'user1',
    },
  }),
}));
jest.mock('../../src/app/logout.js', () => ({
  logoutFn: jest.fn(() => Promise.resolve()),
}));
jest.mock('../../src/app/firebase', () => ({
  savePost: jest.fn(),
  onGetPosts: jest.fn(),
  deletePost: jest.fn(),
  getPost: jest.fn(),
  updatePost: jest.fn(),
}));

it('posts debe ser una funcion', () => {
  expect(typeof posts).toBe('function');
});
it('Existe contenido en view posts', () => {
  const containerPosts = document.createElement('section');
  containerPosts.append(posts());
  const postsContent = containerPosts.querySelector('.container-posts');
  expect(postsContent).not.toBeNull();
});
it('PostUsers no es Null', () => {
  const containerPosts = document.createElement('section');
  containerPosts.append(posts());
  const usersPost = containerPosts.querySelector('#postsUsers');
  expect(usersPost.innerHTML).not.toBeNull();
});
