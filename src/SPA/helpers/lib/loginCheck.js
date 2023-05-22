// form.addEventListener('submit', async(e)=> {
//     e.preventDefault()
//     const email = inputCorreo.value;
//     const password = inputPassword.value;

//     try {
//       const User = await signInWithEmailAndPassword(
//        auth,
//       email,
//       password,
//        );
//        console.log(User);
//        navigateTo('/home');
         
//  } catch (error) {
//   if(error.code === 'auth/wrong-password'){
//     mostrarMensaje('Contraseña incorrecta');
//    } else if(error.code === 'auth/user-not-found') {
//     mostrarMensaje('cuenta no registrada');
//    }
//     }
//   });