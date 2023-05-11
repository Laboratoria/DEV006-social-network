function register(navigateTo) {
  const section = document.createElement('section');
  const title = document.createElement('h2');
  const buttonReturn = document.createElement('button');
  const form = document.createElement('form');
  const name = document.createElement('p');
  const nameInput = document.createElement('input');
  const email = document.createElement('p');
  const emailInput = document.createElement('input');
  const password = document.createElement('p');
  const passwordInput = document.createElement('input');
  const confirmPassword = document.createElement('p');
  const confirmPasswordInput = document.createElement('input');
  const btnSignUp = document.createElement('button');

  form.id = 'signup-form';
  emailInput.id = 'signup-email';
  passwordInput.id = 'signup-password';

  btnSignUp.type = 'submit';
  btnSignUp.addEventListener('click', () => {
    navigateTo('/posts');
  });

  title.textContent = 'Register';
  name.textContent = 'Name:';
  email.textContent = 'Email:';
  password.textContent = 'Password:';
  confirmPassword.textContent = 'Confirm your password:';
  buttonReturn.textContent = 'Return to home';
  btnSignUp.textContent = 'Sign Up';

  nameInput.placeholder = 'Your name';
  nameInput.setAttribute('required', 'true');
  emailInput.placeholder = 'example@example.com';
  emailInput.setAttribute('required', 'true');
  passwordInput.placeholder = 'password';
  passwordInput.setAttribute('required', 'true');
  confirmPasswordInput.placeholder = 'Confirm your password';
  confirmPasswordInput.setAttribute('required', 'true');

  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });

  // eslint-disable-next-line max-len
  form.append(name, nameInput, email, emailInput, password, passwordInput, confirmPassword, confirmPasswordInput, btnSignUp, buttonReturn);
  section.append(title, form);

  return section;
}

export default register;
