function home(navigateTo) {
  const section = document.createElement("section");
  const title = document.createElement("h2");
  const formLogin = document.createElement("form");
  const inputAcces = document.createElement("input");
  const inputPassword = document.createElement("input");
  const btnLogin = document.createElement("button");
  const button = document.createElement("button");

  //input home
  inputAcces.placeholder = "write email";
  inputPassword.placeholder = "pass";

  //boton de iniciar sesión
  btnLogin.textContent = "Iniciar sesión";
  btnLogin.addEventListener("click", () => {
    navigateTo();
  });

  //boton de registrarse
  button.textContent = "Registrarse";
  button.addEventListener("click", () => {
    navigateTo("/login");
  });

  title.textContent = "Welcome to my project";

  form.append(inputAcces, inputPassword);
  section.append(title, button, btnLogin, formLogin);
  return section;
}

export default home;
