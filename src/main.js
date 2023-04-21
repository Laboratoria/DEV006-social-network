import { welcome } from './view/welcome.js';
import  { login } from './view/login.js';
import {footer} from './view/footer.js'

/* welcome();
footer(); */

const body = document.getElementById('root'); 


const router = (route) =>{
    switch(route){
        case '':{
            welcome();
            footer() 
        }
        case '#/welcome':{
            welcome();
            footer()
        
            return console.log('welcome')
        }  
        case '#/login':{ 
            login()
            footer()
         
        }
        default:
            return console.log('error')        
    }
}

window.addEventListener('hashchange', ()=>{
    router(window.location.hash)
})



