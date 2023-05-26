import home from '../src/views/home.js';

describe('funcion home', () => {
  const navigateTo = jest.fn();
  document.body.append(home(navigateTo));
  it('consigue renderizar home', () => {
    home();
  });
  it('Al dar click en "Quiero Unirme" me lleva a register', () => {
    const register = document.querySelector('.btn-register');
    register.click();
    expect(navigateTo).toHaveBeenCalledWith('/register');
  });
  it('Al dar click en "Ya soy amigo" me lleva a login', () => {
    const btn = document.querySelector('.btn-login');
    btn.click();
    expect(navigateTo).toHaveBeenCalledWith('/login');
  });
});
