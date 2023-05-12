/* *
 * @jest-environment jsdom
 */
import { newpost } from '../src/view/newpost';
// import { addPost } from '../src/lib/index.js';

// jest.mock fx de Jest para crear simulaciones de módulos
// mock de getAuth se utiliza para crear el contenido de userName
jest.mock('firebase/auth', () => ({
  getAuth: () => ({
    currentUser: {
      displayName: 'John Doe', // Simular el displayName del usuario actual
    },
  }),
}));

// eslint-disable-next-line jest/no-focused-tests
describe('se crean estos elementos en el componente de newpost', () => {
  let newpostDiv;

  beforeEach(() => {
    newpostDiv = newpost();
  });

  it('should render newpost view', () => {
    expect(newpostDiv).toBeTruthy();
    expect(newpostDiv.querySelector('header')).toBeTruthy();
    expect(newpostDiv.querySelector('nav')).toBeTruthy();
    expect(newpostDiv.querySelector('h1')).toBeTruthy();
    expect(newpostDiv.querySelector('section')).toBeTruthy();
    expect(newpostDiv.querySelector('nav')).toBeTruthy();
    expect(newpostDiv.querySelector('hr')).toBeTruthy();
    expect(newpostDiv.querySelector('img')).toBeTruthy();
    expect(newpostDiv.querySelector('#pCreatePost')).toBeTruthy();
    expect(newpostDiv.querySelector('#formpost')).toBeTruthy();
    expect(newpostDiv.querySelector('.userContaier')).toBeTruthy();
    expect(newpostDiv.querySelector('.profilePic')).toBeTruthy();
    expect(newpostDiv.querySelector('.userName')).toBeTruthy();
    expect(newpostDiv.querySelector('input')).toBeTruthy();
    expect(newpostDiv.querySelector('textarea')).toBeTruthy();
    expect(newpostDiv.querySelector('button')).toBeTruthy();
  });

  /* borrar todos los mocks creados por Jest después de cada prueba */
  afterEach(jest.clearAllMocks);
});

// jest.mock('firebase/auth', () => ({
//   getAuth: () => ({
//     currentUser: {
//       displayName: 'John Doe', // Simular el displayName del usuario actual
//     },
//   }),
// }));

// Hacer mock de fx addDoc para comprobar que se ejecute al hacer clic en el submit del formulario
// jest.mock('firebase/firestore', () => ({
//     addPost:
// }));

describe('addPost', () => {
  jest.mock('../src/lib/index.js', () => {
    const originalModule = jest.requireActual('../src/lib/index.js');

    // Mock the default export and named export 'foo'
    return {
      __esModule: true,
      ...originalModule,
      addPost: () => Promise.resolve(),
    };
  });

  it();
});
