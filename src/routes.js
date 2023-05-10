const root = document.getElementById('root');

export const routes = {
  '/': home,
  '/createAccount': createAccount,
};

export const navigateTo = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  root.innerHTML = '';
  root.appendChild(routes[pathname]());
};
