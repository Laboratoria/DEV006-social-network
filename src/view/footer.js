export const footer = () => {
  const footerElement = document.createElement('footer');

  const pFooter = document.createElement('p');
  pFooter.classList.add('footerParagraph');

  // -------------------------------- Enlaces de Github de las tres participantes
  const aGabriela = document.createElement('a');
  aGabriela.textContent = 'Gabriela';
  aGabriela.setAttribute('href', 'https://github.com/gabiestefany24');
  aGabriela.classList.add('gitHubLinks');

  const spanGabriela = document.createElement('span');
  spanGabriela.append(aGabriela);

  const aRebeca = document.createElement('a');
  aRebeca.textContent = 'Rebeca';
  aRebeca.setAttribute('href', 'https://github.com/jhosefin');
  aRebeca.classList.add('gitHubLinks');

  const spanRebeca = document.createElement('span');
  spanRebeca.append(aRebeca);

  const aMarissa = document.createElement('a');
  aMarissa.textContent = 'Marissa';
  aMarissa.setAttribute('href', 'https://github.com/thatmare');
  aMarissa.classList.add('gitHubLinks');

  const spanMarissa = document.createElement('span');
  spanMarissa.append(aMarissa);

  pFooter.append('Created by ', spanGabriela, ', ', spanRebeca, ' and ', spanMarissa, '.');
  footerElement.append(pFooter);

  return footerElement;
};
