function buildsite(navigateTo) {
  const section = document.createElement('section');
  const imagBuild = document.createElement('img');
  const textBuild = document.createElement('h4');
  const back = document.createElement('img');

  imagBuild.setAttribute('src', 'images/inConstruction.png');
  textBuild.textContent = ('Página en construcción.');
  back.setAttribute('src', 'images/arrow.png');

  imagBuild.classList.add('imagBuild');
  textBuild.classList.add('textBuild');
  section.classList.add('sectionBuild');
  back.classList.add('back');

  back.addEventListener('click', () => {
    navigateTo('/wall');
  });

  section.append(back, imagBuild, textBuild);
  return section;
}
export default buildsite;
