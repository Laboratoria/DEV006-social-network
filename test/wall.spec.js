/* *
 * @jest-environment jsdom
 */
import { deletePost } from '../src/lib/index.js';
import { wall } from '../src/view/wall.js';

jest.mock('firebase/firestore', () => ({
  getDocs: jest.fn().mockResolvedValue({
    docs: [
      {
        data: jest.fn().mockReturnValue({}),
        id: 'mockedId',
      },
    ],
  }),
  getFirestore: jest.fn().mockResolvedValue,
  collection: jest.fn().mockResolvedValue,
  orderBy: jest.fn().mockResolvedValue,
  query: jest.fn().mockResolvedValue,
}));

jest.mock('../src/lib/index.js', () => {
  const originalModule = jest.requireActual('../src/lib/index.js');
  return {
    __esModule: true,
    ...originalModule,
    deletePost: jest.fn(),
  };
});

// Test para rendrización de wall.js
describe('Se renderiza el componente para eliminar una publicación nueva', () => {
  let newWall;

  beforeEach(() => {
    newWall = wall();
  });

  /* borrar todos los mocks creados por Jest después de cada prueba, práctica necesaria */
  afterEach(jest.clearAllMocks);

  test('la fx deletePost recibe el id', () => {
    setTimeout(() => {
      const newLiConfirm = newWall.querySelector('#liConfirm');
      console.log(newLiConfirm);
      newLiConfirm.dispatchEvent(new Event('click'));
      expect(deletePost).toHaveBeenCalledWith('mockedId');
    }, 1000); // Espera 1 segundo antes de seleccionar el elemento
  });