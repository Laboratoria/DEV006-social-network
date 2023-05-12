function forgotPassword(navigateTo) {
  const section = document.createElement('section');
  const containerForgotP = document.createElement('div');
  const containerTitleF = document.createElement('div');
  const title = document.createElement('h2');
  const imgPaw = document.createElement('img');
  const textForgotP = document.createElement('p');
  const imgReturn = document.createElement('img');
  const form = document.createElement('form');
  const emailInput = document.createElement('input');
  const btnSend = document.createElement('button');

  containerForgotP.classList.add('container-forgot-password');
  containerTitleF.classList.add('container-title-forgot-password');
  title.classList.add('title-forgot-password');
  imgPaw.classList.add('img-forgot-password');
  textForgotP.classList.add('text-forgot-password');
  imgReturn.classList.add('img-return-forgot-password');
  form.classList.add('form-forgot-password');
  emailInput.classList.add('email-input');
  btnSend.classList.add('btn-send-forgot-password');

  title.textContent = 'Restablece tu contraseña';
  textForgotP.textContent = 'Recibirás instrucciones para restablecer tu contraseña en el siguiente correo:';

  imgPaw.src = 'img/huellaIcono.png';
  imgPaw.alt = 'huella';

  imgReturn.src = ('img/back.png');
  imgReturn.alt = 'Imagen regresar';
  imgReturn.addEventListener('click', () => {
    navigateTo('/login');
  });

  btnSend.textContent = 'Enviar';
  btnSend.addEventListener('click', () => {
    navigateTo('/newPassword');
  });

  emailInput.placeholder = 'Email';
  emailInput.setAttribute('required', 'true');

  containerTitleF.append(title, imgPaw);
  form.append(emailInput, btnSend);
  containerForgotP.append(imgReturn, containerTitleF, textForgotP, form);
  section.appendChild(containerForgotP);

  return section;
}

export default forgotPassword;
