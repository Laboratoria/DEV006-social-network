import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../helpers/lib/firebase';

function registro(navigateTo) {
    const section = document.createElement('section');
    const sectionLogoR = document.createElement('div');
    const sectionRegister = document.createElement('section');
    const logoR = document.createElement('img');
    const sectionPets = document.createElement('div');
    const animalesR = document.createElement('img');
    const form = document.createElement('form');
    const inputEmail = document.createElement('input');
    const inputName = document.createElement('input');
    const inputUser = document.createElement('input');
    const inputPassword = document.createElement('input');
    const inputConfirm = document.createElement('input');
    const buttonCreate = document.createElement('button'); // iniciar sesión
    const contenedorR = document.createElement('section');
    const textoEnlace  = document.createElement('a');
    const divDerecho = document.createElement('div');
    const dog = document.createElement('img');
    const textoRegister = document.createElement('p');
   
    
    /*Textos etiquetas*/  
    inputEmail.placeholder = 'Correo';
    inputName.placeholder = 'Nombre Completo';
    inputUser.placeholder = 'Nombre de Usuario';
    inputPassword.placeholder = 'Contraseña';
    inputConfirm.placeholder = 'Confirmar contraseña';
    buttonCreate.textContent = 'Crear Cuenta'
    textoRegister.textContent = '¿Ya tienes una cuenta?';
    textoEnlace.textContent = 'Iniciar Sesión'
    
    /*imagenes*/
    logoR.setAttribute('src', '../assets/logo1.png');
    sectionLogoR.append(logoR);

    /*Imagen de animales*/
    animalesR.classList.add('animales');
    animalesR.setAttribute('src', '../assets/imagPets2.jpg');
    sectionPets.className = 'sectionPets';

    buttonCreate.classList.add('login');
    inputEmail.setAttribute('id', 'email');
    inputPassword.setAttribute('id', 'password');

    form.append(inputEmail, inputPassword, inputName,inputUser,inputConfirm, buttonCreate);
    contenedorR.classList.add('centrado');
    textoEnlace.classList.add('button-registrate');
    contenedorR.append(textoRegister, textoEnlace);


    dog.classList.add('cel-perro');
    dog.setAttribute('src', '../assets/perrito.png');
    divDerecho.classList.add('div-left');
    divDerecho.append(dog);

    form.addEventListener('submit', async(e) => {
        e.preventDefault();
        const email = inputEmail.value;
        const password = inputPassword.value;
       console.log(email, password);
    
       try {
           const resultUser = await createUserWithEmailAndPassword(
            auth,
           email,
           password,
            );
            mostrarMensaje('Tu cuenta ha sido creada con exito!');
            setTimeout(() => {
                navigateTo('/');
            }, 3000);   
      } catch (error) {
        if(error.code === 'auth/email-already-in-use'){
            mostrarMensaje('El correo ya está creado');
           } else if(error.code === 'auth/invalid-email') {
            mostrarMensaje('El correo es inválido');
           } else if (error.code === 'auth/weak-password'){
            mostrarMensaje('Contraseña débil, pruebe con mínimo 6 caracteres');
           }
         }
       });

       function mostrarMensaje(mensaje) { 
        //Comprobar que exista una alerta
        const alerta = document.querySelector('.message-error');
        if(alerta) {
            alerta.remove();
        }
        
        const mensajeError = document.createElement('p');
        mensajeError.textContent = mensaje;

        mensajeError.classList.add('message-error');

        //inyectar el mensaje al formulario
        form.appendChild(mensajeError);
    }

       sectionPets.append(animalesR, form, contenedorR);

       sectionRegister.classList.add('sectionLogin');
       sectionRegister.append(sectionLogoR, sectionPets);

       section.classList.add('sectionGeneral');
     section.append(
       divDerecho,
        sectionRegister,
  );
    
    return section;

    }
    
    export default registro

    