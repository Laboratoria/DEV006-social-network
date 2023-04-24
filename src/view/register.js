import { createUser, securePassword } from "../lib/index.js";

export const register = () => {

const body= document.getElementById("root")
body.innerHTML= "";

const bodyimg = document.createElement("div");
bodyimg.setAttribute("class", "bodyimg");

const registerdiv = document.createElement('div');
registerdiv.setAttribute('id','register')
registerdiv.setAttribute('class','register')

const header = document.createElement("header");

const logoImg = document.createElement("img");
logoImg.setAttribute("src", "img/logo.png");

const nav = document.createElement('nav');

const ul = document.createElement('ul');

const btnHome = document.createElement('li');
btnHome.setAttribute('id', 'Home');

const homeLink = document.createElement('a');
homeLink.setAttribute('href','/');
homeLink.textContent = 'Home';

const h1 = document.createElement('h1');
h1.textContent = 'Be My Friend';

const form = document.createElement('form');
form.setAttribute('action','#')
form.setAttribute('method','POST')

const h2 = document.createElement('h2');
h2.textContent = 'Register';

const group1 = document.createElement('div');
group1.setAttribute('class','group')

const txtEmail = document.createElement('input');
txtEmail.setAttribute('id', 'txtEmail')
txtEmail.setAttribute('type', 'email')
txtEmail.setAttribute('placeholder', 'Email')


const spanErrorEmail = document.createElement('span')
spanErrorEmail.setAttribute('id','spanErrorEmail')

const group2 = document.createElement('div')
group2.setAttribute('class','group')

const txtPassword = document.createElement('input');
txtPassword.setAttribute('id', 'txtPassword')
txtPassword.setAttribute('type', 'password')
txtPassword.setAttribute('placeholder', 'Password')
txtPassword.addEventListener('keyup', securePassword );

const spanErrorPassword = document.createElement('span')
spanErrorPassword.setAttribute('id','spanErrorPassword')

const btnRegister = document.createElement('button');
btnRegister.setAttribute('id', 'btnRegister');
btnRegister.setAttribute('type', 'button');
btnRegister.setAttribute('class', 'button');
btnRegister.addEventListener('click', createUser);
btnRegister.textContent ='Sign Up';


body.append(bodyimg);
bodyimg.append(registerdiv);
registerdiv.append(header,h1,form)
header.append(logoImg,nav)
nav.append(ul)
ul.append(btnHome)
btnHome.append(homeLink)
form.append(h2,group1,spanErrorEmail,group2,spanErrorPassword, btnRegister)
group1.append(txtEmail)
group2.append(txtPassword)
};
    