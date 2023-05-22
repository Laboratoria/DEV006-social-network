function home(navigateTo) {
  const section = document.createElement('section');
  const title = document.createElement('h2');
  const button = document.createElement('button');
  const buttonOut = document.createElement('button');

  button.textContent = 'Publicar';
  buttonOut.textContent = 'Sign Out';
  button.addEventListener('click', () => {
    navigateTo('/home');
  });

  title.textContent = 'Welcome to my project';

  section.append(title, button, buttonOut);
  return section;
}

export default home;
