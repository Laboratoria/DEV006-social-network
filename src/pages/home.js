export function home(container) {
  // Crear elementos
  const header = document.createElement('header');
  const logo = document.createElement('img');
  const form = document.createElement('form');
  const emailLabel = document.createElement('label');
  const emailInput = document.createElement('input');
  const passwordLabel = document.createElement('label');
  const passwordInput = document.createElement('input');
  const forgotPasswordLink = document.createElement('a');
  const loginButton = document.createElement('button');
  const signupButton = document.createElement('button');
  const continueWithGoogleButton = document.createElement('button');

  // Establecer atributos y contenido
  logo.setAttribute('src', './images/logoNameEasygym.png');
  emailLabel.textContent = 'Email';
  emailInput.classList.add('insertInfo');
  emailInput.setAttribute('placeholder', 'example@gmail.com');
  passwordLabel.textContent = 'Password';
  passwordInput.classList.add('insertInfo');
  emailInput.setAttribute('type', 'email');
  passwordInput.setAttribute('type', 'password');
  passwordInput.setAttribute('placeholder', 'Mypassword');
  forgotPasswordLink.textContent = 'Forgot your password?';
  forgotPasswordLink.setAttribute('href', '#');
  loginButton.classList.add('button');
  loginButton.textContent = 'Log In';
  signupButton.classList.add('button');
  signupButton.textContent = 'Sign Up';
  continueWithGoogleButton.classList.add('button');
  continueWithGoogleButton.textContent = 'Continue with Google';

  // Agregar elementos al header
  header.appendChild(logo);

  // Agregar elementos al formulario
  form.appendChild(emailLabel);
  form.appendChild(emailInput);
  form.appendChild(passwordLabel);
  form.appendChild(passwordInput);
  form.appendChild(forgotPasswordLink);
  form.appendChild(loginButton);
  form.appendChild(signupButton);
  form.appendChild(continueWithGoogleButton);

  // Agregar elementos al contenedor (div) especificado
  container.appendChild(header);
  container.appendChild(form);
}
