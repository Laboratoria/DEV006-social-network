/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import { createUserWithEmailAndPassword, updateProfile } from '../../src/app/firebase.js';
import { signUpFn } from '../../src/app/signupForm.js';

jest.mock('../../src/app/firebase.js', () => ({
  createUserWithEmailAndPassword: jest.fn(),
  updateProfile: jest.fn(),
}));

describe('signUpFn', () => {
  let navigateTo;
  let signupFormMock;

  beforeEach(() => {
    navigateTo = jest.fn();
    signupFormMock = {
      'signup-email': { value: 'test@example.com' },
      'signup-password': { value: 'password123' },
      'signup-confirm-password': { value: 'password123' },
      'name-input': { value: 'John Doe' },
    };

    document.querySelector = jest.fn().mockReturnValue(signupFormMock);
    window.alert = jest.fn();
  });
  it('signUpFn debe ser una funcion', () => {
    expect(typeof signUpFn).toBe('function');
  });
  it('Se arrojara un alerta si las contrase;as no coinciden', () => {
    signupFormMock['signup-confirm-password'].value = 'differentPassword';
    signUpFn(navigateTo);
    expect(window.alert).toHaveBeenCalledWith('Las contraseñas no coinciden');
    expect(navigateTo).not.toHaveBeenCalled();
  });
  //   it('Alert de error', () => {

//   })
});
