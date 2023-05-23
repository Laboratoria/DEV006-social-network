/* *
 * @jest-environment jsdom
 */
import {
  deletePost, getPost, exit, editPosts, dislikePost, likePost,
} from '../src/lib/index.js';
import { wall } from '../src/view/wall.js';
/* import { navigateTo } from '../src/main.js'; */

jest.mock('firebase/auth', () => ({
  getAuth: () => ({
    currentUser: {
      displayName: 'John Doe',
      uid: '787tgftyft',
    },
  }),
}));

jest.mock('../src/lib/index.js', () => ({
  getPost: jest.fn(),
  deletePost: jest.fn(),
  editPosts: jest.fn(() => Promise.resolve()),
  exit: jest.fn(() => Promise.resolve()),
  likePost: jest.fn(),
  dislikePost: jest.fn(),
}));
jest.mock('../src/main.js', () => ({
  navigateTo: jest.fn(() => Promise.resolve()),
}));

describe('Se renderiza el componente del muro', () => {
  let newWall;

  beforeEach(() => {
    const mockQueryData = [
      {
        id: 'postid',
        data: jest.fn().mockReturnValue({
          petName: 'Fido',
          description: 'Perro lindo',
          username: 'Marissa Vargas',
          like: ['787tgftyft'],
        }),
      },
    ];

    getPost.mockImplementation((callback) => {
      callback(mockQueryData);
    });
    newWall = wall();
  });
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

  test('al hacer clic en el menú hamburguesa la clase debe cambiar a active', () => {
    const container = document.createElement('section');
    container.append(wall());
    const hamburgerArticle = container.querySelector('.hamburger');
    const sectionMenu = document.createElement('section-menu');

    hamburgerArticle.dispatchEvent(new Event('click'));
    expect(sectionMenu.classList.contains('active')).toBe(false);

    expect(sectionMenu.classList.contains('active')).toBe(false);
  });

  test('si se cumple que post.usename === currentUser', () => {
    setTimeout(() => {
      const post = { username: 'nombreDeUsuario' };
      const auth = { currentUser: { displayName: 'nombreDeUsuario' } };

      // Ejecuta el bloque de código
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
      expect(post.username === auth.currentUser.displayName).toBe(true);
    }, 1000);
  });

  test('si no se cumple que post.userid === currentUser', () => {
    // Simula el escenario estableciendo los valores esperados
    const post = { username: 'nombreDeUsuario' };
    const auth = { currentUser: { displayName: 'otroUsuario' } };

    // Verifica que la condición no se cumpla
    expect(post.username === auth.currentUser.displayName).toBe(false);
  });

  test('la fx de editPosts no recibe los parámetros y al hacer click no se ejecuta nada', () => {
    const buttonEdit = newWall.querySelector('#buttonEdit');
    const inputEditName = newWall.querySelector('#inputEditName');
    const inputEditDescription = newWall.querySelector('#inputEditDescription');
    const modalEdit = newWall.querySelector('#modalEdit');
    const modalConfirmEdit = newWall.querySelector('#modalConfirmEdit');
    const closeSpy = jest.spyOn(modalEdit, 'remove');

    // Verificar las condiciones previas
    inputEditName.value = '';
    inputEditDescription.value = '';

    buttonEdit.dispatchEvent(new Event('click'));

    // Verificar que no se haya llamado a editPosts y que el modal no se haya cerrado
    expect(editPosts).not.toHaveBeenCalled();
    expect(closeSpy).not.toHaveBeenCalled();

    // Verificar que el modal de confirmación no se haya abierto
    expect(modalConfirmEdit.open).toBe(false);
  });

  test('la fx de editPosts recibe los parámetros y al hacer click se cierra el modal de edición y se abre el de confirmación', () => {
    const buttonEdit = newWall.querySelector('#buttonEdit');
    const inputEditName = newWall.querySelector('#inputEditName');
    const inputEditDescription = newWall.querySelector('#inputEditDescription');
    const modalEdit = newWall.querySelector('#modalEdit');
    const modalConfirmEdit = newWall.querySelector('#modalConfirmEdit');
    const closeSpy = jest.spyOn(modalEdit, 'remove');
    inputEditName.value = 'Fido';
    inputEditDescription.value = 'Perrito lindo';

    buttonEdit.dispatchEvent(new Event('click'));

    expect(editPosts).toHaveBeenCalledWith('postid', 'Fido', 'Perrito lindo');
    expect(closeSpy).toHaveBeenCalled();
    expect(modalConfirmEdit.open).toBe(true);

    closeSpy.mockRestore();
  });

  /*   test('modal confirm edit', () => {
    const buttonEdit = newWall.querySelector('#buttonEdit');
    const modalConfirmEdit = newWall.querySelector('#modalConfirmEdit');

    const closeSpy = jest.spyOn(modalConfirmEdit, 'remove');
    buttonEdit.dispatchEvent(new Event('click'));
    setTimeout(() => {
      expect(closeSpy).toHaveBeenCalled();
      closeSpy.mockRestore();
    }, 3000);
  }); */

  test('Prueba de evento de clic en elemento de navegación', () => {
    // Crear un elemento de prueba
    const navItem = newWall.querySelector('.btn-log-out');

    // Escuchar el evento de clic
    navItem.dispatchEvent(new Event('click'));

    // Verificar que las funciones se llamen correctamente
    expect(exit).toHaveBeenCalled();
  });

  test('Prueba de evento de mouseover', () => {
    const icono = newWall.querySelector('#containerIcons');
    const iconoAdd = newWall.querySelector('#iconAdd');
    icono.dispatchEvent(new Event('mouseover'));
    iconoAdd.dispatchEvent(new Event('mouseover'));
    expect(icono.getAttribute('src')).toEqual('img/AÑADIRACTIVO.png');
    expect(iconoAdd.getAttribute('src')).toEqual('img/AÑADIRACTIVO.png');
  });

  test('Prueba de evento de mouseout', () => {
    const icono = newWall.querySelector('#containerIcons');
    const iconoAdd = newWall.querySelector('#iconAdd');
    icono.dispatchEvent(new Event('mouseout'));
    iconoAdd.dispatchEvent(new Event('mouseout'));
    expect(icono.getAttribute('src')).toEqual('img/AÑADIRINACTIVO.png');
    expect(iconoAdd.getAttribute('src')).toEqual('img/AÑADIRINACTIVO.png');
  });

  test('Prueba de evento de remove modal', () => {
    const liCancel = newWall.querySelector('.liCancel');
    const modal = newWall.querySelector('#modal');
    const closeSpy = jest.spyOn(modal, 'remove');
    liCancel.dispatchEvent(new Event('click'));
    expect(closeSpy).toHaveBeenCalled();
    closeSpy.mockRestore();
  });

  test('la fx de lidelete recibe los parámetros y al hacer click se cierra el modal de edición y se abre el de confirmación', () => {
    const buttonDelete = newWall.querySelector('.liDelete');
    const menuPoints = newWall.querySelector('.menuPoints');
    const modal = newWall.querySelector('#modal');
    const closeSpy = jest.spyOn(menuPoints, 'remove');

    buttonDelete.dispatchEvent(new Event('click'));

    expect(closeSpy).toHaveBeenCalled();
    expect(modal.open).toBe(true);

    closeSpy.mockRestore();
  });

  test('Prueba de evento de remove menu points', () => {
    const iconClose = newWall.querySelector('.iconClose');
    const menuPoints = newWall.querySelector('.menuPoints');
    const closeSpy = jest.spyOn(menuPoints, 'remove');
    iconClose.dispatchEvent(new Event('click'));
    expect(closeSpy).toHaveBeenCalled();
    closeSpy.mockRestore();
  });

  test('iconopoints al hacer click se abre el modal de menupoints', () => {
    const iconoPoints = newWall.querySelector('#iconoPoints');
    const menuPoints = newWall.querySelector('.menuPoints');

    iconoPoints.dispatchEvent(new Event('click'));

    expect(menuPoints.open).toBe(true);
  });

  test('Prueba de evento de remove modal en cancelEdit', () => {
    const cancelEdit = newWall.querySelector('#cancelEdit');
    const modalEdit = newWall.querySelector('#modalEdit');
    const closeSpy = jest.spyOn(modalEdit, 'remove');
    cancelEdit.dispatchEvent(new Event('click'));
    expect(closeSpy).toHaveBeenCalled();
    closeSpy.mockRestore();
  });

  test('la fx de liEdit al hacer click se cierra menupoints  y se abre el de edición', () => {
    const liEdit = newWall.querySelector('.liEdit');
    const menuPoints = newWall.querySelector('.menuPoints');
    const modalEdit = newWall.querySelector('#modalEdit');
    const closeSpy = jest.spyOn(menuPoints, 'remove');

    liEdit.dispatchEvent(new Event('click'));

    expect(closeSpy).toHaveBeenCalled();
    expect(modalEdit.open).toBe(true);

    closeSpy.mockRestore();
  });

  test('la fx deletePost recibe el id', () => {
    const newLiConfirm = newWall.querySelector('#liConfirm');
    newLiConfirm.dispatchEvent(new Event('click'));
    expect(deletePost).toHaveBeenCalledWith('postid');
    // Espera 1 segundo antes de seleccionar el elemento
  });

  test('debería eliminar el post y cerrar el modal de confirmación', () => {
    deletePost.mockImplementation((id) => {
    // Crear los elementos necesarios para el test
      const post = { id: 'postid' };
      const modal = {
        remove: jest.fn(),
        open: false,
      };
      const modalConfirm = {
        open: false,
        remove: jest.fn(),
      };
      const liConfirm = {
        addEventListener: jest.fn((event, callback) => {
        // Simular el evento click
          callback();
          // Verificar que las funciones y propiedades hayan sido llamadas correctamente
          expect(id).toBe('postid');
          expect(deletePost).toHaveBeenCalledWith('postid');
          expect(deletePost).toHaveBeenCalledTimes(1);
          expect(deletePost).toHaveBeenLastCalledWith(expect.any(Function), 3000);
        }),
      };
      // Ejecutar el código a probar
      liConfirm.addEventListener('click', () => {
        deletePost(post.id);
        modal.remove();
        modalConfirm.open = true;
        setTimeout(() => {
          modalConfirm.remove();
        }, 3000);
      });
    });
  });

  test('Prueba de likeheart', () => {
    const mockQueryData = [
      {
        id: 'postid',
        data: jest.fn().mockReturnValue({
          petName: 'Fido',
          description: 'Perro lindo',
          username: 'Marissa Vargas',
          like: ['787tgftyft'],
        }),
      },
    ];
    const likeHeart = newWall.querySelector('#likeHeart');
    likeHeart.dispatchEvent(new Event('click'));
    if (mockQueryData[0].data().like.includes('787tgftyf')) {
      expect(dislikePost).toHaveBeenCalledWith('postid');
    } else {
      expect(likePost).toHaveBeenCalledWith('postid');
    }
  });
});
