function forgotPassword(navigateTo) {
  const section = document.createElement('section');
  const title = document.createElement('h2');
  const form = document.createElement('form');
  const email = document.createElement('p');
  const emailInput = document.createElement('input');
  const btnSend = document.createElement('button');

  const container = document.createElement('div');
  container.className = 'container-app';

  title.textContent = 'Recover your account';
  title.className = 'titleForgot';
  email.textContent = 'Enter your email:';
  email.className = 'name-email';

  const buttonReturn = document.createElement('a');
  buttonReturn.textContent = 'Back';
  buttonReturn.href = '/';
  buttonReturn.className = 'return-link';
  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });

  btnSend.textContent = 'Send';
  btnSend.className = 'btnSend';
  btnSend.addEventListener('click', () => {
    navigateTo('/newPassword');
  });

  emailInput.placeholder = 'email';
  emailInput.className = 'input-email-forgot';

  form.className = 'formForgot';

  form.append(email, emailInput);
  container.append(title, form, btnSend);
  section.append(buttonReturn, container);

  return section;
}

export default forgotPassword;
