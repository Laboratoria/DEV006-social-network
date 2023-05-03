//import { myFunction } from './lib/index.js';

const registerButton = document.getElementById('registerButton');
const registerSection = document.getElementById('registerSection');
const welcomeSection = document.getElementById('welcomeSection');

registerButton.addEventListener('click', () => {
  registerSection.style.display = 'flex';
  welcomeSection.style.display = 'none';
})