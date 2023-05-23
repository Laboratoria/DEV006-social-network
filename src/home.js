function home(navigateTo) {
    const logoGrande = document.createElement('img');
    const divHome = document.createElement('div');
    const loginBtnHome = document.createElement('button');
    const registerBtnHome = document.createElement('button');
    const imgFamiliaHome = document.createElement('img');
    const footer = document.createElement('footer');

    logoGrande.src='./img/logoLKP_final.png';
    document.getElementById('root').appendChild(logoGrande);

    
    loginBtnHome.textContent = 'Login';
    registerBtnHome.textContent = 'Register';
    
    divHome.appendChild(loginBtnHome, registerBtnHome);
    return divHome;

    
}

export default home;