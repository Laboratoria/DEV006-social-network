import { createUser, securePassword } from "../lib/index.js";

export const register = () => {

const body= document.getElementById("root")
body.innerHTML= "";

const bodyimg = document.createElement("div");
bodyimg.setAttribute("class", "bodyimg");

const registerdiv = document.createElement('div');
registerdiv.setAttribute('id','register')
registerdiv.setAttribute('class','register')

const header = document.createElement("header");

const logoImg = document.createElement("img");
logoImg.setAttribute("src", "img/logo.png");

const nav = document.createElement('nav');

const ul = document.createElement('ul');

const btnHome = document.createElement('li');
btnHome.setAttribute('id', 'Home');

const homeLink = document.createElement('a');
homeLink.setAttribute('href','/');
homeLink.textContent = 'Home';

const h1 = document.createElement('h1');
h1.textContent = 'Be My Friend';

const form = document.createElement('form');
form.setAttribute('action','#')
form.setAttribute('method','POST')

const h2 = document.createElement('h2');
h2.textContent = 'Register';

const userNameLabel = document.createElement('label');
userNameLabel.setAttribute('for', 'userName');
userNameLabel.textContent = 'Name'

const userName = document.createElement('input');
userName.setAttribute('type', 'text');
userName.setAttribute('placeholder', 'Name');
userName.setAttribute('id', 'userName');

const lastNameLabel = document.createElement('label');
lastNameLabel.setAttribute('for', 'lastName');
lastNameLabel.textContent = 'Last Name'

const lastName = document.createElement('input');
lastName.setAttribute('type', 'text');
lastName.setAttribute('placeholder', 'Last Name');
lastName.setAttribute('id', 'lastName');

const birthdayLabel = document.createElement('label');
birthdayLabel.setAttribute('for', 'birthday');
birthdayLabel.textContent = 'Birthday';

const birthday = document.createElement('input');
birthday.setAttribute('type', 'date');
birthday.setAttribute('id', 'birthday')

const doYouHavePetsLabel = document.createElement('label');
doYouHavePetsLabel.setAttribute('name', 'petAnswers');
doYouHavePetsLabel.textContent = 'Do you have any pets?';

const yesPetsLabel = document.createElement('label');
yesPetsLabel.setAttribute('for', 'yesPets');
yesPetsLabel.textContent = 'Yes';

const yesPets = document.createElement('input');
yesPets.setAttribute('type', 'radio');
yesPets.setAttribute('name', 'petAnswers');
yesPets.setAttribute('id', 'yesPets');
yesPets.setAttribute('value', 'Yes');

const noPetsLabel = document.createElement('label');
noPetsLabel.setAttribute('for', 'noPets');
noPetsLabel.textContent = 'No';

const noPets = document.createElement('input');
noPets.setAttribute('type', 'radio');
noPets.setAttribute('name', 'petAnswers');
noPets.setAttribute('id', 'noPets');
noPets.setAttribute('value', 'No');

const checkAllergies = document.createElement('label');
checkAllergies.setAttribute('for', 'checkAllergies');
checkAllergies.textContent = 'Check allergies if you have any:';

const petAllergyLabel = document.createElement('label');
petAllergyLabel.setAttribute('for', 'petAllergy');
petAllergyLabel.textContent = 'Pet dander allergy';

const petAllergyInput = document.createElement('input');
petAllergyInput.setAttribute('type', 'checkbox');
petAllergyInput.setAttribute('id', 'petAllergy');

const pollenAllergyLabel = document.createElement('label');
pollenAllergyLabel.setAttribute('for', 'pollenAllergy');
pollenAllergyLabel.textContent = 'Pollen allergy';

const pollenAllergyInput = document.createElement('input');
pollenAllergyInput.setAttribute('type', 'checkbox');
pollenAllergyInput.setAttribute('id', 'pollenAllergy');

const dustAllergyLabel = document.createElement('label');
dustAllergyLabel.setAttribute('for', 'dustAllergy');
dustAllergyLabel.textContent = 'Dust mite allergy';

const dustAllergyInput = document.createElement('input');
dustAllergyInput.setAttribute('type', 'checkbox');
dustAllergyInput.setAttribute('id', 'dustAllergy');

const moldAllergyLabel = document.createElement('label');
moldAllergyLabel.setAttribute('for', 'moldAllergy');
moldAllergyLabel.textContent = 'Mold allergy';

const moldAllergyInput = document.createElement('input');
moldAllergyInput.setAttribute('type', 'checkbox');
moldAllergyInput.setAttribute('id', 'moldAllergy');

const insectAllergyLabel = document.createElement('label');
insectAllergyLabel.setAttribute('for', 'insectAllergy');
insectAllergyLabel.textContent = 'Insect allergy';

const insectAllergyInput = document.createElement('input');
insectAllergyInput.setAttribute('type', 'checkbox');
insectAllergyInput.setAttribute('id', 'insectAllergy');

const foodAllergyLabel = document.createElement('label');
foodAllergyLabel.setAttribute('for', 'foodAllergy');
foodAllergyLabel.textContent = 'Food allergy';

const foodAllergyInput = document.createElement('input');
foodAllergyInput.setAttribute('type', 'checkbox');
foodAllergyInput.setAttribute('id', 'foodAllergy');

// const group1 = document.createElement('div');
// group1.setAttribute('class','group')

const txtEmail = document.createElement('input');
txtEmail.setAttribute('id', 'txtEmail')
txtEmail.setAttribute('type', 'email')
txtEmail.setAttribute('placeholder', 'Email')

const spanErrorEmail = document.createElement('span')
spanErrorEmail.setAttribute('id','spanErrorEmail')

// const group2 = document.createElement('div')
// group2.setAttribute('class','group')

const txtPassword = document.createElement('input');
txtPassword.setAttribute('id', 'txtPassword')
txtPassword.setAttribute('type', 'password')
txtPassword.setAttribute('placeholder', 'Password')
txtPassword.addEventListener('keyup', securePassword);

const txtPasswordAgain = document.createElement('input');
txtPasswordAgain.setAttribute('id', 'txtPasswordAgain')
txtPasswordAgain.setAttribute('type', 'password')
txtPasswordAgain.setAttribute('placeholder', 'Password (again)')
// txtPasswordAgain.addEventListener('keyup', securePassword); Pendiente función para coincidir con contraseña

const spanErrorPassword = document.createElement('span')
spanErrorPassword.setAttribute('id','spanErrorPassword')

const btnRegister = document.createElement('button');
btnRegister.setAttribute('id', 'btnRegister');
btnRegister.setAttribute('type', 'button');
btnRegister.setAttribute('class', 'button');
btnRegister.addEventListener('click', createUser);
btnRegister.textContent ='Sign Up';


body.append(bodyimg);
bodyimg.append(registerdiv);
registerdiv.append(header,h1,form)
header.append(logoImg,nav)
nav.append(ul)
ul.append(btnHome)
btnHome.append(homeLink)
form.append(h2, userNameLabel, userName, lastNameLabel, lastName, birthdayLabel, birthday, doYouHavePetsLabel, yesPetsLabel, yesPets, noPetsLabel, noPets, checkAllergies, txtEmail, spanErrorEmail, txtPassword, spanErrorPassword, txtPasswordAgain, btnRegister)

checkAllergies.append(petAllergyLabel, petAllergyInput, pollenAllergyLabel, pollenAllergyInput, dustAllergyLabel, dustAllergyInput, moldAllergyLabel, moldAllergyInput, insectAllergyLabel, insectAllergyInput, foodAllergyLabel, foodAllergyInput);
};
    