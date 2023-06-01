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
  const section = document.createElement('section');
  const title = document.createElement('h2');
  const formLogin = document.createElement('form');
  const inputAcces = document.createElement('input');
  const inputPassword = document.createElement('input');
  const btnLogin = document.createElement('button');
  const button = document.createElement('button');

  // const dataEvents = await getEventDB();

  // input home
  inputAcces.placeholder = 'write email';
  inputPassword.placeholder = 'pass';

  // boton de iniciar sesión
  btnLogin.textContent = 'Iniciar sesión';
  btnLogin.addEventListener('click', () => {
    navigateTo();
  });

  // boton de registrarse
  button.textContent = 'Registrarse';
  button.addEventListener('click', () => {
    navigateTo('/login');
  });

  title.textContent = 'Welcome to my project';

  formLogin.append(inputAcces, inputPassword);
  section.append(title, button, btnLogin, formLogin);
  return section;
}

export default home;
