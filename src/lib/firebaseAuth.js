import { collection, getDocs } from 'firebase/firestore';
import {
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
} from 'firebase/auth';
import { auth, db } from './firebaseConf.js';

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

const provider = new GoogleAuthProvider();
export const googleLogin = (navigateTo) => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      navigateTo('/feed');
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};

export const colRef = collection(db, 'posts');
getDocs(colRef)
  .then((snapshot) => {
    const posts = [];
    snapshot.docs.forEach((doc) => {
      posts.push({ ...doc.data(), id: doc.id });
    });
    console.log(posts);
  })
  .catch(err => {
    console.log(err.message);
  });
