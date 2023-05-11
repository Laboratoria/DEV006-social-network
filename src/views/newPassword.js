function newPassword(navigateTo) {
  const section = document.createElement('section');
  const title = document.createElement('h2');
  const buttonReturn = document.createElement('button');
  const form = document.createElement('form');
  const password = document.createElement('p');
  const passwordInput = document.createElement('input');
  const confirmPassword = document.createElement('p');
  const confirmPasswordInput = document.createElement('input');
  const btnSend = document.createElement('button');

  title.textContent = 'Ingresa tu Nueva Contraseña';
  password.textContent = 'Contraseña:';
  confirmPassword.textContent = 'Confirma tu contraseña:';

  buttonReturn.textContent = 'Return';
  buttonReturn.addEventListener('click', () => {
    navigateTo('/forgotPassword');
  });

  btnSend.textContent = 'Send';
  //   btnSend.addEventListener('click', () => {
  //     navigateTo('/newPassword');
  //   });

  passwordInput.placeholder = 'example@example.com';
  password.setAttribute('required', 'true');
  confirmPasswordInput.placeholder = 'example@example.com';
  confirmPassword.setAttribute('required', 'true');

  form.append(password, passwordInput, confirmPassword, confirmPasswordInput);
  section.append(title, form, btnSend, buttonReturn);

  return section;
}

export default newPassword;
