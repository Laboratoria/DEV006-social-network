// UI validación de contraseña segura con expresion regular
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

// Validación de que sea email con expresion regular
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
