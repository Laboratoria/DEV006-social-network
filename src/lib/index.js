// aqui exportaras las funciones que necesites

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
  doc as newdoc, query, orderBy, onSnapshot, arrayUnion,
  // Se importa serveTimestamp para obtener fecha y hora del post
} from 'firebase/firestore';
import { firebaseConfig } from '../firebase.config.js';
// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// Initialize Firestore

const dataBase = getFirestore(app);

// collection reference
export const colRef = collection(dataBase, 'post');

// get collection data
getDocs(colRef)
  .then((snapshot) => {
    const posts = [];
    snapshot.docs.forEach((doc) => {
      posts.push({ ...doc.data(), id: doc.id });
    });
    console.log(posts);
    // posts.forEach((post) => {
    //   console.log(post.like.length);
    // });
  })
  .catch((error) => {
    console.log(error.message);
  });

// Funcion get post para usar en wall
const orderedQuery = query(colRef, orderBy('timestamp', 'desc'));
export const getPost = (callback) => onSnapshot(orderedQuery, callback);

// edit documents
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
// delete documents
export const deletePost = (id) => {
  const documentDeleteDoc = newdoc(colRef, id);

  return deleteDoc(documentDeleteDoc)
    .then(() => {
      console.log('Funciona Delete');
    })
    .catch(() => {
      console.log('No funciona');
    });
};

// adding documents
export const addPost = (petName, petDescription) => {
  const userName = getAuth().currentUser.displayName;
  return addDoc(colRef, {
    petName,
    description: petDescription,
    timestamp: serverTimestamp(), // definimos a timestamp para que se guarde en la colección
    userid: userName, // definimos userid para guardar el nombre de la persona que publica el post
    like: [],
    likeCount: 0,
  });
};

export const likePost = (id) => {
  const post = newdoc(colRef, id);
  return updateDoc(post, {
    like: arrayUnion(auth.currentUser.uid),
  });
};

/* contador de likes */
// export const likePost = (id) => {
//   let vacio = [];
//   const post = newdoc(colRef, id);
//   const usuarios = arrayUnion(auth.currentUser.uid);
//   const cantidad = vacio.push(usuarios);
//   return updateDoc(post, {
//     like: usuarios,
//     likeCount: cantidad,
//   });
// };

/* export const addLike = (id) => {
  const docRef = newdoc(colRef, id);

  return getDocs(docRef)
    .then((doc) => {
      const docData = doc.data();
      const newLikes = docData.likes + 1;
      return updateDoc(docRef, {
        likes: newLikes,
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log(error);
      console.log(errorCode);
    });
}; */

// Initialize Firebase Authentication and get a reference to the service

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
      spanGoogle.textContent = 'No ha ingresado correctamente con google';
    }
    console.log(error);
  }
};

// Fx para crear usuarix
export const createUser = async () => {
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

// Fx para iniciar sesión (ya registrado)
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

// UI validación de contraseña segura
export const securePassword = (password, errorSpan) => {
  const paswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_][^\s]{6,15}$/;
  if (paswordRegex.test(password.value)) {
    password.classList.remove('invalid');
    password.classList.add('valid');
    errorSpan.textContent = '';
  } else {
    password.classList.remove('valid');
    password.classList.add('invalid');
    errorSpan.textContent = 'Please enter a strong password that contains 6 to 15 characters, at least one uppercase letter, one lowercase letter, one digit, and one special character. Please make sure there are no spaces.';
  }
};

// Validación de que las contraseñas coincidan
export const validatePasswords = (password, passwordAgain, errorSpan) => {
  if (password.value !== passwordAgain.value) {
    passwordAgain.classList.remove('valid');
    passwordAgain.classList.add('invalid');
    errorSpan.textContent = 'Passwords are different.';
  } else {
    passwordAgain.classList.remove('invalid');
    passwordAgain.classList.add('valid');
    errorSpan.textContent = '';
  }
};

// Validación de que sea email
export const validateEmail = (email, spanErrorEmail) => {
  const correoRegex = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;

  if (correoRegex.test(email.value)) {
    email.classList.remove('invalid');
    email.classList.add('valid');
    spanErrorEmail.textContent = '';
  } else {
    email.classList.remove('valid');
    email.classList.add('invalid');
    spanErrorEmail.textContent = 'Please enter a valid email.';
  }
};

// Fx para sign out
export const exit = (navigateTo) => {
  signOut(auth).then(() => {
    // Sign-out successful.
  /* navigateTo para welcome */
    console.log('saliendo');
    navigateTo('/');
  }).catch((error) => {
    console.log(error);
    // An error happened.
  });
};
