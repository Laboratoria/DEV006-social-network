function forgotPassword(navigateTo) {
  const section = document.createElement('section');
  const title = document.createElement('h2');
  const buttonReturn = document.createElement('button');
  const form = document.createElement('form');
  const email = document.createElement('p');
  const emailInput = document.createElement('input');
  const confirmEmail = document.createElement('p');
  const ConfirmEmailInput = document.createElement('input');
  const btnSend = document.createElement('button');

  title.textContent = 'Reset your password';
  email.textContent = 'Email:';
  confirmEmail.textContent = 'Confirm your email:';

  buttonReturn.textContent = 'Return';
  buttonReturn.addEventListener('click', () => {
    navigateTo('/login');
  });

  btnSend.textContent = 'Send';
  btnSend.addEventListener('click', () => {
    navigateTo('/newPassword');
  });

  emailInput.placeholder = 'example@example.com';
  emailInput.setAttribute('required', 'true');
  ConfirmEmailInput.placeholder = 'example@example.com';
  ConfirmEmailInput.setAttribute('required', 'true');

  form.append(email, emailInput, confirmEmail, ConfirmEmailInput);
  section.append(title, form, btnSend, buttonReturn);

  return section;
}

export default forgotPassword;
