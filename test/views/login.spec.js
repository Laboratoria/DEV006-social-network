/* eslint-disable no-console */
import { login } from '../../src/views/login.js';
import '../firebase-tests/firebase.js';
import { googleFn } from '../../src/app/googleFunction.js';
import { githubFn } from '../../src/app/githubFunction.js';
import { signInFn } from '../../src/app/signinForm.js';

jest.mock('../../src/app/googleFunction', () => ({
  googleFn: jest.fn(),
}));
jest.mock('../../src/app/githubFunction', () => ({
  githubFn: jest.fn(),
}));
jest.mock('../../src/app/signinForm', () => ({
  signInFn: jest.fn(),
}));

describe('login', () => {
  it('login debe ser una funcion', () => {
    expect(typeof login).toBe('function');
  });
  it('Existe form para ingresar', () => {
    const loginContainer = document.createElement('section');
    loginContainer.append(login());
    const formLogin = loginContainer.querySelector('.form-login');
    expect(formLogin).not.toBeNull();
  });
  it('signInFn se debe llamar al hacer click en Ingresar', () => {
    const navigateTo = jest.fn();
    const container = document.createElement('section');
    container.append(login(navigateTo));
    const formLogin = container.querySelector('#form-login');
    // const email = container.querySelector('#email-input');
    // const password = container.querySelector('#password-input');
    signInFn.mockResolvedValueOnce();
    // email.value = 'test@test.com';
    // password.value = '123456';
    formLogin.dispatchEvent(new Event('submit'));
    expect(signInFn).toHaveBeenCalledWith(navigateTo);
    // expect(email.value).toBe('test@test.com');
    // expect(password.value).toBe('123456');
  });
  it('Debe navegar a home al dar click en regresar', () => {
    const navigateTo = jest.fn();
    const loginElement = login(navigateTo);
    const returnBtn = loginElement.querySelector('#button-return');
    returnBtn.click();
    expect(navigateTo).toHaveBeenCalledWith('/');
  });
  it('Se debe ejecutar googleFn al hacer click en ingresar con google', () => {
    const navigateTo = jest.fn();
    const loginElement = login(navigateTo);
    const googleBtn = loginElement.querySelector('#login-google');
    googleBtn.click();
    expect(googleFn).toHaveBeenCalledWith(navigateTo);
  });
  it('Se debe ejecutar githubFn al dar click en ingresar con github', () => {
    const navigateTo = jest.fn();
    const loginElement = login(navigateTo);
    const githubBtn = loginElement.querySelector('#login-git');
    githubBtn.click();
    expect(githubFn).toHaveBeenCalledWith(navigateTo);
  });
});
