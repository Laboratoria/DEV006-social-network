export const footer = () => {
  const body= document.getElementById("root")

  const footer = document.createElement('footer');
  const pFooter = document.createElement('p');
  pFooter.textContent = "CopyRight  Marissa-Gabriela-Rebeca  Contáctanos";

  body.append(footer);
  footer.append(pFooter);
}