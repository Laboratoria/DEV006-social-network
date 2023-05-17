// Importamos métodos directamente del auth de frebase.
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from './configFirebase.js';

export function errorMessages(codeError) {
  if (codeError === 'auth/email-already-in-use') {
    return 'Este correo ya está registrado';
  }
  if (codeError === 'auth/weak-password') {
    return '*La contraseña ingresada es demasiado débil, debe tener más de 6 caracteres';
  }
  if (codeError === 'auth/invalid-email') {
    return '*El correo electrónico ingresado no es válido';
  }
  if (codeError === 'auth/missing-password') {
    return '*Escribe una contraseña válida de más de 6 caracteres';
  }
  if (codeError === 'auth/user-not-found') {
    return '*Email no registrado';
  }
  if (codeError === 'auth/wrong-password') {
    return '*Contraseña incorrecta';
  }
  return '*No se pudo completar el registro';
}

// Se realizo la funcion asincrona para registrar un nuevo usuario
// y almacenar su contenido a firebase
export function registerUser(email, password) {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => userCredential.user)
    .catch((error) => {
      console.log(error);
      const errorMessage = errorMessages(error.code);
      throw errorMessage;
    });
  // try {
  //   const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  //   console.log(userCredential);
  //   return userCredential;
  // } catch (error) {
  //   const codeError = error.code;
  //   console.log(codeError);
  //   return codeError;
  // }
}


// Funcion asincrona que valida correo y contraseña de un usuario ya registrado.
export async function loginUser(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    console.log('loggedin', userCredential);
    return 'loggedin', userCredential;
  } catch (error) {
    console.log(error);
    return error;
  }
}
