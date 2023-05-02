import { login } from './login';
import { footer } from './footer';

export const welcome = (navigateTo) => {
  const bodyimg = document.createElement('div');
  bodyimg.setAttribute('class', 'bodyimg');

  const header = document.createElement('header');

  const logoImg = document.createElement('img');
  logoImg.setAttribute('src', 'img/logo.png');
  logoImg.setAttribute('alt', 'This is the logo. It is a dog paw inside a heart.');

  const nav = document.createElement('nav');

  const ul = document.createElement('ul');

  const btnLoginHome = document.createElement('li');
  btnLoginHome.setAttribute('id', 'btnLoginHome');

  const loginLink = document.createElement('a');
  loginLink.textContent = 'Log In';
  loginLink.addEventListener('click', () => {
    navigateTo('/login');
  });

  const signUpLink = document.createElement('li');

  const signUp = document.createElement('a');
  signUp.textContent = 'Sign Up';
  signUp.addEventListener('click', () => {
    navigateTo('/register');
  });

  const main = document.createElement('main');
  main.setAttribute('id', 'main');

  const h1 = document.createElement('h1');
  h1.textContent = 'Be My Friend';

  const welcomeMessage = document.createElement('p');
  welcomeMessage.setAttribute('class', 'welcomemessage');
  welcomeMessage.innerHTML = 'Welcome <br>Your next friend is waiting for you. Check animals available to adopt!';

  const sectionCards = document.createElement('section');
  sectionCards.setAttribute('class', 'contenedorcards');

  const cardPet1 = document.createElement('div');
  cardPet1.setAttribute('class', 'cardpet');

  const photoPets1 = document.createElement('div');
  photoPets1.setAttribute('class', 'photopets');

  const img1 = document.createElement('img');
  img1.setAttribute('src', 'img/TOM.jpg');
  img1.setAttribute('alt', 'A happy dog jumping in the garden');

  const interactionPets1 = document.createElement('div');
  interactionPets1.setAttribute('class', 'interactionpets');

  const pPet1 = document.createElement('p');
  pPet1.classList.add('petName');
  pPet1.textContent = 'TOM';

  const inputLike1 = document.createElement('input');
  inputLike1.setAttribute('type', 'image');
  inputLike1.setAttribute('src', 'img/megusta.png');
  inputLike1.setAttribute('alt', 'Heart icon to like the pet');
  inputLike1.addEventListener('click', login);
  inputLike1.addEventListener('mouseover', function () {
    this.src = 'img/megustarojo.png';
  });
  inputLike1.addEventListener('mouseout', function () {
    this.src = 'img/megusta.png';
  });

  const inputMatch1 = document.createElement('input');
  inputMatch1.setAttribute('type', 'image');
  inputMatch1.setAttribute('src', 'img/matchvacio.png');
  inputMatch1.setAttribute('alt', 'This footprint icon is to match with a pet, it means you want to adopt it.');
  inputMatch1.addEventListener('click', login);
  inputMatch1.addEventListener('mouseover', function () {
    this.src = 'img/match.png';
  });
  inputMatch1.addEventListener('mouseout', function () {
    this.src = 'img/matchvacio.png';
  });

  const cardPet2 = document.createElement('div');
  cardPet2.setAttribute('class', 'cardpet');

  const photoPets2 = document.createElement('div');
  photoPets2.setAttribute('class', 'photopets');

  const img2 = document.createElement('img');
  img2.setAttribute('src', 'img/Bob.png');
  img2.setAttribute('alt', 'A kitten sitting on the couch');

  const interactionPets2 = document.createElement('div');
  interactionPets2.setAttribute('class', 'interactionpets');

  const pPet2 = document.createElement('p');
  pPet2.classList.add('petName');
  pPet2.textContent = 'BOB';

  const inputLike2 = document.createElement('input');
  inputLike2.setAttribute('type', 'image');
  inputLike2.setAttribute('src', 'img/megusta.png');
  inputLike2.setAttribute('alt', 'Heart icon to like the pet');
  inputLike2.addEventListener('click', login);
  inputLike2.addEventListener('mouseover', function () {
    this.src = 'img/megustarojo.png';
  });
  inputLike2.addEventListener('mouseout', function () {
    this.src = 'img/megusta.png';
  });

  const inputMatch2 = document.createElement('input');
  inputMatch2.setAttribute('type', 'image');
  inputMatch2.setAttribute('src', 'img/matchvacio.png');
  inputMatch2.setAttribute('alt', 'This footprint icon is to match with a pet, it means you want to adopt it.');
  inputMatch2.addEventListener('click', login);
  inputMatch2.addEventListener('mouseover', function () {
    this.src = 'img/match.png';
  });
  inputMatch2.addEventListener('mouseout', function () {
    this.src = 'img/matchvacio.png';
  });

  // Tarjeta de mascota 3
  const cardPet3 = document.createElement('div');
  cardPet3.setAttribute('class', 'cardpet');

  const photoPets3 = document.createElement('div');
  photoPets3.setAttribute('class', 'photopets');

  const img3 = document.createElement('img');
  img3.setAttribute('src', 'img/adoptparrot.jpg');
  img3.setAttribute('alt', 'A happy dog jumping in the garden');

  const interactionPets3 = document.createElement('div');
  interactionPets3.setAttribute('class', 'interactionpets');

  const pPet3 = document.createElement('p');
  pPet3.classList.add('petName');
  pPet3.textContent = 'JUAN';

  const inputLike3 = document.createElement('input');
  inputLike3.setAttribute('type', 'image');
  inputLike3.setAttribute('src', 'img/megusta.png');
  inputLike3.setAttribute('alt', 'Heart icon to like the pet');
  inputLike3.addEventListener('click', login);
  inputLike3.addEventListener('mouseover', function () {
    this.src = 'img/megustarojo.png';
  });
  inputLike3.addEventListener('mouseout', function () {
    this.src = 'img/megusta.png';
  });

  const inputMatch3 = document.createElement('input');
  inputMatch3.setAttribute('type', 'image');
  inputMatch3.setAttribute('src', 'img/matchvacio.png');
  inputMatch3.setAttribute('alt', 'This footprint icon is to match with a pet, it means you want to adopt it.');
  inputMatch3.addEventListener('click', login);
  inputMatch3.addEventListener('mouseover', function () {
    this.src = 'img/match.png';
  });
  inputMatch3.addEventListener('mouseout', function () {
    this.src = 'img/matchvacio.png';
  });

  // Tarjeta de mascota 4
  const cardPet4 = document.createElement('div');
  cardPet4.setAttribute('class', 'cardpet');

  const photoPets4 = document.createElement('div');
  photoPets4.setAttribute('class', 'photopets');

  const img4 = document.createElement('img');
  img4.setAttribute('src', 'img/adoptrabbit.jpg');
  img4.setAttribute('alt', 'A happy dog jumping in the garden');

  const interactionPets4 = document.createElement('div');
  interactionPets4.setAttribute('class', 'interactionpets');

  const pPet4 = document.createElement('p');
  pPet4.classList.add('petName');
  pPet4.textContent = 'LAURA';

  const inputLike4 = document.createElement('input');
  inputLike4.setAttribute('type', 'image');
  inputLike4.setAttribute('src', 'img/megusta.png');
  inputLike4.setAttribute('alt', 'Heart icon to like the pet');
  inputLike4.addEventListener('click', login);
  inputLike4.addEventListener('mouseover', function () {
    this.src = 'img/megustarojo.png';
  });
  inputLike4.addEventListener('mouseout', function () {
    this.src = 'img/megusta.png';
  });

  const inputMatch4 = document.createElement('input');
  inputMatch4.setAttribute('type', 'image');
  inputMatch4.setAttribute('src', 'img/matchvacio.png');
  inputMatch4.setAttribute('alt', 'This footprint icon is to match with a pet, it means you want to adopt it.');
  inputMatch4.addEventListener('click', login);
  inputMatch4.addEventListener('mouseover', function () {
    this.src = 'img/match.png';
  });
  inputMatch4.addEventListener('mouseout', function () {
    this.src = 'img/matchvacio.png';
  });

  const sectionTestimonies = document.createElement('section');
  sectionTestimonies.setAttribute('class', 'contenedortestimonios');

  const h2Testimonies = document.createElement('h2');
  h2Testimonies.setAttribute('class', 'testimonies');
  h2Testimonies.textContent = 'Testimonies';

  const messageTestimony1 = document.createElement('div');
  messageTestimony1.setAttribute('class', 'messagetesti');

  const pTestimony1 = document.createElement('p');
  pTestimony1.innerHTML = '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...”<br>-Name, City';

  const messageTestimony2 = document.createElement('div');
  messageTestimony2.setAttribute('class', 'messagetesti');

  const pTestimony2 = document.createElement('p');
  pTestimony2.innerHTML = '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...”<br>-Name, City';

  bodyimg.append(header, main, footer());
  header.append(logoImg, nav);
  nav.append(ul);
  ul.append(btnLoginHome, signUpLink);
  btnLoginHome.append(loginLink);
  signUpLink.append(signUp);
  main.append(h1, welcomeMessage, sectionCards, sectionTestimonies);
  sectionCards.append(cardPet1, cardPet2, cardPet3, cardPet4);

  cardPet1.append(photoPets1, interactionPets1);
  photoPets1.append(img1);
  interactionPets1.append(pPet1, inputLike1, inputMatch1);

  cardPet2.append(photoPets2, interactionPets2);
  photoPets2.append(img2);
  interactionPets2.append(pPet2, inputLike2, inputMatch2);

  cardPet3.append(photoPets3, interactionPets3);
  photoPets3.append(img3);
  interactionPets3.append(pPet3, inputLike3, inputMatch3);

  cardPet4.append(photoPets4, interactionPets4);
  photoPets4.append(img4);
  interactionPets4.append(pPet4, inputLike4, inputMatch4);

  sectionTestimonies.append(
    h2Testimonies,
    messageTestimony1,
    messageTestimony2,
  );
  messageTestimony1.append(pTestimony1);
  messageTestimony2.append(pTestimony2);

  return bodyimg;
};
