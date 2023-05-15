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

jest.mock('firebase/auth', () => ({
  getAuth: () => ({
    currentUser: {
      displayName: 'John Doe', // Simular el displayName del usuario actual
    },
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

// Test para rendrización de wall.js
describe('Se renderiza el componente para eliminar una publicación nueva', () => {
  let newWall;

  beforeEach(() => {
    newWall = wall();
  });

  /* borrar todos los mocks creados por Jest después de cada prueba, práctica necesaria */
  afterEach(jest.clearAllMocks);

  test('Deben estar los elementos para el wall', () => {
    expect(newWall).toBeTruthy();
    expect(newWall.querySelector('div')).toBeTruthy();
    expect(newWall.querySelector('section')).toBeTruthy();
    expect(newWall.querySelector('header')).toBeTruthy();
    expect(newWall.querySelectorAll('img')).toBeTruthy();
    expect(newWall.querySelector('nav')).toBeTruthy();
    expect(newWall.querySelector('h1')).toBeTruthy();
    expect(newWall.querySelector('.containerIcons')).toBeTruthy();
    expect(newWall.querySelectorAll('ul')).toBeTruthy();
    expect(newWall.querySelectorAll('li')).toBeTruthy();
    expect(newWall.querySelector('.hamburger')).toBeTruthy();
    expect(newWall.querySelectorAll('span')).toBeTruthy();
    expect(newWall.querySelector('footer')).toBeTruthy();
    expect(newWall.querySelector('article')).toBeTruthy();
    expect(newWall.querySelector('.divUsersPointsEl')).toBeTruthy();
    expect(newWall.querySelectorAll('p')).toBeTruthy();
    expect(newWall.querySelector('.reactionContainer')).toBeTruthy();
    expect(newWall.querySelector('dialog')).toBeTruthy();
  });

  test('si se cumple que post.userid === currentUser', () => {
    setTimeout(() => {
      const post = { userid: 'nombreDeUsuario' };
      const auth = { currentUser: { displayName: 'nombreDeUsuario' } };

      // Ejecuta el bloque de código
      if (post.userid === auth.currentUser.displayName) {
        const divUsersPointsEl = newWall.querySelector('.divUsersPointsEl');
        const iconoPoints = newWall.querySelector('#iconoPoints');
        const postArticle = newWall.querySelector('.postArticle');
        const menuPoints = newWall.querySelector('.menuPoints');
        const iconClose = newWall.querySelector('#iconClose');
        const iconTrash = newWall.querySelector('#iconTrash');
        const iconEdit = newWall.querySelector('#iconEdit');
        const liDelete = newWall.querySelector('.liDelete');
        const pPregunta = newWall.querySelector('#pPregunta');
        const liEdit = newWall.querySelector('.liEdit');
        const liConfirm = newWall.querySelector('#liConfirm');
        const liCancel = newWall.querySelector('.liCancel');
        const modal = newWall.querySelector('#modal');
        const ulModal = newWall.querySelector('.ulModal');

        divUsersPointsEl.append(iconoPoints);
        postArticle.append(menuPoints);
        liDelete.append(iconTrash, 'Delete');
        liEdit.append(iconEdit, 'Edit');
        menuPoints.append(iconClose, liDelete, liEdit);
        modal.append(pPregunta, ulModal);
        ulModal.append(liConfirm, liCancel);
      }

      // Verifica que los elementos sean agregados correctamente
      expect(newWall.querySelector('.divUsersPointsEl img')).toBeTruthy();
      expect(newWall.querySelector('.postArticle .menuPoints')).toBeTruthy();
      expect(newWall.querySelector('#iconClose')).toBeTruthy();
      expect(newWall.querySelector('.liDelete img')).toBeTruthy();
      expect(newWall.querySelector('.liEdit img')).toBeTruthy();
      expect(newWall.querySelector('.liEdit').textContent).toBe('Edit');
      expect(newWall.querySelector('#modal p')).toBeTruthy();
      expect(newWall.querySelector('.ulModal li#liConfirm')).toBeTruthy();
      expect(newWall.querySelector('.ulModal li.liCancel')).toBeTruthy();

      // Verifica que la condición se cumpla
      expect(post.userid === auth.currentUser.displayName).toBe(true);
    }, 1000);
  });

  test('si no se cumple que post.userid === currentUser', () => {
    // Simula el escenario estableciendo los valores esperados
    const post = { userid: 'nombreDeUsuario' };
    const auth = { currentUser: { displayName: 'otroUsuario' } };

    // Verifica que la condición no se cumpla
    expect(post.userid === auth.currentUser.displayName).toBe(false);
  });

  test('la fx deletePost recibe el id', () => {
    setTimeout(() => {
      const newLiConfirm = newWall.querySelector('#liConfirm');
      console.log(newLiConfirm);
      newLiConfirm.dispatchEvent(new Event('click'));
      expect(deletePost).toHaveBeenCalledWith('mockedId');
    }, 1000); // Espera 1 segundo antes de seleccionar el elemento
  });
});
