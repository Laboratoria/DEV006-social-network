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

// describe('posts', () => {
//   let postsSection;

//   beforeEach(() => {
//     postsSection = posts();
//   });

//   afterEach(jest.clearAllMocks);

it('posts debe ser una funcion', () => {
  expect(typeof posts).toBe('function');
});
it('Existe contenido en view posts', () => {
  const containerPosts = document.createElement('section');
  containerPosts.append(posts());
  const postsContent = containerPosts.querySelector('.container-posts');
  expect(postsContent).not.toBeNull();
});
//   it('El html creado no debe estar vacio', () => {
//     const querySnapshot = [
//       {
//         data: () => ({
//           authorId: 'user1',
//           name: 'John Doe',
//           date: '2023-05-30',
//           post: 'This is the first post',
//           likes: [],
//         }),
//         id: 'post1',
//       },
//       {
//         data: () => ({
//           authorId: 'user2',
//           name: 'Jane Smith',
//           date: '2023-05-31',
//           post: 'This is the second post',
//           likes: [],
//         }),
//         id: 'post2',
//       },
//     ];
//     onGetPosts.mockImplementationOnce((callback) => {
//       callback(querySnapshot);
//     });
//     const callback = jest.fn();
//     postsSection.querySelector('.container-posts').innerHTML = '';
//     onGetPosts(callback);
//     expect(postsSection.querySelector('.container-posts').innerHTML).not.toBe('');
//   });
// });
