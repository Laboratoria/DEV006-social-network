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
}));

jest.mock('../src/lib/index.js', () => {
  const originalModule = jest.requireActual('../src/lib/index.js');
  return {
    __esModule: true,
    ...originalModule,
    deletePost: jest.fn((id) => originalModule.deletePost(id)),
  };
});
describe('Se renderiza el componente para eliminar una publicación nueva', () => {
  let newWall;

  beforeEach(() => {
    newWall = wall();
  });

  /* borrar todos los mocks creados por Jest después de cada prueba, práctica necesaria */
  afterEach(jest.clearAllMocks);

  test('la fx deletePost recibe el id', () => {
    const newLiConfirm = newWall.querySelector('.liConfirm');

    newLiConfirm.dispatchEvent(new Event('click'));
    expect(deletePost).toHaveBeenCalledWith('mockedId');
  });
});
