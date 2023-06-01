/* coverage/Icov-report/index.html, click derecho y
reveal in file explorer, manda a carpeta alli abrir index */
// importamos la funcion que vamos a testear
import { home } from '../src/pages/home.js';
import { createAccount } from '../src/pages/createAccount.js';
import { signIn } from '../src/pages/signIn.js';
import { wall } from '../src/pages/wall.js';

jest.mock('../lib/functions', () => {
  const originalModule = jest.requireActual('../lib/functions');

  // Mock the default export and named export 'foo'
  return {
    __esModule: true,
    ...originalModule,
    authDetector: jest.fn(() => new Promise((resolve) => {
      resolve('mock@mock.cl');
    })),
    addPost: jest.fn(() => new Promise((resolve) => { resolve({ id: 'Value' }); })),
  };
});

describe();

// test de render de paginas
describe('Function home', () => {
  it('render home', () => {
    home();
  });
});
describe('Function createAccount', () => {
  it('render createAccount', () => {
    createAccount();
  });
});
describe('Function signIn', () => {
  it('render signIn', () => {
    signIn();
  });
});

// WALL TESTS

// display wall
describe('Function wall', () => {
  it('render wall', () => {
    wall();
  });
});

// wall es una función
describe('wall', () => {
  test('wall is a function', () => {
    expect(typeof wall).toBe('function');
  });
});

// si buttonCreatePost existe
test('buttonCreatePost exist', () => {

});
