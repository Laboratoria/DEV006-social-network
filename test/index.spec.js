import { securePassword } from '../src/lib/index.js';

describe('securePassword', () => {
  it('debería ser una función', () => {
    expect(typeof securePassword).toBe('function');
  });
});
