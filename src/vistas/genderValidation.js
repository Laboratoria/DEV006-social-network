import imgLogo from '../images/logo.png';

function genderValidation(navigateTo) {
  const section = document.createElement('section');
  const sectionForm = document.createElement('section');
  const sectionHeader = document.createElement('section');
  const logo = document.createElement('img');
  const header = document.createElement('div');
  const text = document.createElement('h3');

  // agregar clases//
  section.classList.add('sectionLogin');
  header.classList.add('header');
  logo.classList.add('logo');
  sectionHeader.classList.add('sectionHeader');
  text.classList.add('textValidation');

  // agregar atributos//
  logo.setAttribute('src', imgLogo);
  text.textContent = 'Lo sentimos, no puedes ingresar a nuestra aplicación debido a que está dirigida solo a mujeres.';

  sectionHeader.append(header, logo);
  sectionForm.append(text);
  section.append(sectionHeader, sectionForm);

  return section;
}
export default genderValidation;
