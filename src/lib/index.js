// aqui exportaras las funciones que necesites
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebaseConf';

const app = initializeApp(firebase);

export const myFunction = () => {
  // aqui tu codigo
  console.log('Hola mundo!');
};
