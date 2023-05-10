/*
* @param [function] navigateTo: metodo para navegar a otra vista
*/
export function home(navigateTo) {
  const container = document.createElement('div');
  const header = document.createElement('header');
  const logo = document.createElement('img');
  const divButtons = document.createElement('div');
  const description = document.createElement('p');
  const signInButton = document.createElement('button');
  const createAccount = document.createElement('button');

  // Establecer atributos y contenido
  logo.setAttribute('src', './images/logoEasygymOnly.png');
  divButtons.classList.add('descriptionPage');
  description.textContent = 'We are a community where you can view and share quick routines to perform from anywhere in the world.';
  signInButton.classList.add('button');
  signInButton.textContent = 'Sign In';
  createAccount.classList.add('button');
  createAccount.textContent = 'Create account';

  // Agregar elementos al header
  header.appendChild(logo);

  // Agregar elementos al div
  divButtons.appendChild(description);
  divButtons.appendChild(signInButton);
  divButtons.appendChild(createAccount);

  // Agregar elementos al contenedor (div) especificado
  container.appendChild(header);
  container.appendChild(divButtons);

  // llamado a los botones
  createAccount.addEventListener('click', () => {
    navigateTo('/createAccount');
  });

  signInButton.addEventListener('click', () => {
    navigateTo('/signIn');
  });

  return container;
}
