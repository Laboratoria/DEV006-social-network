export const login = () => {
return `<div id="login">
<div class="header">
  <h1> Be My Friend</h1>
</div>
<form action="#" method="POST">
    <h2>Log In</h2>
  <div class="group">
    <input id="txtEmail" type="email" placeholder="Email">
  </div>
  <div class="group">
    <input id="txtPassword" type="password" placeholder="Password">
  </div>
  <button id="btnLogin" type="button" class="button buttonBlue">Log In</button>
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
</div>`
};