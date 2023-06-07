import { registerUser } from '../helpers/lib/Auth';

function registro(navigateTo) {
  const section = document.createElement('section');
  const divDerecho = document.createElement('div');
  const imgFondo = document.createElement('img');
  const huellas = document.createElement('img');
  const sectionLogoR = document.createElement('div');
  const logoR = document.createElement('img');
  const divDog = document.createElement('div');
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
  const footerRegister = document.createElement('footer');

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
  divDog.classList.add('contain-dog');
  divDog.append(dog);
  sectionLogoR.classList.add('seccionLogo-dog');
  sectionLogoR.append(logoR, divDog);
  /* Textos etiquetas */
  inputEmail.classList.add('inputs-registro');
  inputEmail.placeholder = 'Correo';
  inputPassword.classList.add('inputs-registro');
  inputPassword.placeholder = 'Contraseña';
  inputName.classList.add('inputs-registro');
  inputName.placeholder = 'Nombre Completo';
  inputUser.classList.add('inputs-registro');
  inputUser.placeholder = 'Nombre de Usuario';
  inputConfirm.classList.add('inputs-registro');
  inputConfirm.placeholder = 'Confirmar contraseña';
  buttonCreate.textContent = 'Crear Cuenta';
  textoRegister.textContent = '¿Ya tienes cuenta?';
  textoEnlace.textContent = 'Iniciar Sesión';
  /* Imagen de animales */
  animalesR.classList.add('animalesR');
  animalesR.setAttribute('src', '../assets/pets.jpg');
  sectionPets.className = 'sectionPetsR';
  buttonCreate.classList.add('crearcuenta');
  inputEmail.setAttribute('id', 'email2');
  inputPassword.setAttribute('id', 'password2');
  footerRegister.classList.add('footer-register');
  footerRegister.textContent = '@WebDulValLeo';
  form.classList.add('formulario');
  form.append(inputEmail, inputPassword, inputName, inputUser, inputConfirm, buttonCreate);
  contenedorR.classList.add('centradoR');
  textoEnlace.classList.add('button-ingresar');
  contenedorR.append(textoRegister, textoEnlace);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = inputEmail.value;
    const contraseña = inputPassword.value;
    const promesa = registerUser(email, contraseña);
    promesa.then(() => {
      sessionStorage.setItem('user', JSON.stringify(email));
      navigateTo('/home');
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
  section.append(divDerecho, sectionPets, sectionLogoR, footerRegister);
  return section;
}

export default registro;
