import { welcome } from './view/welcome.js';
import { login } from './view/login.js';
import {footer} from './view/footer.js'


const router = (route) =>{
    switch(route){
        case '':{
            welcome()
            footer()
        }
        break;  
        case '#/login':{ 
            login()
            footer()
        }
        break;  
        default:
            console.log('error');
        break;     
    }
}


window.addEventListener('popstate', ()=>{
    router(window.location.pathname)
})
