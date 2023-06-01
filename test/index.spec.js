// importamos la funcion que vamos a testear
/* coverage/Icov-report/index.html, click derecho y
reveal in file explorer, manda a carpeta alli abrir index */
import { home } from '../src/pages/home.js';
import { createAccount } from '../src/pages/createAccount.js';
import { signIn } from '../src/pages/signIn.js';
import { wall } from '../src/pages/wall.js';

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
test('buttonCreatePost exist', ()=>{
  
})
