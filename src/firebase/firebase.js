import * as firebase from 'firebase';
import 'firebase/firestore';



const firebaseApp = firebase.initializeApp = ({
    apiKey: "AIzaSyBIHVrjqYVYLsFJE0n_RoXgenC0frJLNhw",
    authDomain: "kawaii-burguer.firebaseapp.com",
    databaseURL: "https://kawaii-burguer.firebaseio.com",
    projectId: "kawaii-burguer",
    storageBucket: "kawaii-burguer.appspot.com",
    messagingSenderId: "919586581235",
    appId: "1:919586581235:web:0a6f981dcbad70eb08e586"
  });

  const db=firebaseApp.firestore();
export {db};