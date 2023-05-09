function profile(navigateTo) {
  const section = document.createElement('section');
  const container = document.createElement('div');
  container.className = 'container-app';
  const menu = document.createElement('div');
  menu.className = 'menu-profile';
  const btnBoard = document.createElement('button');
  btnBoard.className = 'btn-board';
  const btnProfile = document.createElement('button');
  btnProfile.className = 'btn-profile';
  const userInfo = document.createElement('div');
  userInfo.className = 'user-info';
  const userImg = document.createElement('img');
  userImg.className = 'user-img';
  const userName = document.createElement('h1');
  userName.className = 'user-names';
  const form = document.createElement('form');
  form.className = 'form-profile';
  const post = document.createElement('textarea');
  post.className = 'post';
  const btnSend = document.createElement('button');
  btnSend.className = 'send-post';

  const buttonReturn = document.createElement('a');
  buttonReturn.textContent = 'Back';
  buttonReturn.href = '//forgotPassword';
  buttonReturn.className = 'return-link';
  buttonReturn.addEventListener('click', () => {
    navigateTo('/board');
  });

  btnBoard.textContent = 'Board';
  btnProfile.textContent = 'Profile';
  userImg.src = './images/profile-img.png';
  userImg.alt = 'Profile photo';

  userName.textContent = 'User name';

  post.placeholder = 'Post here...';
  btnSend.textContent = 'Send';

  menu.append(btnBoard, btnProfile);
  userInfo.append(userImg, userName);
  form.append(post, btnSend);
  container.append(menu, userInfo, form);
  section.append(buttonReturn, container);

  return section;
}

export default profile;
