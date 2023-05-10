/* *
 * @jest-environment jsdom
 */
/* import { newpost } from '../src/view/newpost'; */
/* import { MockFirebaseSdk } from 'firebase-mock'; */

/* import { addPost } from '../src/lib/index.js'; */

/* let mockFirebase;

beforeEach(() => {
  mockFirebase = new MockFirebaseSdk(
    // Simular el objeto auth
    () => ({
      currentUser: {
        displayName: 'John Doe', // Simular el displayName del usuario actual
      },
      // Simular la instancia de Firestore
      firestore: () => ({
        collection: () => ({
          add: () => Promise.resolve(),
        }),
      }),
    }),
  );
  // Reemplazar el objeto de Firebase con el objeto simulado en el archivo de prueba
  jest.mock('firebase/app', () => mockFirebase);
});

// Realizar el test unitario utilizando el objeto simulado de Firebase
describe('ejemplo de test unitario con mock de Firebase', () => {
  test('verificar el valor del nombre de usuario', () => {
    // Llamar a la función que utiliza el objeto auth
    addPost();

    // Verificar que el valor del nombre de usuario es correcto
    const userNameElement = document.getElementById('userName');
    expect(userNameElement.textContent).toBe('John Doe');
  });
}); */

/* describe('se crean estos elementos en el componente de newpost', () => {
  // if (typeof document !== 'undefined') {
  // Generar un test para comprobar que los elementos del formulario se crean correctamente
  let newpostDiv;

  beforeEach(() => {
    newpostDiv = newpost();
  });

  afterEach(jest.clearAllMocks);

  it('should render newpost view', () => {
    // const newpostDiv = document.createElement('div');
    // newpostDiv.append(newpost());
    // El matcher .toBeTruthy() comprueba si los elementos existen
    expect(newpostDiv).toBeTruthy();
    expect(newpostDiv.querySelector('header')).toBeTruthy();
    expect(newpostDiv.querySelector('nav')).toBeTruthy();
    expect(newpostDiv.querySelector('h1')).toBeTruthy();
    expect(newpostDiv.querySelector('section')).toBeTruthy();
    expect(newpostDiv.querySelector('nav')).toBeTruthy();
    expect(newpostDiv.querySelector('hr')).toBeTruthy();
    expect(newpostDiv.querySelector('img')).toBeTruthy();
    expect(newpostDiv.querySelector('#pCreatePost')).toBeTruthy();
    expect(newpostDiv.querySelector('#formpost')).toBeTruthy();
    expect(newpostDiv.querySelector('.userContaier')).toBeTruthy();
    expect(newpostDiv.querySelector('.profilePic')).toBeTruthy();
    expect(newpostDiv.querySelector('#userName')).toBeTruthy();
    expect(newpostDiv.querySelector('input')).toBeTruthy();
    expect(newpostDiv.querySelector('textarea')).toBeTruthy();
    expect(newpostDiv.querySelector('button')).toBeTruthy();
  });
}); */

/* describe('newpost', () => {
  test('should call addPost with correct arguments when form is submitted with non-empty
   petName and petDescription', () => {
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
  });

  test('should call navigateTo with correct argument when form is submitted with
  non-empty petName and petDescription', () => {
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
  });
}); */
