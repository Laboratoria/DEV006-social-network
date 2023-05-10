import { createUserWithEmailAndPassword } from "firebase/auth";
import{auth} from './firebase'

const formulario = document.querySelector("#signup-form");

formulario.addEventListener('submit', async (e) => {
e.preventDefault()

const email = formulario['signup-email'].value
const password = formulario['signup-password'].value
console.log(email, password)

try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    console.log(userCredential)
} catch(error) {
console.log(error)
}
})