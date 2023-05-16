export function errorMessages(codeError, errorEmail, errorPassword) {
  if (codeError === 'auth/email-already-in-use') {
    errorEmail.textContent = 'Este correo ya está registrado';
  } else if (codeError === 'auth/weak-password') {
    errorPassword.textContent = 'La contraseña ingresada es demasiado débil, debe tener más de 6 caracteres';
  } else if (codeError === 'auth/invalid-email') {
    errorEmail.textContent = 'El correo electrónico ingresado no es válido';
  } else if (codeError === 'auth/missing-password') {
    errorPassword.textContent = 'Escribe una contraseña válida de más de 6 caracteres';
  } else if (codeError === 'auth/user-not-found') {
    errorEmail.textContent = 'Email no registrado';
  } else if (codeError === 'auth/wrong-password') {
    errorPassword.textContent = 'Contraseña incorrecta';
  }
}
