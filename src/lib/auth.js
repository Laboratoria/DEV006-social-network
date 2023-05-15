// Importamos métodos directamente del auth de frebase.
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from './configFirebase.js';

// Se realizo la funcion asincrona para registrar un nuevo usuario
// y almacenar su contenido a firebase
export async function registerUser(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log(userCredential);
    return userCredential;
  } catch (error) {
    console.error(error);
    return error;
  }
}
// Funcion asincrona que valida correo y contraseña de un usuario ya registrado.
export async function loginUser(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log('loggedin', userCredential);
    return ('loggedin', userCredential);
  } catch (error) {
    console.log(error);
    return error;
  }
}
