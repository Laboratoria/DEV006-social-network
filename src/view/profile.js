export const adopt = (navigateTo) => {
  const body = document.getElementById('root');
  body.innerHTML = '';

  const bodyimg = document.createElement('div');
  bodyimg.setAttribute('class', 'bodyimg');

  const registerdiv = document.createElement('div');
  registerdiv.setAttribute('id', 'register');
  registerdiv.setAttribute('class', 'register');

  const header = document.createElement('header');

  const logoImg = document.createElement('img');
  logoImg.setAttribute('src', 'img/logo.png');

  const nav = document.createElement('nav');

  const ul = document.createElement('ul');

  const btnHome = document.createElement('li');
  btnHome.setAttribute('id', 'Home');

  const wallLink = document.createElement('a');
  wallLink.textContent = 'Wall';
  wallLink.addEventListener('click', () => {
    navigateTo('/wall');
  });

  const h1 = document.createElement('h1');
  h1.textContent = 'Be My Friend';

  // -------------------------------------------------INICIA EL FORMULARIO
  const form = document.createElement('form');

  const h2 = document.createElement('h2');
  h2.textContent = 'Adoption';

  const userNameLabel = document.createElement('label');
  userNameLabel.setAttribute('for', 'userName');
  userNameLabel.textContent = 'Name';
  userNameLabel.classList.add('labelQuestions');

  const userName = document.createElement('input');
  userName.setAttribute('type', 'text');
  userName.setAttribute('placeholder', 'Name');
  userName.setAttribute('id', 'userName');

  const lastNameLabel = document.createElement('label');
  lastNameLabel.setAttribute('for', 'lastName');
  lastNameLabel.textContent = 'Last Name';
  lastNameLabel.classList.add('labelQuestions');

  const lastName = document.createElement('input');
  lastName.setAttribute('type', 'text');
  lastName.setAttribute('placeholder', 'Last Name');
  lastName.setAttribute('id', 'lastName');

  const birthdayLabel = document.createElement('label');
  birthdayLabel.setAttribute('for', 'birthday');
  birthdayLabel.textContent = 'Birthday';
  birthdayLabel.classList.add('labelQuestions');

  const birthday = document.createElement('input');
  birthday.setAttribute('type', 'date');
  birthday.setAttribute('id', 'birthday');

  // ----------------------------------------------------------INPUT RADIO DO YOU HAVE PETS
  const doYouHavePetsLabel = document.createElement('label');
  doYouHavePetsLabel.setAttribute('name', 'petAnswers');
  doYouHavePetsLabel.textContent = 'Do you have any pets?';
  doYouHavePetsLabel.classList.add('labelQuestions');

  const yesPetsLabel = document.createElement('label');
  yesPetsLabel.setAttribute('for', 'yesPets');
  yesPetsLabel.classList.add('answerOption');

  const yesPets = document.createElement('input');
  yesPets.setAttribute('type', 'radio');
  yesPets.setAttribute('name', 'petAnswers');
  yesPets.setAttribute('id', 'yesPets');
  yesPets.setAttribute('value', 'Yes');
  yesPets.classList.add('radioAndCheckbox');

  const noPetsLabel = document.createElement('label');
  noPetsLabel.setAttribute('for', 'noPets');
  noPetsLabel.classList.add('answerOption');

  const noPets = document.createElement('input');
  noPets.setAttribute('type', 'radio');
  noPets.setAttribute('name', 'petAnswers');
  noPets.setAttribute('id', 'noPets');
  noPets.setAttribute('value', 'No');
  noPets.classList.add('radioAndCheckbox');

  // ----------------------------------------------------------PREGUNTAS CON CHECKBOX
  // ----------------------------------------------------------CHECK ALLERGIES
  const checkAllergies = document.createElement('label');
  checkAllergies.setAttribute('for', 'checkAllergies');
  checkAllergies.textContent = 'Check allergies if you have any:';
  checkAllergies.classList.add('labelQuestions');

  const brAllergies = document.createElement('br');
  const brPets = document.createElement('br');

  const petAllergyLabel = document.createElement('label');
  petAllergyLabel.setAttribute('for', 'petAllergy');
  petAllergyLabel.classList.add('answerOption');

  const petAllergyInput = document.createElement('input');
  petAllergyInput.setAttribute('type', 'checkbox');
  petAllergyInput.setAttribute('id', 'petAllergy');
  petAllergyInput.classList.add('radioAndCheckbox');
  petAllergyInput.setAttribute('value', 'Pet danger allergy');

  const pollenAllergyLabel = document.createElement('label');
  pollenAllergyLabel.setAttribute('for', 'pollenAllergy');
  pollenAllergyLabel.classList.add('answerOption');

  const pollenAllergyInput = document.createElement('input');
  pollenAllergyInput.setAttribute('type', 'checkbox');
  pollenAllergyInput.setAttribute('id', 'pollenAllergy');
  pollenAllergyInput.classList.add('radioAndCheckbox');

  const dustAllergyLabel = document.createElement('label');
  dustAllergyLabel.setAttribute('for', 'dustAllergy');
  dustAllergyLabel.classList.add('answerOption');

  const dustAllergyInput = document.createElement('input');
  dustAllergyInput.setAttribute('type', 'checkbox');
  dustAllergyInput.setAttribute('id', 'dustAllergy');
  dustAllergyInput.classList.add('radioAndCheckbox');

  const moldAllergyLabel = document.createElement('label');
  moldAllergyLabel.setAttribute('for', 'moldAllergy');
  moldAllergyLabel.classList.add('answerOption');

  const moldAllergyInput = document.createElement('input');
  moldAllergyInput.setAttribute('type', 'checkbox');
  moldAllergyInput.setAttribute('id', 'moldAllergy');
  moldAllergyInput.classList.add('radioAndCheckbox');

  const insectAllergyLabel = document.createElement('label');
  insectAllergyLabel.setAttribute('for', 'insectAllergy');
  insectAllergyLabel.classList.add('answerOption');

  const insectAllergyInput = document.createElement('input');
  insectAllergyInput.setAttribute('type', 'checkbox');
  insectAllergyInput.setAttribute('id', 'insectAllergy');
  insectAllergyInput.classList.add('radioAndCheckbox');

  const foodAllergyLabel = document.createElement('label');
  foodAllergyLabel.setAttribute('for', 'foodAllergy');
  foodAllergyLabel.classList.add('answerOption');

  const foodAllergyInput = document.createElement('input');
  foodAllergyInput.setAttribute('type', 'checkbox');
  foodAllergyInput.setAttribute('id', 'foodAllergy');
  foodAllergyInput.classList.add('radioAndCheckbox');

  // ----------------------------------------------------------ANIMALS LOOKING
  const checkAnimalsLooking = document.createElement('label');
  checkAnimalsLooking.setAttribute('for', 'checkAnimalsLooking');
  checkAnimalsLooking.textContent = 'What animals are you loooking for?';
  checkAnimalsLooking.classList.add('labelQuestions');

  const dogLabel = document.createElement('label');
  dogLabel.setAttribute('for', 'dog');
  dogLabel.classList.add('answerOption');

  const dogInput = document.createElement('input');
  dogInput.setAttribute('type', 'checkbox');
  dogInput.setAttribute('id', 'dog');
  dogInput.classList.add('radioAndCheckbox');

  const catLabel = document.createElement('label');
  catLabel.setAttribute('for', 'cat');
  catLabel.classList.add('answerOption');

  const catInput = document.createElement('input');
  catInput.setAttribute('type', 'checkbox');
  catInput.setAttribute('id', 'cat');
  catInput.classList.add('radioAndCheckbox');

  const hamsterLabel = document.createElement('label');
  hamsterLabel.setAttribute('for', 'hamster');
  hamsterLabel.classList.add('answerOption');

  const hamsterInput = document.createElement('input');
  hamsterInput.setAttribute('type', 'checkbox');
  hamsterInput.setAttribute('id', 'hamster');
  hamsterInput.classList.add('radioAndCheckbox');

  const rabbitLabel = document.createElement('label');
  rabbitLabel.setAttribute('for', 'rabbit');
  rabbitLabel.classList.add('answerOption');

  const rabbitInput = document.createElement('input');
  rabbitInput.setAttribute('type', 'checkbox');
  rabbitInput.setAttribute('id', 'rabbit');
  rabbitInput.classList.add('radioAndCheckbox');

  const parrotLabel = document.createElement('label');
  parrotLabel.setAttribute('for', 'parrot');
  parrotLabel.classList.add('answerOption');

  const parrotInput = document.createElement('input');
  parrotInput.setAttribute('type', 'checkbox');
  parrotInput.setAttribute('id', 'parrot');
  parrotInput.classList.add('radioAndCheckbox');

  const othersLabel = document.createElement('label');
  othersLabel.setAttribute('for', 'others');
  othersLabel.classList.add('answerOption');

  const othersInput = document.createElement('input');
  othersInput.setAttribute('type', 'checkbox');
  othersInput.setAttribute('id', 'others');
  othersInput.classList.add('radioAndCheckbox');

  const btnAdopt = document.createElement('button');
  btnAdopt.setAttribute('id', 'btnRegister');
  btnAdopt.setAttribute('type', 'button');
  btnAdopt.setAttribute('class', 'button');
  /*   btnRegister.addEventListener('click', createUser); */
  btnAdopt.textContent = 'Adopt';

  body.append(bodyimg);
  bodyimg.append(registerdiv);
  registerdiv.append(header, h1, form);
  header.append(nav);
  nav.append(logoImg, ul);
  ul.append(btnHome);
  btnHome.append(wallLink);
  form.append(
    h2,
    userNameLabel,
    userName,
    lastNameLabel,
    lastName,
    birthdayLabel,
    birthday,
    doYouHavePetsLabel,
    checkAllergies,
    checkAnimalsLooking,
    btnAdopt,
  );

  doYouHavePetsLabel.append(yesPetsLabel, noPetsLabel);

  yesPetsLabel.append(yesPets, 'Yes');
  noPetsLabel.append(noPets, 'No');

  checkAllergies.append(
    brAllergies,
    petAllergyLabel,
    pollenAllergyLabel,
    dustAllergyLabel,
    moldAllergyLabel,
    insectAllergyLabel,
    foodAllergyLabel,
  );

  petAllergyLabel.append(petAllergyInput, 'Pet danger allergy');
  pollenAllergyLabel.append(pollenAllergyInput, 'Pollen allergy');
  dustAllergyLabel.append(dustAllergyInput, 'Dust allergy');
  moldAllergyLabel.append(moldAllergyInput, 'Mold allergy');
  insectAllergyLabel.append(insectAllergyInput, 'Insect allergy');
  foodAllergyLabel.append(foodAllergyInput, 'Food allergy');

  checkAnimalsLooking.append(
    brPets,
    dogLabel,
    catLabel,
    hamsterLabel,
    rabbitLabel,
    parrotLabel,
    othersLabel,
  );

  dogLabel.append(dogInput, 'Dog');
  catLabel.append(catInput, 'Cat');
  hamsterLabel.append(hamsterInput, 'Hamster');
  rabbitLabel.append(rabbitInput, 'Rabbit');
  parrotLabel.append(parrotInput, 'Parrot');
  othersLabel.append(othersLabel, 'Others');
};
