export const login = () => {
return 
`<div id="login">
<div class="header">
  <h1>Getting Started with Firebase Auth</h1>
</div>
<form>
  <div class="group">
    <input id="txtEmail" type="email">
    <label>Email</label>
  </div>
  <div class="group">
    <input id="txtPassword" type="password">
    <label>Password</label>
  </div>
  <div id="divLoginError" class="group">
    <div id="lblLoginErrorMessage" class="errorlabel">Error message</div>
  </div>
  <button id="btnLogin" type="button" class="button buttonBlue">Log in</button>
  <button id="btnSignup" type="button" class="button buttonBlue">Sign up</button>
</form>
</div>

<div id="app">
<div class="header">
  <h1>Welcome to Your Amazing App</h1>
</div>
<form>
  <div class="group">
    <div id="lblAuthState" class="authlabel"></div>
  </div>
  <button id="btnLogout" type="button" class="button buttonBlue">Log out</button>
</form>
</div>`
};