/* eslint-disable max-len */
function home(navigateTo) {
  const section = document.createElement('section');

  const title = document.createElement('h2');
  title.textContent = 'Community of Buildings';
  title.className = 'title';

  const container = document.createElement('div');
  container.className = 'container-app';
  container.id = 'container-inputs';

  const imageBuilding = document.createElement('img');
  imageBuilding.src = ('./images/building.png');
  imageBuilding.classList.add('app-img');

  const description = document.createElement('p');
  description.textContent = 'Platform for the neighbors of a community where they can sell, give away, buy whatever they deem convenient';
  description.className = 'description-app';
  const email = document.createElement('p');
  email.textContent = 'Email';
  email.className = 'name-email';

  const inputEmail = document.createElement('input');
  inputEmail.className = 'input-email';

  const password = document.createElement('p');
  password.textContent = 'Password';
  password.className = 'name-password';

  const inputPassword = document.createElement('input');
  inputPassword.classList.add('inputPassword');
  inputPassword.className = 'inputPassword';

  const forgotPassword = document.createElement('a');
  forgotPassword.textContent = 'Forgot Password';
  forgotPassword.href = '/forgotPassword';
  forgotPassword.classList.add('btnForgotP');
  forgotPassword.addEventListener('click', () => {
    navigateTo('/forgotPassword');
  });

  const btnSignIn = document.createElement('button');
  btnSignIn.textContent = 'Sign In';
  btnSignIn.classList.add('btnSignIn');
  btnSignIn.addEventListener('click', () => {
    navigateTo('/profile');
  });

  const signUp = document.createElement('a');
  signUp.textContent = 'Sign Up';
  signUp.href = 'Sign Up';
  signUp.classList.add('btnSignUp');

  const btnGoogle = document.createElement('button');
  btnGoogle.classList.add('btnGoogle');
  btnGoogle.textContent = 'Sign In With Google';

  signUp.addEventListener('click', () => {
    navigateTo('/signup');
  });

  container.append(title, imageBuilding, description, email, inputEmail, password, inputPassword, forgotPassword, btnSignIn, btnGoogle, signUp);
  section.appendChild(container);
  return section;
}

export default home;
