import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../lib/firebase.js';

export function createAccount() {
  // Crear elementos
  const container = document.createElement('div');
  const header = document.createElement('header');
  const logo = document.createElement('img');
  const form = document.createElement('form');
  const emailLabel = document.createElement('label');
  const emailInput = document.createElement('input');
  const passwordLabel = document.createElement('label');
  const passwordInput = document.createElement('input');
  const questionAccount = document.createElement('p');
  const linkSignIn = document.createElement('a');
  const createButton = document.createElement('button');
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
  questionAccount.textContent = 'Already have an account?';
  linkSignIn.setAttribute('href', '#');
  linkSignIn.textContent = 'Sign In';
  createButton.classList.add('button');
  createButton.textContent = 'Create account';
  continueWithGoogleButton.classList.add('button');
  continueWithGoogleButton.textContent = 'Create with Google';

  // Agregar elementos al header
  header.appendChild(logo);

  // Agregar elementos al formulario
  form.appendChild(emailLabel);
  form.appendChild(emailInput);
  form.appendChild(passwordLabel);
  form.appendChild(passwordInput);
  form.appendChild(createButton);
  form.appendChild(continueWithGoogleButton);
  form.appendChild(questionAccount);
  form.appendChild(linkSignIn);

  // Agregar elementos al contenedor (div) especificado
  container.appendChild(header);
  container.appendChild(form);

  // Add event listeners

  createButton.addEventListener('click', async (e) => {
    e.preventDefault();

    const email = emailInput.value;
    const password = passwordInput.value;

    console.log(email, password);
    // promesa de la funcion, bloque try.. catch debe ir acompañado de async(funcion asyncrona)
    // await espera que la funcion cumpla con los parametros para ver un resultado o error
    try {
      const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
      console.log(userCredentials);
    } catch (error) {
      console.log(error.message);
      console.log(error.code);

      if (error.code === 'auth/email-already-in-use') {
        alert('Email already in use');
      } else if (error.code === 'auth/invalid-email') {
        alert('Invalid email');
      } else if (error.code === 'auth/weak-password') {
        alert('Your password must have a minimum of 6 characters ');
      } else if (error.code) {
        alert('Something went wrong');
      }
    }
  });
  return container;
}
