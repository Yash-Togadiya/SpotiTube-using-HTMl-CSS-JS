// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js";
import { getAuth, signInWithRedirect, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuratio
const firebaseConfig = {
  apiKey: "AIzaSyD5fZnkHzSiYtq-TCCx3sZujzaE8NvPxBo",
  authDomain: "signin-trial02.firebaseapp.com",
  projectId: "signin-trial02",
  storageBucket: "signin-trial02.appspot.com",
  messagingSenderId: "198790657003",
  appId: "1:198790657003:web:1978b07e7e0ce313d09fae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

const provider = new GoogleAuthProvider(app);

signingoogle.addEventListener('click', (e) => {

  /*  REDIRECTING TO a new page google sign in suthentication */
  // signInWithRedirect(auth, provider);

  //  getRedirectResult(auth)
  //   .then((result) => {
  //     // This gives you a Google Access Token. You can use it to access Google APIs.
  //     const credential = GoogleAuthProvider.credentialFromResult(result);
  //     const token = credential.accessToken;

  //     // The signed-in user info.
  //     const user = result.user;
  //   }).catch((error) => {
  //     // Handle Errors here.
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     // The email of the user's account used.
  //     const email = error.customData.email;
  //     // The AuthCredential type that was used.
  //     const credential = GoogleAuthProvider.credentialFromError(error);
  //     // ...
  //   });

  /*popup google sign in suthentication */


  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });


  login.addEventListener('click', (e) => {

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var username = document.getElementById('username').value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        set(ref(database, 'users/' + user.uid), {
          username: username,
          email: email
        })

        alert('user created!');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        alert(errorMessage);
        // ..
      });

  });

  login.addEventListener('click', (e) => {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        const dt = new Date();
        update(ref(database, 'users/' + user.uid), {
          last_login: dt,
        })

        alert('User loged in!');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        alert(errorMessage);
      });

  });

  const user = auth.currentUser;
  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     // User is signed in, see docs for a list of available properties
  //     // https://firebase.google.com/docs/reference/js/firebase.User
  //     const uid = user.uid;
  //     //bla bla bla
  //     // ...
  //   } else {
  //     // User is signed out
  //     // ...
  //     //bla bla bla
  //   }
  // });

  // // logout.addEventListener('click',(e)=>{

  // //    signOut(auth).then(() => {
  // //      // Sign-out successful.
  // //      alert('user loged out');
  // //    }).catch((error) => {
  // //      // An error happened.
  // //      const errorCode = error.code;
  // //      const errorMessage = error.message;

  // //         alert(errorMessage);
  // //    });

  // // });

});