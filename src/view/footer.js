export const footer = () => {
  /* const body = document.getElementById('root'); */

  const footerElement = document.createElement('footer');
  const pFooter = document.createElement('p');
  pFooter.textContent = 'CopyRight  Marissa-Gabriela-Rebeca  Contáctanos';

 /*  body.append(footerElement); */
  footerElement.append(pFooter);
};
