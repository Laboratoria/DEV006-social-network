// import { signInWithPopup } from 'firebase/auth';
import { googleFn } from '../../src/app/googleFunction.js';

jest.mock('../../src/app/imports.js', () => ({
  signInWithPopup: jest.fn(),
}));

describe('googleFn', () => {
  it('googleFn debe ser una funcion', () => {
    expect(typeof googleFn).toBe('function');
  });
  //   it('Debe validar al usuario registrado con Google y mostrar un alert', async () => {
  //     const mockCredentials = {
  //       user: {
  //         displayName: 'Juan',
  //       },
  //     };
  //     signInWithPopup.mockResolvedValue(mockCredentials);
  //     const navigateTo = jest.fn();
  //     await googleFn(navigateTo);
  //     expect(signInWithPopup).toHaveBeenCalledWith(expect.anything(), expect.anything());
  //     expect(navigateTo).toHaveBeenCalledWith('/posts');
  //   });
  //   test('debería manejar un error y mostrarlo en la consola', async () => {
  //     const mockError = new Error('Error en Firebase');

  //     // Mockeamos la función signInWithPopup para que lance un error
  //     signInWithPopup.mockRejectedValue(mockError);
  //     const mockConsoleLog = jest.spyOn(console, 'log').mockImplementation();

  //     // Llamamos a la función googleFn
  //     await googleFn();

//     // Verificamos que se haya mostrado el error en la consola
//     expect(mockConsoleLog).toHaveBeenCalledWith(mockError);
//   });
});
