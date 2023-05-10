    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyBjhOESemBSDaB-vCAqUKB0spcDfn3wy2w",
      authDomain: "socialnetwork-foodiegram.firebaseapp.com",
      projectId: "socialnetwork-foodiegram",
      storageBucket: "socialnetwork-foodiegram.appspot.com",
      messagingSenderId: "169678372302",
      appId: "1:169678372302:web:3fb784e61d7135daf3ff9f",
      measurementId: "G-59SY6E4Z0D"
    };
  
    // Initialize Firebase
    export const app = initializeApp(firebaseConfig);
    export const analytics = getAnalytics(app);