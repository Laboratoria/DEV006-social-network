export const login = () => { 
  const login = document.createElement('div');
  login.setAttribute('id','login')
  login.setAttribute('class','login')

  const header = document.createElement("header");

  const logoImg = document.createElement("img");
  logoImg.setAttribute("src", "img/logo.png");

  const nav = document.createElement('nav');

  const ul = document.createElement('ul');

  const btnHome = document.createElement('li');
  btnHome.setAttribute('id', 'Home');

  const homeLink = document.createElement('a');
  homeLink.setAttribute('href','#');
  homeLink.textContent = 'Home';

  const h1 = document.createElement('h1');
  h1.textContent = 'Be My Friend';

  const form = document.createElement('form');
  form.setAttribute('action','#')
  form.setAttribute('method','POST')

  const h2 = document.createElement('h2');
  h2.textContent = 'Log In';

  const group1 = document.createElement('div');
  group1.setAttribute('class','group')

  const txtEmail = document.createElement('input');
  txtEmail.setAttribute('id', 'txtEmail')
  txtEmail.setAttribute('type', 'email')
  txtEmail.setAttribute('placeholder', 'Email')

  const group2 = document.createElement('div')
  group2.setAttribute('class','group')

  const txtPassword = document.createElement('input');
  txtPassword.setAttribute('id', 'txtPassword')
  txtPassword.setAttribute('type', 'password')
  txtPassword.setAttribute('placeholder', 'Password')

  const btnLogin = document.createElement('button')
  btnLogin.setAttribute('id', 'btnLogin')
  btnLogin.setAttribute('type', 'button')
  btnLogin.setAttribute('class', 'button')

  const ulPassword = document.createElement('ul');

  const liPassword = document.createElement('li');
  liPassword.setAttribute('id','forgotPassword');

  const aPassword = document.createElement('a');
  aPassword.setAttribute('href','#');

  const h4 = document.createElement('h4');
  h4.textContent = 'or log in with';
  h4.setAttribute('class','logInWith');

  const btnGoogle = document.createElement('button');
  btnGoogle.setAttribute('class','btnGoogle');
  btnGoogle.textContent = 'Google';

  const imgGoogle = document.createElement('img');
  imgGoogle.setAttribute('src','../img/googleplus.png');

  const ulAccount = document.createElement('ul');

  const liAccount = document.createElement('li');
  liAccount.textContent ='Need an account?'

  const aAccount = documen.createElement('a')
  aAccount.setAttribute('href','#')
  aAccount.setAttribute('id','btnSignup')
  aAccount.setAttribute('type','submit')
  aAccount.setAttribute('class','button')

  const footer = document.createElement('footer');
  const pFooter = document.createElement('p');
  pFooter.textContent = "CopyRight  Marissa-Gabriela-Rebeca  Contáctanos";
  `<div id="login" class="bodyimg">
  <header>
    <img src="img/logo.png">
    <nav>    
      <ul>
        <li id="btnLoginHome">
          <a  href="#">Home</a>
        </li>
      </ul> 
    </nav>
   </header>
    <h1> Be My Friend</h1>
  <form action="#" method="POST">
      <h2>Log In</h2>
    <div class="group">
      <input id="txtEmail" type="email" placeholder="Email">
    </div>
    <div class="group">
      <input id="txtPassword" type="password" placeholder="Password">
    </div>
    <button id="btnLogin" type="button" >Log In</button>
    <ul>
      <li id="forgotPassword">
        <a href="#">Forgot Password?</a>
      </li>
    </ul>
    <h4 class="logInWith">or log in with</h4><hr>
    <button class="btnGoogle"><img src="../img/googleplus.png">Google</button>
    <ul>
      <li>
        <a>Need an account?</a>
        <a href="#" id="btnSignup" type="submit" class="button buttonBlue">Sign Up</a>
      </li>
    </ul>
  </form>
  <footer>
     <p>CopyRight  Marissa-Gabriela-Rebeca  Contáctanos</p>
  </footer>
  </div>`
  };
  
  const txtEmail = document.getElementById("txtEmail");
  const txtPassword = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignup = document.getElementById('btnSignup');
  const btnLogout = document.getElementById('btnLogout');