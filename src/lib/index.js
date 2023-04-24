// aqui exportaras las funciones que necesites

/*export const myFunction = () => {
  // aqui tu codigo
  console.log('Hola mundo!');
};*/

import { firebaseConfig } from "../firebase.config.js";
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { async } from "regenerator-runtime";

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);



export const createUser = async ()  => {

  const email = document.getElementById('txtEmail')
  const password = document.getElementById('txtPassword')
  const spanEmail = document.getElementById('spanErrorEmail')
  const spanPassword = document.getElementById('spanErrorPassword')
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value)
    console.log(userCredential)
    
  } catch (error) {
    const errorCode = error.code;
    console.log(errorCode)
    const errorMessage = error.message;
    console.log(errorMessage)

    if(errorCode === 'auth/email-already-in-use'){
      spanEmail.textContent = 'Email in use'
    }else if (errorCode === 'auth/invalid-email'){
      spanEmail.textContent = 'Invalid Email'
    }else if(errorCode === 'auth/weak-password'){
      spanPassword.textContent = 'Password is too weak'
    }
  }
};

export const LoginUser = () =>{

  const email = document.getElementById('txtEmail')
  const password = document.getElementById('txtPassword')

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    console.log(errorCode)
    const errorMessage = error.message;
    console.log(errorMessage)
  });
};

// Log out
export const logout = async () => {
  await signOut(auth);
}

export const validateEmail = () =>{
  const email = document.getElementById('txtEmail')
  
  const correoRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  console.log(correoRegex)

  if (correoRegex.test(email.value)) {
      email.classList.remove('invalid');
      email.classList.add('valid');
      document.getElementById('spanErrorEmail').textContent = '';
  } else {
    email.classList.remove('valid');
    email.classList.add('invalid');
    document.getElementById('spanErrorEmail').textContent = 'Please enter a valid email.';
  }

};

export const securePassword = () =>{
  const password = document.getElementById('txtPassword')
  
  const paswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_][^\s]{6,15}$/;

  if (paswordRegex.test(password.value)) {
      password.classList.remove('invalid');
      password.classList.add('valid');
      document.getElementById('spanErrorPassword').textContent = '';
  } else {
    password.classList.remove('valid');
    password.classList.add('invalid');
    document.getElementById('spanErrorPassword').textContent = 'Please enter a strong password that contains 6 to 15 characters, at least one uppercase letter, one lowercase letter, one digit, and one special character. Please make sure there are no spaces.';
  }

};