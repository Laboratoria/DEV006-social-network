function login(navegateTo) {
// llamar al DOM y crear cada elemento
// crear nuestro html usando createElement
  const section = document.createElement('section');
  const sectionLogo = document.createElement('div');
  const logo = document.createElement('img');
  const animales = document.createElement('img');
  const form = document.createElement('form');
  const contenedorC = document.createElement('article');
  const iconoHeart = document.createElement('img');
  const labelCorreo = document.createElement('label');
  const inputCorreo = document.createElement('input');
  const contenedorP = document.createElement('article');
  const iconHeart = document.createElement('img');
  const labelPassword = document.createElement('label');
  const inputPassword = document.createElement('input');
  const buttonLogin = document.createElement('button'); // iniciar sesión
  const buttonSignGoogle = document.createElement('button');
  const image = document.createElement('img');
  const contenedorR = document.createElement('section');
  const pregunta = document.createElement('h2');
  const buttonRegistrate = document.createElement('p');

  /* agregando imagen al dom dentro de esta seccion
  logo.src = '../assets/logo1.png';
  animales.src = '../assets/imagPets2.jpg'; */

  // Agregar atributos a las imágenes del logo y animales
  logo.classList.add('logo');
  logo.setAttribute('src', '../assets/logo1.png');
  animales.classList.add('animales');
  animales.setAttribute('src', '../assets/imagPets2.jpg');
  sectionLogo.append(logo, animales);

  buttonSignGoogle.classList.add('google');
  image.src = '../assets/google.png';
  image.alt = 'Button Image';
  // Agregar la imagen al botón
  buttonSignGoogle.appendChild(image);

  iconoHeart.classList.add('icon-heart');
  iconoHeart.setAttribute('src', '../assets/logo2.png');
  labelCorreo.textContent = 'Correo';
  contenedorC.append(iconoHeart, labelCorreo);

  inputCorreo.setAttribute('id', 'email');
  inputCorreo.placeholder = 'example@gmail.com';

  iconHeart.classList.add('icon-heart');
  iconHeart.setAttribute('src', '../assets/logo2.png');
  labelPassword.textContent = 'Contraseña';
  contenedorP.append(iconHeart, labelPassword);

  inputPassword.setAttribute('id', 'password');
  inputPassword.placeholder = '********';

  pregunta.textContent = '¿No tienes una cuenta?';
  buttonRegistrate.classList.add('button-registrate');
  buttonRegistrate.textContent = 'Regístrate';
  contenedorR.classList.add('centrado');
  contenedorR.append(pregunta, buttonRegistrate);

  // callback a los botones
  buttonLogin.classList.add('login');
  buttonLogin.textContent = 'Iniciar Sesión';
  buttonLogin.addEventListener('click', () => {
    navegateTo('/home');
  });
  buttonSignGoogle.addEventListener('click', () => {
    navegateTo('/home');
  });
  buttonRegistrate.addEventListener('click', () => {
    navegateTo('/registro');
  });

  // agregando elementos al form
  form.append(contenedorC, inputCorreo, contenedorP, inputPassword, buttonLogin);
  // agregar los elementos al DOM
  section.append(
    sectionLogo,
    form,
    buttonSignGoogle,
    contenedorR,
  );

  return section;
}

export default login;
