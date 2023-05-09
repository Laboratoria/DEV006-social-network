function board(navigateTo) {
  const section = document.createElement('section');

  const div = document.createElement ('div');
  div.className = 'menu-app';

  const boardMenu = document.createElement('a');
  boardMenu.href = 'Board';
  boardMenu.textContent = 'Board';

  const profileMenu = document.createElement('a');
  profileMenu.href = 'Profile';
  profileMenu.textContent = 'Profile';

  const imageProfile = document.createElement ('img');
  imageProfile.src = ('./images/vector-profile-photo.svg');
  imageProfile.classList.add('imageProfile');

  div.append(boardMenu, profileMenu);
  section.append(div, imageProfile);
  return section;
}

export default board;
