function render(target, element) {
  while (target.firstChild) {
    target.removeChild(target.lastChild);
  }
  target.appendChild(element);
}
export default render;

// it('Debe loguear al usuario al hacer submit', () => {
//     const signInFn = jest.fn();
//     const loginMock = jest.fn();
//     loginMock.mockImplementation(() => Promise.resolve());
//     firebase.auth = jest.fn().mockImplementation(() => ({
//       signInWithEmailAndPassword: loginMock,
//     }));
//     const container = document.createElement('div');
//     container.id = 'root';
//     const view = login();
//     document.body.appendChild(container);
//     render(view, container);

//     const email = 'test@email.com';
//     const password = '123456';

//     document.getElementById('email-input').value = email;
//     document.getElementById('password-input').value = password;

//     const btnLogin = document.querySelector('.btn-signin');
//     btnLogin.onclick = () => {
//       signInFn(navigateTo);
//     };
//     btnLogin.click();
//     expect(loginMock).toHaveBeenCalledWith(email, password);
//   });
