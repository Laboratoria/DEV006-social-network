import { welcome } from './view/welcome.js';
welcome();

import  { login } from './view/login.js';

const body = document.getElementById('root'); 

/* const btnLoginHome = document.getElementById('btnLoginHome');

btnLoginHome.addEventListener("click", login)   */

const router = (route) =>{
    switch(route){
        case '/':
            return console.log('welcome')
            
        case '#/login':{ 
            /* const btnLoginHome = document.getElementById('btnLoginHome');          

            btnLoginHome.addEventListener("click", login) */
            login()
           
        }
        default:
            return console.log('error')        
    }
}

window.addEventListener('hashchange', ()=>{
    router(window.location.hash)
})

