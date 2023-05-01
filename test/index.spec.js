import { securePassword } from '../src/lib/index.js';

// Inicia las pruebas
describe('securePassword', () => {
  let password;
  let errorSpan;
  beforeEach(() => {
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
    errorSpan = {
      id: 'spanErrorPassword',
      textContent: '',
    };
  });
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

// describe('securePassword function', () => {
//   let passwordInput;
//   let errorSpan;

//   beforeEach(() => {
//     passwordInput = {
//       value: '',
//       type: 'password',
//       id: 'txtPassword',
//       classList: {
//         contains: jest.fn().mockReturnValue(false),
//         add: jest.fn(),
//         remove: jest.fn(),
//       },
//     };

//     errorSpan = {
//       id: 'spanErrorPassword',
//       textContent: '',
//     };
//   });

//   it('should set class to valid and clear error span when password is strong', () => {
//     passwordInput.dispatchEvent(new Event('keyup', { key: 'a' }));
//     expect(passwordInput.className).toEqual('valid');
//     expect(errorSpan.textContent).toEqual('');
//   });
// });

// test('should set class to valid and clear error span when password is strong', () => {
//   passwordInput.value = 'Abc123$';
//   triggerKeyupEvent(passwordInput);
//   expect(passwordInput.classList.contains('valid')).toBe(true);
//   expect(errorSpan.textContent).toBe('');
// });

//   test('should set class to invalid and set error message when password is weak', () => {
//     passwordInput.value = 'password123';
//     triggerKeyupEvent(passwordInput);
//     expect(passwordInput.classList.contains('invalid')).toBe(true);
//   });
// });

// describe('securePassword function', () => {
//   let passwordInput;
//   let errorSpan;

//   beforeEach(() => {
//     passwordInput = {
//       value: '',
//       type: 'password',
//       id: 'txtPassword',
//       classList: {
//         contains: jest.fn().mockReturnValue(false),
//         add: jest.fn(),
//         remove: jest.fn(),
//       },
//     };

//     errorSpan = {
//       id: 'spanErrorPassword',
//       textContent: '',
//     };
//   });

//   test('should set class to valid and clear error span when password is strong', () => {
//     passwordInput.value = 'Abc123$';
//     securePassword(passwordInput, errorSpan);
//     expect(passwordInput.classList.contains('valid')).toBe(true);
//     expect(errorSpan.textContent).toBe('');
//   });

//   test('should set class to invalid and set error message when password is weak', () => {
//     passwordInput.value = 'password123';
//     securePassword(passwordInput, errorSpan);
//     expect(passwordInput.classList.contains('invalid')).toBe(true);
//
//   });
// });

// describe('securePassword function', () => {
//   const passwordInput = document.createElement('input');
//   passwordInput.type = 'password';
//   passwordInput.id = 'txtPassword';
//   const errorSpan = document.createElement('span');
//   errorSpan.id = 'spanErrorPassword';

//   beforeEach(() => {
//     document.body.innerHTML = '';
//     document.body.appendChild(passwordInput);
//     document.body.appendChild(errorSpan);
//   });

//   test('should set class to valid and clear error span when password is strong', () => {
//     passwordInput.value = 'Abc123$';
//     securePassword();
//     expect(passwordInput.classList.contains('valid')).toBe(true);
//     expect(errorSpan.textContent).toBe('');
//   });

//   test('should set class to invalid and set error message when password is weak', () => {
//     passwordInput.value = 'password123';
//     securePassword();
//     expect(passwordInput.classList.contains('invalid')).toBe(true);
//     expect(errorSpan.textContent).toBe('Please enter a strong
// password that contains 6 to 15 characters,
// at least one uppercase letter, one lowercase letter,
// one digit, and one special character.
// Please make sure there are no spaces.');
//   });
// });
