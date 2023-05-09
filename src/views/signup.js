function login(navigateTo) {
  const section = document.createElement('section');

  const title = document.createElement('h2');
  const buttonReturn = document.createElement('button');
  // const form = document.createElement('form');
  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input');
  const buttonLogin = document.createElement('button');

  const container = document.createElement('div');
  container.className = 'container-app';

  inputEmail.placeholder = 'Write email';
  inputEmail.className = 'input-email';
  inputPass.placeholder = 'pass';
  inputPass.classList.add('inputPassword');

  title.textContent = 'Login';
  title.className = 'title';
  buttonLogin.textContent = 'go';
  buttonLogin.classList.add('buttonLogin');

  buttonReturn.textContent = 'Return to home';
  buttonReturn.classList.add('buttonReturn');

  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });


  container.append(title, inputEmail, inputPass, buttonLogin, buttonReturn);
  section.append(container);


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
