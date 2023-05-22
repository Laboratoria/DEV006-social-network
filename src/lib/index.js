import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithCredential,
  signOut,
  updateProfile,
} from 'firebase/auth';
import {
  collection,
  getFirestore,
  getDocs, addDoc, serverTimestamp, deleteDoc, updateDoc,
  doc as newdoc, query, orderBy, onSnapshot, arrayUnion, arrayRemove,
  // Se importa serveTimestamp para obtener fecha y hora del post
} from 'firebase/firestore';
import { firebaseConfig } from '../firebase.config.js';

export const app = initializeApp(firebaseConfig); // Initialize Firebase
export const auth = getAuth(app);
const dataBase = getFirestore(app); // Initialize Firestore
export const colRef = collection(dataBase, 'post'); // Referencia de la colección de "post"
const orderedQuery = query(colRef, orderBy('timestamp', 'desc')); // Consulta la colección y la ordena los posts por su fecha/hora de publicación

// Fx para crear usuarix
export const createUser = async (navigateTo) => {
  const email = document.getElementById('txtEmail');
  const password = document.getElementById('txtPasswordAgain');
  const spanEmail = document.getElementById('spanErrorEmail');
  const spanPassword = document.getElementById('spanErrorPassword');
  const userName = document.getElementById('userName').value;// input de register donde se guarda el nombre
  const lastName = document.getElementById('lastName').value;

  try {
    const userCredetial = await createUserWithEmailAndPassword(auth, email.value, password.value);
    const user = userCredetial.user;
    console.log(user);
    const username = `${userName} ${lastName}`;
    updateProfile(auth.currentUser, {
      displayName: username,
      // función de firebase para darle valor al displayName el cual va a ser el nombre del usuario
    });
    navigateTo('/wall');
  } catch (error) {
    const errorCode = error.code;
    // UI para mostrar errores de validación de email y contraseña débil
    if (errorCode === 'auth/email-already-in-use') {
      spanEmail.textContent = 'Email in use';
    } else if (errorCode === 'auth/invalid-email') {
      spanEmail.textContent = 'Invalid Email';
    } else if (errorCode === 'auth/weak-password') {
      spanPassword.textContent = 'Password is too weak';
    }
  }
};

// Fx para inicio de sesión con Google
export const signPop = async (navigateTo) => {
  const spanGoogle = document.getElementById('spanErrorGoogle');
  const provider = new GoogleAuthProvider();
  try {
    // Ejecutar la autenticación con Google
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    // Iniciar sesión en Firebase con las credenciales obtenidas
    const userCredential = await signInWithCredential(auth, credential);
    const user = userCredential.user;
    navigateTo('/wall');
    console.log(user);
  } catch (error) {
    const errorCode = error.code;
    if (errorCode === 'auth/popup-closed-by-user') {
      spanGoogle.textContent = 'No ha ingresado correctamente con Google';
    }
    console.log(error);
  }
};

// Fx para iniciar sesión
export const LoginUser = (navigateTo) => {
  const emailInput = document.getElementById('txtEmail');
  const passwordInput = document.getElementById('txtPassword');
  const email = emailInput.value;
  const password = passwordInput.value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      // ...
      navigateTo('/wall');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      // UI para usuario no encontrado o contraseña equivocada
      if (errorCode === 'auth/user-not-found') {
        emailInput.classList.add('invalid');
        document.getElementById('spanErrorEmail').textContent = 'User not found';
      } else if (errorCode === 'auth/wrong-password') {
        passwordInput.classList.add('invalid');
        document.getElementById('spanErrorPassword').textContent = 'Wrong password';
      }
    });
};

// Fx para sign out
export const exit = (navigateTo) => {
  signOut(auth)
    .then(() => {
    // Sign-out successful.
      console.log('saliendo');
      navigateTo('/');
    }).catch((error) => {
      console.log(error);
    // An error happened.
    });
};

// Obtiene los datos de nuestra colección
getDocs(colRef)
  .then((snapshot) => {
    const posts = []; // array de nuestra colección
    snapshot.docs.forEach((doc) => {
      posts.push({ ...doc.data(), id: doc.id });
    });
  })
  .catch((error) => {
    console.log(error.message);
  });

//  getPost permite obtener inmediatamente cambios en la colección utilizando una consulta ordenada.
//  Cada vez que haya cambios, se ejecutará la fx callback para procesar los datos actualizados.
export const getPost = (callback) => onSnapshot(orderedQuery, callback);

// Fx para editar posts
export const editPosts = (id, inputEditName, inputEditDescription) => {
  const documentEditDoc = newdoc(colRef, id);
  return updateDoc(documentEditDoc, {
    petName: inputEditName,
    description: inputEditDescription,
    timestamp: serverTimestamp(),
  })
    .then(() => {
      console.log('Documento actualizado correctamente');
    })
    .catch((error) => {
      console.error('Error al actualizar el documento: ', error);
    });
};

// Fx para eliminar posts
export const deletePost = (id) => {
  const documentDeleteDoc = newdoc(colRef, id); // Consulta la colección y el id del post
  return deleteDoc(documentDeleteDoc)
    .then(() => {
      console.log('Funciona Delete');
    })
    .catch(() => {
      console.log('No funciona');
    });
};

// Fx para agregar publicaciones
export const addPost = (petName, petDescription) => {
  const userName = getAuth().currentUser.displayName;
  return addDoc(colRef, {
    petName,
    description: petDescription,
    timestamp: serverTimestamp(), // definimos a timestamp para que se guarde en la colección
    username: userName,
    uid: getAuth().currentUser.uid,
    like: [], // aquí se guardarán los like
  });
};

// Fx para dar like
export const likePost = (id) => {
  const post = newdoc(colRef, id);
  return updateDoc(post, {
    like: arrayUnion(auth.currentUser.uid), // arrayUnion agrega el elemento uid al array de likes
  });
};

// Fx para quitar like
export const dislikePost = (id) => {
  const post = newdoc(colRef, id);
  return updateDoc(post, {
    like: arrayRemove(auth.currentUser.uid), // arrayRemove quita el elemento uid al array de likes
  });
};
