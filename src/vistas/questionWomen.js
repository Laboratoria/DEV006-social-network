function questionWomen(navigateTo) {
  const section = document.createElement('section');
  const sectionForm = document.createElement('section');
  const sectionHeader = document.createElement('section');
  const logo = document.createElement('img');
  const header = document.createElement('div');
  const buttonReturnSignup = document.createElement('img');
  const text = document.createElement('h5');
  const question = document.createElement('h5');
  const yes = document.createElement('h5');
  const no = document.createElement('h5');
  const checkboxYes = document.createElement('input');
  const checkboxNo = document.createElement('input');
  const containerYesNo = document.createElement('div');

  // agregar clases//
  section.classList.add('sectionLogin');
  header.classList.add('header');
  logo.classList.add('logo');
  sectionHeader.classList.add('sectionHeader');
  text.classList.add('textQuestion');
  buttonReturnSignup.classList.add('buttonReturnSignup');
  containerYesNo.classList.add('containerYesNo');
  question.classList.add('questionWomen');
  yes.classList.add('labels');
  no.classList.add('labels');

  // agregar atributos//
  logo.setAttribute('src', 'images/logo.png');
  text.textContent = 'Esta aplicación está pensada para personas que se identifican como mujeres. Por favor responde:';
  question.textContent = ' ¿Te identificas como mujer?';
  checkboxYes.type = 'radio';
  checkboxNo.type = 'radio';
  checkboxYes.id = 'Yes';
  checkboxNo.id = 'No';
  checkboxYes.name = 'checkbox';
  checkboxNo.name = 'checkbox';
  yes.textContent = 'Si';
  no.textContent = 'No';

  buttonReturnSignup.setAttribute('src', 'images/arrow.png');

  // agregar texto a los botones//
  buttonReturnSignup.addEventListener('click', () => {
    navigateTo('/');
  });

  checkboxNo.addEventListener('click', () => {
    navigateTo('/sorry');
  });

  checkboxYes.addEventListener('click', () => {
    navigateTo('/signup');
  });

  sectionHeader.append(header, logo);
  containerYesNo.append(yes, checkboxYes, no, checkboxNo);
  sectionForm.append(text, question, containerYesNo);
  section.append(sectionHeader, buttonReturnSignup, sectionForm);

  return section;
}
export default questionWomen;
