/**
 * @jest-enviroment jsdom
**/
import { newpost } from '../src/view/newpost';
 
describe('newpost', () => {
  test('should call addPost with correct arguments when form is submitted with non-empty petName and petDescription', () => {
    if (typeof document !== 'undefined') {
    // código que usa el objeto document

      // Simulamos la función addPost
      const addPostMock = jest.fn();
      // Creamos el elemento div que devuelve la función newpost
      const newPostDiv = newpost(() => {});
      // Obtenemos el formulario formPost del elemento div
      const formPost = newPostDiv.querySelector('#formpost');
      // Creamos los elementos petName y petDescription y los agregamos al formulario

      const petName = document.createElement('input');
      petName.setAttribute('type', 'text');
      petName.setAttribute('name', 'petName');
      petName.value = 'Fido';
      formPost.appendChild(petName);

      const petDescription = document.createElement('textarea');
      petDescription.setAttribute('name', 'petDescription');
      petDescription.value = 'A very good dog';
      formPost.appendChild(petDescription);

      // Disparamos el evento submit del formulario
      formPost.dispatchEvent(new Event('submit'));

      // Verificamos que la función addPost haya sido llamada con los argumentos correctos
      expect(addPostMock).toHaveBeenCalledWith('Fido', 'A very good dog', formPost);
    }
  });
  test('should call navigateTo with correct argument when form is submitted with non-empty petName and petDescription', () => {
    if (typeof document !== 'undefined') {
      // Simulamos la función navigateTo
      const navigateToMock = jest.fn();
      // Creamos el elemento div que devuelve la función newpost
      const newPostDiv = newpost(navigateToMock);
      // Obtenemos el formulario formPost del elemento div
      const formPost = newPostDiv.querySelector('#formpost');
      // Creamos los elementos petName y petDescription y los agregamos al formulario
      const petName = document.createElement('input');
      petName.setAttribute('type', 'text');
      petName.setAttribute('name', 'petName');
      petName.value = 'Fido';
      formPost.appendChild(petName);

      const petDescription = document.createElement('textarea');
      petDescription.setAttribute('name', 'petDescription');
      petDescription.value = 'A very good dog';
      formPost.appendChild(petDescription);

      // Disparamos el evento submit del formulario
      formPost.dispatchEvent(new Event('submit'));

      // Verificamos que la función navigateTo haya sido llamada con el argumento correcto
      expect(navigateToMock).toHaveBeenCalledWith('/wall');
    }
  });
});
