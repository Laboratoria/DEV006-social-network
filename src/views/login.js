function login(navigateTo) {
  const section = document.createElement('section');
  const title = document.createElement('h2');
  const buttonReturn = document.createElement('button');
  const form = document.createElement('form');
  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input');
  const buttonLogin = document.createElement('button');

  inputEmail.placeholder = 'Write email';
  inputPass.placeholder = 'pass';

  title.textContent = 'Login';
  buttonLogin.textContent = 'go';

  buttonReturn.textContent = 'Return to home';
  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });

  form.append(inputEmail, inputPass, buttonLogin);
  section.append(title, form, buttonReturn);

  return section;
}

export default login;
// function signUp (navigateTo) {
//   const form2 = document.createElement ('form');
//   const userName = document.createElement ('p');
//   const inputUserName = document.createElement ('input');
//   const email = document.createElement ('p');
//   const inputEmail = document.createElement ('input');
//   const password = document.createElement ('p');
//   const inputPassword = document.createElement ('input');
//   const confirmPassword = document.createElement ('p');
//   const inputConfirmPassword = document.createElement ('input');
//   const btnSignUp = document.createElement ('button');
//   const btnReturn = document.createElement ('button');
//   const section = document.createElement ('section');

//   inputUserName.placeholder = 'Write username';
//   inputEmail.placeholder = 'Write email';
//   inputPassword.placeholder = 'Write password';
//   inputConfirmPassword.placeholder = 'Confirm password';

//   btnSignUp.textContent = 'Sign Up';

//   btnReturn.textContent = 'Return';
//   btnReturn.addEventListener('click',() => {
//     navigateTo('/');
//   })

//   form2.append (inputUserName, inputEmail, inputPassword, inputConfirmPassword, btnSignUp );
//   section.append (form2, btnReturn);

//   return section;
// }

// export default signUp;
