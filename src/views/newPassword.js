function newPassword(navigateTo) {
  const section = document.createElement('section');
  const containerNewPassword = document.createElement('div');
  const containerTitle = document.createElement('div');
  const title = document.createElement('h2');
  const imgReturn = document.createElement('img');
  const imgPaw = document.createElement('img');
  const form = document.createElement('form');
  const passwordInput = document.createElement('input');
  const confirmPasswordInput = document.createElement('input');
  const btnSend = document.createElement('button');

  containerNewPassword.classList.add('container-new-password');
  containerTitle.classList.add('container-title-new-password');
  title.classList.add('title-new-password');
  imgReturn.classList.add('img-return-new-password');
  imgPaw.classList.add('img-paw-new-password');
  form.classList.add('form-new-password');
  passwordInput.classList.add('password-input-new-password');
  confirmPasswordInput.classList.add('confirm-password-input-new-password');
  btnSend.classList.add('btn-send-new-password');

  title.textContent = 'Ingresa tu Nueva Contraseña';

  imgPaw.src = 'img/huellaIcono.png';
  imgPaw.alt = 'huella';

  imgReturn.src = 'img/back.png';
  imgReturn.addEventListener('click', () => {
    navigateTo('/forgotPassword');
  });

  btnSend.textContent = 'Enviar';
  btnSend.addEventListener('click', () => {
    navigateTo('/login');
  });

  passwordInput.placeholder = 'Nueva contraseña';
  passwordInput.setAttribute('required', 'true');
  confirmPasswordInput.placeholder = 'Confirma tu contraseña';
  confirmPasswordInput.setAttribute('required', 'true');

  containerTitle.append(title, imgPaw);
  form.append(passwordInput, confirmPasswordInput, btnSend);
  containerNewPassword.append(imgReturn, containerTitle, form);
  section.appendChild(containerNewPassword);

  return section;
}

export default newPassword;
