function signup(navigateTo) {

  const sectionSignUp = document.createElement('section'); 
  const buttonReturn = document.createElement('button'); 
  const formSignUp = document.createElement('form'); 
  const currentCode=document.createElement("p");
  const userSignUp=document.createElement("p"); 
  const inputUserSignUp = document.createElement('input'); 
  const emailSignUp=document.createElement("p"); 
  const inputEmailSignUp = document.createElement('input'); 
  const passwordSignUp=document.createElement("p"); 
  const inputPasswordSignUp = document.createElement('input'); 
  const confirmPassword=document.createElement("p"); 
  const inputConfirmPasswordSignUp=document.createElement("input"); 
  const buttonSignUp = document.createElement('button'); 

  currentCode.textContent="current code ****"
  inputUserSignUp.placeholder = 'Enter user'; 
  inputEmailSignUp.placeholder = 'Enter email'; 
  inputPasswordSignUp.placeholder="Enter password"; 
  inputConfirmPasswordSignUp.placeholder="confirm password";
  userSignUp.textContent="User name"; 
  emailSignUp.textContent="E-mail"; 
  passwordSignUp.textContent="Password"; 
  confirmPassword.textContent="Confirm password"; 
  buttonSignUp.textContent = 'SignUp'; 
  buttonReturn.textContent = 'Back'; 
  buttonReturn.classList.add("buttonReturn");

  formSignUp.classList.add("container-formSignUp");
  currentCode.classList.add("parrafo-signUp")
  userSignUp.classList.add("parrafo-signUp");
  emailSignUp.classList.add("parrafo-signUp");
  passwordSignUp.classList.add("parrafo-signUp");
  confirmPassword.classList.add("parrafo-signUp");
  inputUserSignUp.classList.add("input-userSignUp");
  inputEmailSignUp.classList.add("input-userSignUp"); 
  inputPasswordSignUp.classList.add("input-userSignUp");
  inputConfirmPasswordSignUp.classList.add("input-userSignUp");
  buttonSignUp.classList.add("btn-windowSignUp");
  


  buttonReturn.addEventListener('click', () => { 

    navigateTo('/'); 

  }); 

 
  formSignUp.append(currentCode,userSignUp,inputUserSignUp,emailSignUp, inputEmailSignUp,passwordSignUp,inputPasswordSignUp,confirmPassword,inputConfirmPasswordSignUp,buttonSignUp); 
  sectionSignUp.append(buttonReturn,formSignUp);
  
  
  return sectionSignUp; 

} 

 
 

export default signup; 

 
  /*const section = document.createElement('section');

  const title = document.createElement('h2');
  const buttonReturn = document.createElement('button');
  // const form = document.createElement('form');
  const inputEmail = document.createElement('input');
  const inputPass = document.createElement('input');
  const buttonLogin = document.createElement('button');

  const container = document.createElement('div');
  container.className = 'container-app';

  inputEmail.placeholder = 'Write email';
  inputEmail.className = 'input-email';
  inputPass.placeholder = 'pass';
  inputPass.classList.add('inputPassword');

  title.textContent = 'Login';
  title.className = 'title';
  buttonLogin.textContent = 'go';
  buttonLogin.classList.add('buttonLogin');

  buttonReturn.textContent = 'Return to home';
  buttonReturn.classList.add('buttonReturn');

  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });


  container.append(title, inputEmail, inputPass, buttonLogin, buttonReturn);
  section.append(container);


  return section;
}

export default login;
// function signUp (navigateTo) {
//   const form2 = document.createElement ('form');
//   const userName = document.createElement ('p');
//   const inputUserName = document.createElement ('input');
//   const email = document.createElement ('p');
//   const inputEmail = document.createElement ('input');
//   const password = document.createElement ('p');
//   const inputPassword = document.createElement ('input');
//   const confirmPassword = document.createElement ('p');
//   const inputConfirmPassword = document.createElement ('input');
//   const btnSignUp = document.createElement ('button');
//   const btnReturn = document.createElement ('button');
//   const section = document.createElement ('section');

//   inputUserName.placeholder = 'Write username';
//   inputEmail.placeholder = 'Write email';
//   inputPassword.placeholder = 'Write password';
//   inputConfirmPassword.placeholder = 'Confirm password';

//   btnSignUp.textContent = 'Sign Up';

//   btnReturn.textContent = 'Return';
//   btnReturn.addEventListener('click',() => {
//     navigateTo('/');
//   })

//   form2.append (inputUserName, inputEmail, inputPassword, inputConfirmPassword, btnSignUp );
//   section.append (form2, btnReturn);

//   return section;
// }

// export default signUp;*/
