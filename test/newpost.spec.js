/* *
 * @jest-environment jsdom
 */
import { addPost } from '../src/lib/index.js';
import { newpost } from '../src/view/newpost';
// import { addPost } from '../src/lib/index.js';

// jest.mock fx de Jest para crear simulaciones de módulos
// Mock de getAuth se utiliza para crear el contenido de userName
jest.mock('firebase/auth', () => ({
  getAuth: () => ({
    currentUser: {
      displayName: 'John Doe', // Simular el displayName del usuario actual
      uid: '123',
    },
  }),
}));
// Mock de addPost para corroborar si recibe los argumentos
jest.mock('../src/lib/index.js', () => {
  const originalModule = jest.requireActual('../src/lib/index.js');
  return {
    __esModule: true,
    ...originalModule,
    addPost: jest.fn(() => Promise.resolve()),
    /* el mock debe devolver una fx que imite el comportamiento original de la misma
    en nuestro caso, imitar que recibe estos dos params */
  };
});

// Test para rendrización de newpost.js
describe('Se renderiza el componente para crear una publicación nueva', () => {
  let newpostDiv;

  beforeEach(() => {
    newpostDiv = newpost();
  });

  /* borrar todos los mocks creados por Jest después de cada prueba, práctica necesaria */
  afterEach(jest.clearAllMocks);

  test('deben de estar estos elementos en el navegador', () => {
    expect(newpostDiv).toBeTruthy();
    expect(newpostDiv.querySelector('header')).toBeTruthy();
    expect(newpostDiv.querySelector('nav')).toBeTruthy();
    expect(newpostDiv.querySelector('h1')).toBeTruthy();
    expect(newpostDiv.querySelector('section')).toBeTruthy();
    expect(newpostDiv.querySelector('nav')).toBeTruthy();
    expect(newpostDiv.querySelector('hr')).toBeTruthy();
    expect(newpostDiv.querySelector('img')).toBeTruthy();
    expect(newpostDiv.querySelector('#pCreatePost')).toBeTruthy();
    expect(newpostDiv.querySelector('.formpost')).toBeTruthy();
    expect(newpostDiv.querySelector('.userContaier')).toBeTruthy();
    expect(newpostDiv.querySelector('.profilePic')).toBeTruthy();
    expect(newpostDiv.querySelector('.userName')).toBeTruthy();
    expect(newpostDiv.querySelector('input')).toBeTruthy();
    expect(newpostDiv.querySelector('textarea')).toBeTruthy();
    expect(newpostDiv.querySelector('button')).toBeTruthy();
  });

  test('la fx de agregar publicación recibe los datos', () => {
    const form = newpostDiv.querySelector('.formpost');
    const inputName = newpostDiv.querySelector('.petName');
    const inputDescription = newpostDiv.querySelector('.petDescription');
    inputName.value = 'Fido';
    inputDescription.value = 'Un perro lindo.';

    form.dispatchEvent(new Event('submit'));
    expect(addPost).toHaveBeenCalledWith('Fido', 'Un perro lindo.');
  });

  test('debe de reiniciarse el formulario de "Create post" al submit en el botón "Post"', () => {
    const form = newpostDiv.querySelector('.formpost');
    const resetSpy = jest.spyOn(form, 'reset');

    form.dispatchEvent(new Event('submit'));
    setTimeout(() => {
      expect(resetSpy).toHaveBeenCalled();
      resetSpy.mockRestore();
    }, 1000);
    /* setTimeout para que el test espere 1s para corroborar si se ejecuta
    esta acción. Es así porque antes hay una promesa:
    la promesa debe ser resuelta antes de resetear el formulario */
  });

  test('debe de navegar hacia el muro al hacer clic en "Post"', () => {
    const form = newpostDiv.querySelector('.formpost');
    const navigateMock = jest.fn();

    form.dispatchEvent(new Event('submit'));
    setTimeout(() => {
      expect(navigateMock).toHaveBeenCalledWith('/wall');
      navigateMock.mockRestore();
    }, 2000);
  });
});
