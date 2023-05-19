function home(navigateTo) {
  const section = document.createElement('section');
  const title = document.createElement('h2');
  const button = document.createElement('button');

  button.textContent = 'Publicar';
  button.addEventListener('click', () => {
    navigateTo('/home');
  });

  title.textContent = 'Welcome to my project';

  section.append(title, button);
  return section;
}

export default home;
