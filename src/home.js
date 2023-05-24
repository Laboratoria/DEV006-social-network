
export function home(navigateTo) {
    const logoGrande = document.createElement('img');
    const divHome = document.createElement('div');
    const loginBtnHome = document.createElement('button');
    const registerBtnHome = document.createElement('button');
    const imgFamiliaHome = document.createElement('img');
    const footer = document.createElement('footer');

    logoGrande.src='./img/logoLKP_final.png';
   

    
    loginBtnHome.textContent = 'Login';
    registerBtnHome.textContent = 'Register';
    
    imgFamiliaHome.src= './img/comunidad.png';
    footer.textContent='Copyright © 2023 Isabel Lira, Kat Bravo & Alejandra Martínez';
    divHome.append(loginBtnHome, registerBtnHome, imgFamiliaHome,footer);
    document.getElementById('root').append(logoGrande,divHome);
    
    return divHome;

    
    
}

