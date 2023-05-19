// Importamos métodos directamente del auth de frebase.
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile,
} from 'firebase/auth';
import { auth } from './configFirebase.js';

export function errorMessages(codeError) {
  if (codeError === 'auth/email-already-in-use') {
    return '*Este correo ya está registrado';
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

export function registerUser(email, password, user) {
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const currentUser = userCredential.user;
      return updateProfile(currentUser, { displayName: user })
        .then(() => currentUser)
        .catch((error) => {
          console.log(error);
          const codeError = error.code;
          const errorMessage = errorMessages(codeError);
          throw errorMessage;
        });
    })
    .catch((error) => {
      console.log(error);
      const codeError = error.code;
      const errorMessage = errorMessages(codeError);
      throw errorMessage;
    });
}

// try {
//   const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//   console.log(userCredential);
//   return userCredential;
// } catch (error) {
//   const codeError = error.code;
//   console.log(codeError);
//   return codeError;
// }

// Funcion que valida correo y contraseña de un usuario ya registrado.
export function loginUser(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {
      console.log(error);
      const codeError = error.code;
      const errorMessage = errorMessages(codeError);
      throw errorMessage;
    });
}
// función para registrarse con Google
export function signInWithGoogle() {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log('Usuario:', user);
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.error('Error:', errorMessage);
    });
}
