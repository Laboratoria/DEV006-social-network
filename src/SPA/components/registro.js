import { registerUser } from '../helpers/lib/Auth';

function registro(navigateTo) {
  const section = document.createElement('section');
  const divDerecho = document.createElement('div');
  const imgFondo = document.createElement('img');
  const huellas = document.createElement('img');
  const sectionLogoR = document.createElement('div');
  const logoR = document.createElement('img');
  const dog = document.createElement('img');
  const sectionPets = document.createElement('div');
  const animalesR = document.createElement('img');
  const form = document.createElement('form');
  const inputEmail = document.createElement('input');
  const inputName = document.createElement('input');
  const inputUser = document.createElement('input');
  const inputPassword = document.createElement('input');
  const inputConfirm = document.createElement('input');
  const buttonCreate = document.createElement('button');
  const contenedorR = document.createElement('section');
  const textoEnlace = document.createElement('a');
  const textoRegister = document.createElement('p');

  /* div lado izquierdo */
  imgFondo.classList.add('img-fondo');
  imgFondo.setAttribute('src', '../assets/vector.png');
  huellas.classList.add('huellas');
  huellas.setAttribute('src', '../assets/huellasDiv.png');
  divDerecho.classList.add('div-rigth');
  divDerecho.append(imgFondo, huellas);

  logoR.classList.add('logoR');
  logoR.setAttribute('src', '../assets/logo1.png');
  dog.classList.add('perro');
  dog.setAttribute('src', '../assets/perrito.png');
  sectionLogoR.classList.add('seccionLogo-dog');
  sectionLogoR.append(logoR, dog);

  /* Textos etiquetas */
  inputEmail.placeholder = 'Correo';
  inputName.placeholder = 'Nombre Completo';
  inputUser.placeholder = 'Nombre de Usuario';
  inputPassword.placeholder = 'Contraseña';
  inputConfirm.placeholder = 'Confirmar contraseña';
  buttonCreate.textContent = 'Crear Cuenta';
  textoRegister.textContent = '¿Ya tienes una cuenta?';
  textoEnlace.textContent = 'Iniciar Sesión';

  /* Imagen de animales */
  animalesR.classList.add('animalesR');
  animalesR.setAttribute('src', '../assets/imagPets2.jpg');

  sectionPets.className = 'sectionPetsR';
  buttonCreate.classList.add('login');
  inputEmail.setAttribute('id', 'email');
  inputPassword.setAttribute('id', 'password');

  form.classList.add('formulario');
  form.append(inputEmail, inputPassword, inputName, inputUser, inputConfirm, buttonCreate);
  contenedorR.classList.add('centrado');
  textoEnlace.classList.add('button-registrate');
  contenedorR.append(textoRegister, textoEnlace);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = inputEmail.value;
    const contraseña = inputPassword.value;
    const promesa = registerUser(email, contraseña);
    promesa.then(() => {
      navigateTo('/');
    }).catch((error) => {
      const alerta = document.querySelector('.message-error');
      if (alerta) {
        alerta.remove();
      }
      const mensajeError = document.createElement('p');
      mensajeError.textContent = error.code;
      mensajeError.classList.add('message-error');
      form.appendChild(mensajeError);
    });
  });

  sectionPets.append(animalesR, form, contenedorR);

  section.classList.add('sectionGeneralR');
  section.append(divDerecho, sectionPets, sectionLogoR);

  return section;
}

export default registro;
