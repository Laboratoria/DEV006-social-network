import { db, collection, getDocs } from './firebase/config';

const getEventDB = async () => {
  const eventsCollection = collection(db, 'eventos');
  console.log('eventsCollection', eventsCollection);
  const eventsSnapshot = await getDocs(eventsCollection);
  console.log('eventsSnapshot', eventsSnapshot);
  const eventsList = eventsSnapshot.docs.map((doc) => doc.data());

  return eventsList;
};

 function home(navigateTo) {
  const ctnImage =document.createElement('div');
  const logo = document.createElement('img');
  const section = document.createElement('section');
  //const title = document.createElement('h2');
  const formLogin = document.createElement('form');
  const inputAcces = document.createElement('input');
  const inputPassword = document.createElement('input');
  const btnLogin = document.createElement('button');
  const button = document.createElement('button');
  button.setAttribute("id", "button-home");
  btnLogin.setAttribute("id", "button-login");
  section.setAttribute("id", "section-style");
  formLogin.setAttribute("id", "formLogin-style");
  inputAcces.setAttribute("id", "inputA-style");
  inputPassword.setAttribute("id", "inputP-style");
  logo.setAttribute("id", "logo-style");
  logo.src = './img/logo.png';
  logo.alt = 'web-logo';
  ctnImage.appendChild(logo)
  //logo.innerHTML='<img src="./img/logo.png">';

  //document.getElementById("logo-style").innerHTML='<img src="./Rectangle 24.png" />';  
  // const dataEvents = await getEventDB();
  
  // input home
  inputAcces.placeholder = 'escribe tu email';
  inputPassword.placeholder = 'contraseña';

  // boton de iniciar sesión
  btnLogin.textContent = 'INICIAR SESIÓN';
  btnLogin.addEventListener('click', () => {
    navigateTo();
  });

  // boton de registrarse
  button.textContent = 'REGISTRARSE';
  button.addEventListener('click', () => {
    navigateTo('/login');
  });

  //title.textContent = 'RUNNERS NETWORK';

  formLogin.append(inputAcces, inputPassword);
  section.append(ctnImage, formLogin, button, btnLogin);
  console.log(logo)
  return section;
}

export default home;
