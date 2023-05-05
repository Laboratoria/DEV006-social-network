import {home} from "./templates/home.js"


const root = document.getElementById("root");

const routes = [
    { path: '/', component: home }

]
//const default= '/';

root.innerHTML= home
