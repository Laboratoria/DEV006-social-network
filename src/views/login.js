function login(navigateTo) {
  const section = document.createElement('section');
  const title = document.createElement('h2');
  const buttonReturn = document.createElement('button');
  const form = document.createElement('form');
  const emailText = document.createElement('p');
  const emailInput = document.createElement('input');
  const passwordText = document.createElement('p');
  const passwordInput = document.createElement('input');
  const btnSignIn = document.createElement('button');
  const forgotPassword = document.createElement('a');

  emailText.textContent = 'Email:';
  passwordText.textContent = 'Password:';
  title.textContent = 'Login';
  btnSignIn.textContent = 'Sign In';
  forgotPassword.textContent = 'Forgot Password';

  forgotPassword.href = '/forgotPassword';
  forgotPassword.classList.add('btnForgotP');
  forgotPassword.addEventListener('click', () => {
    navigateTo('/forgotPassword');
  });

  buttonReturn.textContent = 'Return to home';
  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });

  emailInput.placeholder = 'example@example.com';
  emailInput.setAttribute('required', 'true');
  passwordInput.placeholder = 'password';
  passwordInput.setAttribute('required', 'true');

  form.append(emailText, emailInput, passwordText, passwordInput);
  section.append(title, form, forgotPassword, btnSignIn, buttonReturn);

  return section;
}

export default login;
