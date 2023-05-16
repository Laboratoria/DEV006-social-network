import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from './firebaseConf.js';

function displaySuccessMessage() {
  // Crea un elemento HTML para mostrar el mensaje de éxito
  const successMessage = document.createElement('p');
  successMessage.textContent = '¡Registro exitoso!';

  // Agrega el elemento al DOM para que se muestre en la página
  const signUpSection = document.getElementsByClassName('signUpSection');
  signUpSection.appendChild(successMessage);

  // Elimina el mensaje de éxito después de unos segundos
  setTimeout(() => {
    signUpSection.removeChild(successMessage);
  }, 3000);
}

export async function registerUser(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    console.log('registrado', userCredential);
    displaySuccessMessage();
  } catch (error) {
    console.error(error);
  }
}

export async function loginUser(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    console.log('loggeado', userCredential);
  } catch (error) {
    console.log(error);
  }
}
