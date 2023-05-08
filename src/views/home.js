/* eslint-disable max-len */
function home(navigateTo) {
  const section = document.createElement('section');

  const title = document.createElement('h2');
  title.textContent = 'Community of Buildings';
  title.className = 'title';

  const container = document.createElement('div');
  container.className = 'container-app';

  const imageBuilding = document.createElement('img');
  imageBuilding.src = ('./images/building.png');
  imageBuilding.classList.add('app-img');

  const description = document.createElement('p');
  description.textContent = 'Platform for the neighbors of a community where they can sell, give away, buy whatever they deem convenient';

  const email = document.createElement('p');
  email.textContent = 'Email';
  email.className="name-email"

  const inputEmail = document.createElement('input');

  const password = document.createElement('p');
  password.textContent = 'Password';

  const inputPassword = document.createElement('input');

  const forgotPassword = document.createElement('a');
  forgotPassword.textContent = 'Forgot Password';
  forgotPassword.href = 'Sign Up';
  forgotPassword.classList.add('btnForgotP')

  const btnSignIn = document.createElement('button');
  btnSignIn.textContent = 'Sign In';
  btnSignIn.classList.add('btnSignIn');

  const signUp = document.createElement('a');
  signUp.textContent = 'Sign Up';
  signUp.href = 'Sign Up';
  signUp.classList.add('btnSignUp');

  const btnGoogle = document.createElement('button');
  btnGoogle.classList.add('btnGoogle');
  btnGoogle.textContent = 'Sign In With Google';

  btnSignIn.addEventListener('click', () => {
    navigateTo('/login');
  });

  container.append(title, imageBuilding, description, email, inputEmail, password, inputPassword, forgotPassword, btnSignIn, btnGoogle, signUp);
  section.appendChild(container);
  return section;
}

export default home;
