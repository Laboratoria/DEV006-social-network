import error from '../../src/views/error.js';

describe('error()', () => {
  it('Debe ser una funcion', () => {
    expect(typeof error).toBe('function');
  });
  it('Debe crear un elemento h2 con un mensaje de error', () => {
    const title = error();
    expect(title.textContent).toBe('Error 404 page no found, please go home');
  });
});
