import { welcome } from './view/welcome.js';
import { login } from './view/login.js';
import {footer} from './view/footer.js'



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

// window.addEventListener('popstate', ()=>{
//     router(window.location.pathname)
// }) 

// function navigateTo(url) {
//   window.history.pushState(null, null, url);
//   router(url);
// }
//   // Ejemplo de uso: 
// navigateTo('/');

document.addEventListener("click", (e)=> {
/*   const { target } = e; */
  if (!e.target.matches("a")) {
    return;
  }
  e.preventDefault();
  
  console.log(e.target.pathname);
  router(e.target.pathname);
  window.history.pushState({}, "", e.target.href);
});


router(window.location.pathname);