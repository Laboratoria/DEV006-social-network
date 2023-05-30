/* eslint-disable no-console */
// import { signInFn } from '../../src/app/signinForm.js';
// import { auth } from '../../src/app/firebase.js';
import '../firebase-tests/firebase.js';
// import render from '../../src/render.js';
import login from '../../src/views/login.js';

describe('login', () => {
  const navigateTo = jest.fn();
  let root = '';

  beforeEach(() => {
    root = document.createElement('div');
    document.body.appendChild(root);
  });
  afterEach(() => {
    document.body.removeChild(root);
  });
  it('consigue renderizar login', () => {
    root.appendChild(login());
    login();
  });
  it('Form login existe', () => {
    root.appendChild(login());
    const form = document.querySelector('#form-login');
    expect(form.innerHTML).not.toBe('');
  });
  it('Debe enviarme a la pagina anterior al dar click en back', () => {
    root.appendChild(login(navigateTo));
    // document.body.append(login(navigateTo));
    const btnBack = document.querySelector('.button-return');
    btnBack.click();
    expect(navigateTo).toHaveBeenCalledWith('/');
  });
});

// global.firebase = {
//   initializeApp: () => console.log('hi firebase'),
//   auth: () => ({
//     signInWithEmailAndPassword: () => Promise.resolve(),
//     createUserWithEmailAndPassword: () => Promise.resolve(),
//     onAuthStateChanged: () => Promise.resolve(),
//   }),
//   firestore: () => Promise.resolve(),
// };

// describe('funcion login', () => {
//   const navigateTo = jest.fn();
//   it('consigue renderizar login', () => {
//     login();
//   });
//   it('Form login existe', () => {
//     const signinForm = document.querySelector('#form-login');
//     expect(signinForm).toBeDefined();
//     expect(signinForm.innerHTML).not.toBe('');
//   });
//   it('Debe enviarme a la pagina anterior al dar click en back', () => {
//     document.body.append(login(navigateTo));
//     const btnBack = document.querySelector('.button-return');
//     btnBack.click();
//     expect(navigateTo).toHaveBeenCalledWith('/');
//   });
//   it('El usuario puede ingresar con su cuenta de Google al dar click en ingresar con ', () => {
//     const googleSignInFnMock = jest.fn();
//     const loginElement = login(navigateTo);
//     document.body.append(loginElement);
//     const btnGoogle = document.querySelector('.login-google');
//     btnGoogle.onclick = () => {
//       googleSignInFnMock(navigateTo);
//     };
//     btnGoogle.click();
//     expect(googleSignInFnMock).toHaveBeenCalledWith(navigateTo);
//   });
//   it('Debe realizar la funcion githubSignInFn al dar click en boton ingresar con github', () => {
//     const githubSignInFnMock = jest.fn();
//     document.body.append(login(navigateTo));
//     const btnGithub = document.querySelector('.login-git');
//     btnGithub.onclick = () => {
//       githubSignInFnMock(navigateTo);
//     };
//     btnGithub.click();
//     expect(githubSignInFnMock).toHaveBeenCalledWith(navigateTo);
//   });
// });

// it('Debe ejecutar la funcion signInFn al sar click en Ingresar', () => {
//   let mockForm = '';

//   beforeEach(() => {
//     mockForm = document.createElement('form');
//     mockForm.id = 'form-login';
//     jest.spyOn(auth, 'signInWithEmailAndPassword').mockImplementation(() => Promise.resolve());
//     mockForm.addEventListener('submit', (e) => {
//       e.preventDefault();
//       signInFn(navigateTo);
//     });
//   });
//   afterEach(() => {
//     auth.signInWithEmailAndPassword.mockRestore();
//   });
//   it('Se llama a signInWithEmailAndPassword con los valores correctos', () => {
//     const emailInput = document.createElement('input');
//     emailInput.id = 'email-input';
//     emailInput.value = 'test@test.com';

//     const passwordInput = document.createElement('input');
//     passwordInput.id = 'password-input';
//     passwordInput.value = 'password123';

//     mockForm.appendChild(emailInput);
//     mockForm.appendChild(passwordInput);

//     mockForm.dispatchEvent(new Event('submit'));
// expect(auth.signInWithEmailAndPassword).tHBC(auth, 'test@example.com', 'password123');
//   });
// });
