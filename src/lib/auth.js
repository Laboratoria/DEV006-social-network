// Importamos métodos directamente del auth de frebase.
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile,
  signOut,
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
        .then(() => {
          // Guardar el nombre de usuario en el localStorage
          localStorage.setItem('userName', user.displayName);
          return currentUser;
        })
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

export function loginUser(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      localStorage.setItem('userName', user.displayName);
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
export function signInWithGoogle(navigateTo) {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log('Usuario:', user);
      navigateTo('/wall'); // Redireccionar a la ruta protegida después de iniciar sesión con Google
    })
    .catch((error) => {
      const errorMessage = error.message;
      return errorMessage;
    });
}

export function logoutUser() {
  return signOut(auth);
}
