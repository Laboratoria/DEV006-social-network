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
/*   onAuthStateChanged, */
} from 'firebase/auth';
import { firebaseConfig } from '../firebase.config.js';

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

// Initialize Firebase Authentication and get a reference to the service

export const signPop = async (/* event */) => {
/*   event.preventDefault(); */

  const provider = new GoogleAuthProvider();
  try {
    // Ejecutar la autenticación con Google
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);

    // Iniciar sesión en Firebase con las credenciales obtenidas
    const userCredential = await signInWithCredential(auth, credential);
    const user = userCredential.user;
    console.log(user);
  } catch (error) {
    console.log(error);
  }
};

export const createUser = async () => {
  const email = document.getElementById('txtEmail');
  const password = document.getElementById('txtPasswordAgain');
  const spanEmail = document.getElementById('spanErrorEmail');
  const spanPassword = document.getElementById('spanErrorPassword');

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
    console.log(userCredential);
  } catch (error) {
    const errorCode = error.code;
    // const errorMessage = error.message;
    if (errorCode === 'auth/email-already-in-use') {
      spanEmail.textContent = 'Email in use';
    } else if (errorCode === 'auth/invalid-email') {
      spanEmail.textContent = 'Invalid Email';
    } else if (errorCode === 'auth/weak-password') {
      spanPassword.textContent = 'Password is too weak';
    }
  }
};

export const LoginUser = () => {
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
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      if (errorCode === 'auth/user-not-found') {
        emailInput.classList.add('invalid');
        document.getElementById('spanErrorEmail').textContent = 'User not found';
      } else if (errorCode === 'auth/wrong-password') {
        passwordInput.classList.add('invalid');
        document.getElementById('spanErrorPassword').textContent = 'Wrong password';
      }
    });
};

// Validación de contraseña segura
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


export const exit = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log(auth+ "saliendo")
    }).catch((error) => {
      console.log(error)
      // An error happened.
    });
};


