function login(navigateTo) {
  const section = document.createElement('section');
  const buttonReturn = document.createElement('button');
  const containerDos=document.createElement("div");
  const form = document.createElement('form');
  const userSignUp=document.createElement("p");
  const inputUserSignUp = document.createElement('input');
  const emailSignUp=document.createElement("p");
  const inputEmailSignUp = document.createElement('input');
  const passwordSignUp=document.createElement("p");
  const inputPasswordSignUp = document.createElement('input');
  const confirmPassword=document.createElement("p");
  const inputConfirmPasswordSignUp=document.createElement("input");
  const buttonSignUp = document.createElement('button');

  inputUserSignUp.placeholder = 'Enter user';
  inputEmailSignUp.placeholder = 'Enter email';
  inputPasswordSignUp.placeholder="Enter password"
  inputConfirmPasswordSignUp.placeholder="confirm password"

  userSignUp.textContent="User name";
  emailSignUp.textContent="E-mail";
  passwordSignUp.textContent="Password";
  confirmPassword.textContent="confirm password";
  buttonSignUp.textContent = 'SignUp';


  buttonReturn.textContent = 'Return to home';
  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });

  form.append(userSignUp,inputUserSignUp,emailSignUp, inputEmailSignUp,passwordSignUp,inputPasswordSignUp,confirmPassword,inputConfirmPasswordSignUp,buttonSignUp);
  section.append(buttonReturn,form);

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
