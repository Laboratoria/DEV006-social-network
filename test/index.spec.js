/**
 * @jest-environment jsdom
 */
// importamos la funcion que vamos a testear
import signup from '../src/vistas/signup.js';

//Validacion de funcion Snapshot de vista
describe('signup', () => {
  it('snapshot', () => {
    const vista = signup(() => {});
    const container = document.createElement('div');
    container.append(vista);
    expect(container).toMatchSnapshot();
  });
  //Validacion de boton de retorno a la pagina home 
  it('back', () => {
    const navigateTo = jest.fn();//(es una funcion mock)
    const vista = signup(navigateTo);
    const container = document.createElement('div');
    container.append(vista);
    const botonBack = container.querySelector('.buttonReturnSignup');
    botonBack.click();
    expect(navigateTo).toHaveBeenCalled();
  });
});
