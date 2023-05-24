
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';

export function registerUser(email,password){
console.log(email,password);

return createUserWithEmailAndPassword(auth, email, password);

}

export function userLogin(email,password) {
  return signInWithEmailAndPassword(auth, email, password);
}