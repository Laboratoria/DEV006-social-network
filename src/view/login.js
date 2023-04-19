export const login = () => {
return `<div id="login">
<div class="header">
  <h1> Be My Friend</h1>
</div>
<form action="#" method="POST">
    <h2>Log in</h2>
  <div class="group">
    <input id="txtEmail" type="email" placeholder="Email">
  </div>
  <div class="group">
    <input id="txtPassword" type="password" placeholder="Password">
  </div>
  <button id="btnLogin" type="button" class="button buttonBlue">Log in</button>
  <ul>
    <li id="forgotPassword">
      <a href="#">Forgot Password?</a>
    </li>
  </ul>
  <h4>or log in with</h4>
  <ul>
    <li>
      <a>Need an account?</a>
      <a href="#" id="btnSignup" type="submit" class="button buttonBlue"> Sing up</a>
    </li>
  </ul>
</form>
</div>`
};