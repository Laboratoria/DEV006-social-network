import { welcome } from './view/welcome.js';
import { login } from './view/login.js';
import { footer } from './view/footer.js'

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
    default:
    console.log('error');
    break;        
    }
}

window.addEventListener('popstate', ()=>{
    router(window.location.pathname)
}) 

/* document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.length <= 1) { // Verificar si la longitud es menor o igual a 1
      router('/');
    } else {
      router(window.location.pathname);
    }
  }); */