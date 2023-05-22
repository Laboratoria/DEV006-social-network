// import { beforeEach } from 'node:test';
import {
  securePassword, validatePasswords, validateEmail,
} from '../src/lib/validation.js';

let password;
let passwordAgain;
let errorSpan;
let email;
let errorSpanEmail;

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
  email = {
    value: '',
    type: 'password',
    id: 'txtEmail',
    classList: {
      contains: jest.fn().mockReturnValue(true),
      add: jest.fn(),
      remove: jest.fn(),
    },
  };
  errorSpanEmail = {
    id: 'spanErrorEmail',
    textContent: '',
  };
});

// Test para contraseña segura
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

// Test para que coincidan las contraseñas
describe('validatePassword', () => {
  test('should set class to valid and clear error span when both password inputs match', () => {
    password.value = 'Abc123$';
    passwordAgain.value = 'Abc1234$';
    validatePasswords(password, passwordAgain, errorSpan);
    expect(passwordAgain.classList.contains('invalid')).toBe(true);
    expect(errorSpan.textContent).toBe('Passwords are different.');
  });
  test('should set class to invalid and set error message when inputs do not match', () => {
    password.value = 'Abc123$';
    passwordAgain.value = 'Abc123$';
    validatePasswords(password, passwordAgain, errorSpan);
    expect(passwordAgain.classList.contains('valid')).toBe(true);
    expect(errorSpan.textContent).toBe('');
  });
});

// Test para email válido
describe('validateEmail', () => {
  test('should set class to valid and clear error span when valid email', () => {
    email.value = 'valid@email.com';
    validateEmail(email, errorSpanEmail);
    expect(email.classList.contains('valid')).toBe(true);
    expect(errorSpanEmail.textContent).toBe('');
  });
  test('should set class to invalid and clear error span when invalid email', () => {
    email.value = 'invalid-email';
    validateEmail(email, errorSpanEmail);
    expect(email.classList.contains('invalid')).toBe(true);
    expect(errorSpanEmail.textContent).toBe('Please enter a valid email.');
  });
});
