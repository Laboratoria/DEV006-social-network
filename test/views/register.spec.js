// import { createUserWithEmailAndPassword, updateProfile, auth } from 'firebase/auth';
import { register } from '../../src/views/register.js';
import { signUpFn } from '../../src/app/signupForm.js';
import { googleFn } from '../../src/app/googleFunction.js';
import { githubFn } from '../../src/app/githubFunction.js';

jest.mock('firebase/auth', () => ({
  createUserWithEmailAndPassword: jest.fn(),
  updateProfile: jest.fn(),
  auth: jest.fn(),
}));
jest.mock('../../src/app/signupForm', () => ({
  signUpFn: jest.fn(),
}));
jest.mock('../../src/app/googleFunction', () => ({
  googleFn: jest.fn(),
}));
jest.mock('../../src/app/githubFunction', () => ({
  githubFn: jest.fn(),
}));

describe('register', () => {
  it('Debe ser una funcion', () => {
    expect(typeof register).toBe('function');
  });
  it('Existe form de registro', () => {
    const registerContainer = document.createElement('section');
    registerContainer.append(register());
    const formRegister = registerContainer.querySelector('.form-register');
    expect(formRegister).not.toBeNull();
  });
  it('Se debe llamar a signUpFn al enviarse el form', () => {
    const navigateTo = jest.fn();
    const registerContainer = document.createElement('section');
    registerContainer.append(register(navigateTo));
    const formRegister = registerContainer.querySelector('.form-register');
    const email = registerContainer.querySelector('#signup-email');
    const password = registerContainer.querySelector('#signup-password');
    signUpFn.mockResolvedValueOnce();
    email.value = 'test@test.com';
    password.value = '123456';
    formRegister.dispatchEvent(new Event('submit'));
    expect(signUpFn).toHaveBeenCalledWith(navigateTo);
    expect(email.value).toBe('test@test.com');
    expect(password.value).toBe('123456');
  });
  it('Al dar click en return debe navegar a home', () => {
    const navigateTo = jest.fn();
    const registerElement = register(navigateTo);
    const returnBtn = registerElement.querySelector('.img-return-register');
    returnBtn.click();
    expect(navigateTo).toHaveBeenCalledWith('/');
  });
  it('Al dar click en registrar con google se ejecuta googleFn', () => {
    const navigateTo = jest.fn();
    const registerElement = register(navigateTo);
    const googleBtn = registerElement.querySelector('.register-google-register');
    googleBtn.click();
    expect(googleFn).toHaveBeenCalledWith(navigateTo);
  });
  it('Al dar click en registrar con github se ejecuta githubFn', () => {
    const navigateTo = jest.fn();
    const registerElement = register(navigateTo);
    const githubBtn = registerElement.querySelector('.register-git-register');
    githubBtn.click();
    expect(githubFn).toHaveBeenCalledWith(navigateTo);
  });
});
