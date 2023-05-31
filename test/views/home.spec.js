import { home } from '../../src/views/home.js';

describe('funcion home', () => {
  it('consigue renderizar home', () => {
    home();
  });
  it('Al dar click en "Quiero Unirme" me lleva a register', () => {
    const navigateTo = jest.fn();
    const homeElement = home(navigateTo);
    const registerBtn = homeElement.querySelector('.btn-register');
    registerBtn.click();
    expect(navigateTo).toHaveBeenCalledWith('/register');
  });
  it('Al dar click en "Ya soy amigo" me lleva a login', () => {
    const navigateTo = jest.fn();
    const homeElement = home(navigateTo);
    const loginBtn = homeElement.querySelector('.btn-login');
    loginBtn.click();
    expect(navigateTo).toHaveBeenCalledWith('/login');
  });
});
