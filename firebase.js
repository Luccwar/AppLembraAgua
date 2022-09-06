// Import the functions you need from the SDKs you need
//import * as firebase from "firebase
//import * as firebase from "firebase/app";
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// cada produto do firebase deve ser importad separadamente
//por exemplo auth de autenticação

import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeuAlYnYxozYEuvZFFTEgnwFhwh_Fkqz8",

  authDomain: "avaliacao3lucasalvespdm.firebaseapp.com",

  projectId: "avaliacao3lucasalvespdm",

  storageBucket: "avaliacao3lucasalvespdm.appspot.com",

  messagingSenderId: "1070093159988",

  appId: "1:1070093159988:web:f2b27e6407661e72740461",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const firestore = firebase.firestore();
export { firestore };
