import { welcome } from './view/welcome.js';
import { login } from './view/login.js';
import {footer} from './view/footer.js'
import { LoginUser } from './lib/index.js';

const txtEmail = document.getElementById("txtEmail");
const txtPassword = document.getElementById('txtPassword');

const router = (route) =>{
  switch(route){
    case '/':{
        welcome();
        footer();
        break; 
    }
    case '/login':{ 
        login();
        footer();  
        break;
    }
    case '/loginuser': {
        LoginUser(txtEmail.value, txtPassword.value);
    }
    default:
    console.log('error');
    break;        
    }
}

// window.addEventListener('popstate', ()=>{
//     router(window.location.pathname)
// }) 

// function navigateTo(url) {
//   window.history.pushState(null, null, url);
//   router(url);
// }
//   // Ejemplo de uso: 
// navigateTo('/');

window.addEventListener('popstate', ()=>{
    router(window.location.pathname)
})
window.addEventListener('DOMContentLoaded', function() {
  if (window.location.pathname.length <= 1) { // Verificar si la longitud es menor o igual a 1
    router('/');
  } else {
    router(window.location.pathname);
  }
}); 
