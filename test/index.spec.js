/**
 * @jest-environment jsdom
 */
// importamos la funcion que vamos a testear
import signup from '../src/vistas/signup.js';

describe('signup', () => {
  it('snapshot', () => {
    const vista = signup(() => {});
    const container = document.createElement('div');
    container.append(vista);
    expect(container).toMatchSnapshot();
  });
  it('back', () => {
    const navigateTo = jest.fn();
    const vista = signup(navigateTo);
    const container = document.createElement('div');
    container.append(vista);
    const botonBack = container.querySelector('.buttonReturnSignup');
    botonBack.click();
    expect(navigateTo).toHaveBeenCalled();
  });
});
