const feed = (navigateTo) => {
  const feedSection = document.createElement('section');
  feedSection.classList.add('feedSection');

  const profileNav = document.createElement('nav');
  profileNav.classList.add('profileNav');

  const logoArticle = document.createElement('article');
  logoArticle.classList.add('articleLogoSignUp');

  const logoImg = document.createElement('img');
  logoImg.setAttribute('src', './pages/images/LOGO.png');
  logoImg.setAttribute('alt', 'Logo: dos boletos para el cine. Uno morado y uno amarillo. Ambos dicen "Cinergia"');
  logoImg.classList.add('logoSignUp');

  const username = document.createElement('p');
  username.classList.add('userSpan');

  const postDiv = document.createElement('div');
  postDiv.classList.add('postDiv');

  const postInput = document.createElement('input');
  postInput.classList.add('postInput');
  postInput.setAttribute('type', 'text');

  postInput.setAttribute('placeholder', '¿Qué quieres compartir hoy?');

  const postBtn = document.createElement('button');
  postBtn.classList.add('postBtn');
  postBtn.setAttribute('type', 'button');

  const postsSection = document.createElement('section');
  postsSection.classList.add('postsSection');

  // postBtn.addEventListener ('click', () => {
  // console.log ('TABIEN')
  // })

  feedSection.appendChild(profileNav);
  feedSection.appendChild(postDiv);
  feedSection.appendChild(postsSection);
  profileNav.appendChild(logoArticle);
  profileNav.appendChild(username);
  logoArticle.appendChild(logoImg);
  postDiv.appendChild(postInput);
  postDiv.appendChild(postBtn);

  return feedSection;
};
export default feed;
