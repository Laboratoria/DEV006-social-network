function newPassword(navigateTo) {
  const section = document.createElement('section');
  const title = document.createElement('h2');
  const form = document.createElement('form');
  const password = document.createElement('p');
  const passwordInput = document.createElement('input');
  const confirmPassword = document.createElement('p');
  const confirmPasswordInput = document.createElement('input');
  const btnSend = document.createElement('button');

  const container = document.createElement('div');
  container.className = 'container-app';

  title.textContent = 'Recover your account';
  title.className = 'titleForgot';
  password.textContent = 'Enter your new password:';
  confirmPassword.textContent = 'Confirm your new password:';
  password.className = 'name-password';
  confirmPassword.className = 'name-password';

  const buttonReturn = document.createElement('button');
  buttonReturn.textContent = 'Back';
  buttonReturn.classList.add('buttonReturn');
  buttonReturn.addEventListener('click', () => {
    navigateTo('/forgotPassword');
  });

  btnSend.textContent = 'Send';
  btnSend.className = 'btnSend';
  passwordInput.placeholder = 'password';
  passwordInput.className = 'input-password-forgot';
  confirmPasswordInput.placeholder = 'password';
  confirmPasswordInput.className = 'input-password-forgot';

  form.className = 'formForgot';

  form.append(password, passwordInput, confirmPassword, confirmPasswordInput);
  container.append(title, form, btnSend);
  section.append(buttonReturn, container);

  return section;
}

export default newPassword;
