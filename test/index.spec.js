// import { beforeEach } from 'node:test';
import { securePassword, validatePasswords } from '../src/lib/index.js';

let password;
let passwordAgain;
let errorSpan;

beforeAll(() => {
  password = {
    value: '',
    type: 'password',
    id: 'txtPassword',
    classList: {
      contains: jest.fn().mockReturnValue(true),
      add: jest.fn(),
      remove: jest.fn(),
    },
  };
  passwordAgain = {
    value: '',
    type: 'password',
    id: 'txtPassword',
    classList: {
      contains: jest.fn().mockReturnValue(true),
      add: jest.fn(),
      remove: jest.fn(),
    },
  };
  errorSpan = {
    id: 'spanErrorPassword',
    textContent: '',
  };
});

// Inicia las pruebas
describe('securePassword', () => {
  test('should set class to valid and clear error span when password is strong', () => {
    password.value = 'Abc123$';
    securePassword(password, errorSpan);
    expect(password.classList.contains('valid')).toBe(true);
    expect(errorSpan.textContent).toBe('');
  });
  test('should set class to invalid and set error message when password is weak', () => {
    password.value = 'password123';
    securePassword(password, errorSpan);
    expect(password.classList.contains('invalid')).toBe(true);
    expect(errorSpan.textContent).toBe('Please enter a strong password that contains 6 to 15 characters, at least one uppercase letter, one lowercase letter, one digit, and one special character. Please make sure there are no spaces.');
  });
});

describe('validatePassword', () => {
  test('should set class to invalid and clear error span when both password inputs match', () => {
    password.value = 'Abc123$';
    passwordAgain.value = 'Abc1234$';
    validatePasswords(password, passwordAgain, errorSpan);
    expect(passwordAgain.classList.contains('invalid')).toBe(true);
    expect(errorSpan.textContent).toBe('Passwords are different.');
  });
  test('should set class to valid and set error message when inputs do not match', () => {
    password.value = 'Abc123$';
    passwordAgain.value = 'Abc123$';
    validatePasswords(password, passwordAgain, errorSpan);
    expect(passwordAgain.classList.contains('valid')).toBe(true);
    expect(errorSpan.textContent).toBe('');
  });
});
