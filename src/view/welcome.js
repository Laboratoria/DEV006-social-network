import { login } from "./login";

export let welcome = () => {
    const body= document.getElementById("root")
    body.innerHTML= "";
    
    const bodyimg = document.createElement("div");
    bodyimg.setAttribute("class", "bodyimg");

    const header = document.createElement("header");

    const logoImg = document.createElement("img");
    logoImg.setAttribute("src", "img/logo.png");

    const nav = document.createElement('nav');

    const ul = document.createElement('ul');

    const btnLoginHome = document.createElement('li');
    btnLoginHome.setAttribute('id', 'btnLoginHome');

    const loginLink = document.createElement('a');
    loginLink.setAttribute('href','/login');
    loginLink.textContent = 'Log In';

    const signUpLink = document.createElement('li');

    const signUp = document.createElement('a');
    signUp.setAttribute('href','/register');;
    signUp.textContent = 'Sign Up';

    const main = document.createElement('main');
    main.setAttribute('id', 'main');

    const h1 = document.createElement('h1');
    h1.textContent = 'Be My Friend';

    const welcomeMessage = document.createElement('p');
    welcomeMessage.setAttribute('class','welcomemessage');
    welcomeMessage.innerHTML = 'Welcome <br>Your next friend is waiting for you. Check animals available to adopt!';


    const sectionCards = document.createElement('section');
    sectionCards.setAttribute('class','contenedorcards');

    const cardPet1 = document.createElement('div');
    cardPet1.setAttribute('class','cardpet');

    const photoPets1 = document.createElement('div');
    photoPets1.setAttribute('class','photopets');

    const img1 = document.createElement('img');
    img1.setAttribute('src','img/TOM.jpg');

    const interactionPets1 = document.createElement('div');
    interactionPets1.setAttribute('class','interactionpets');

    const h3Pet1 = document.createElement('h3');
    h3Pet1.textContent = 'TOM';

    const inputLike1 = document.createElement('input');
    inputLike1.setAttribute('type','image');
    inputLike1.setAttribute('src','img/megusta.png');
    inputLike1.setAttribute('alt','logomegusta');
    inputLike1.addEventListener('click',login)
    inputLike1.addEventListener('mouseover', function() {
        this.src = "img/megustarojo.png";
    });

    const inputMatch1 = document.createElement('input');
    inputMatch1.setAttribute('type','image');
    inputMatch1.setAttribute('src','img/matchvacio.png');
    inputMatch1.setAttribute('alt','logomatch');
    inputMatch1.addEventListener('click',login)
    inputMatch1.addEventListener('mouseover', function() {
        this.src = "img/match.png";
    });

    const cardPet2 = document.createElement('div');
    cardPet2.setAttribute('class','cardpet');

    const photoPets2 = document.createElement('div');
    photoPets2.setAttribute('class','photopets');

    const img2 = document.createElement('img');
    img2.setAttribute('src','img/Bob.png');

    const interactionPets2 = document.createElement('div');
    interactionPets2.setAttribute('class','interactionpets');

    const h3Pet2 = document.createElement('h3');
    h3Pet2.textContent = 'BOB';

    const inputLike2 = document.createElement('input');
    inputLike2.setAttribute('type','image');
    inputLike2.setAttribute('src','img/megusta.png');
    inputLike2.setAttribute('alt','logomegusta');
    inputLike2.addEventListener('click',login)
    inputLike2.addEventListener('mouseover', function() {
        this.src = "img/megustarojo.png";
    });

    const inputMatch2 = document.createElement('input');
    inputMatch2.setAttribute('type','image');
    inputMatch2.setAttribute('src','img/matchvacio.png');
    inputMatch2.setAttribute('alt','logomatch');
    inputMatch2.addEventListener('click',login)
    inputMatch2.addEventListener('mouseover', function() {
        this.src = "img/match.png";
    });

    const sectionTestimonies = document.createElement('section');
    sectionTestimonies.setAttribute('class','contenedortestimonios');

    const h2Testimonies = document.createElement('h2');
    h2Testimonies.setAttribute('class','testimonies');
    h2Testimonies.textContent = 'Testimonies';

    const messageTestimony1 = document.createElement('div');
    messageTestimony1.setAttribute('class','menssagetesti');

    const pTestimony1 = document.createElement('p');
    pTestimony1.innerHTML = '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...”<br>-Name, City';

    const messageTestimony2 = document.createElement('div');
    messageTestimony2.setAttribute('class','menssagetesti');

    const pTestimony2 = document.createElement('p');
    pTestimony2.innerHTML = '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...”<br>-Name, City';

    

    body.append(bodyimg)
    bodyimg.append(header,main);
    header.append(logoImg,nav);
    nav.append(ul);
    ul.append(btnLoginHome, signUpLink);
    btnLoginHome.append(loginLink);
    signUpLink.append(signUp);
    main.append(h1,welcomeMessage,sectionCards,sectionTestimonies);
    sectionCards.append(cardPet1,cardPet2);
    cardPet1.append(photoPets1,interactionPets1);
    photoPets1.append(img1);
    interactionPets1.append(h3Pet1,inputLike1,inputMatch1);
    cardPet2.append(photoPets2,interactionPets2);
    photoPets2.append(img2);
    interactionPets2.append(h3Pet2,inputLike2,inputMatch2);
    sectionTestimonies.append(h2Testimonies,messageTestimony1,messageTestimony2);
    messageTestimony1.append(pTestimony1);
    messageTestimony2.append(pTestimony2);
   
}
