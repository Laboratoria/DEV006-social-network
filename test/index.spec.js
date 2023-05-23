import { exit, auth } from '../src/lib/index.js';
// Mock de la función signOut de Firebase
jest.mock('firebase/auth', () => ({
  auth: jest.fn(() => ({
    signOut: jest.fn(() => Promise.resolve()),
  })),
}));

describe('exit', () => {
  it('should call signOut and navigate to welcome', async () => {
    const navigateTo = jest.fn();
    const consoleLogSpy = jest.spyOn(console, 'log');

    await exit(navigateTo);

    expect(auth().signOut).toHaveBeenCalled();
    expect(consoleLogSpy).toHaveBeenCalledWith('saliendo');
    expect(navigateTo).toHaveBeenCalledWith('/');
  });

  it('should handle error and log it', async () => {
    const navigateTo = jest.fn();
    const consoleLogSpy = jest.spyOn(console, 'log');
    const error = new Error('Sign-out failed');
    firebase.auth().signOut.mockRejectedValueOnce(error);

    await exit(navigateTo);

    expect(auth().signOut).toHaveBeenCalled();
    expect(consoleLogSpy).toHaveBeenCalledWith(error);
    expect(navigateTo).not.toHaveBeenCalled();
  });
});
