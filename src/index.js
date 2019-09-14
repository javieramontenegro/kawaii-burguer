import React from 'react';
import ReactDOM from 'react-dom';
/* import './index.css'; */
/* import App from './App'; */
import * as serviceWorker from './serviceWorker';
import OrderTheme from './pages/OrderTheme';
import HomeTheme from './pages/HomeTheme'
import * as firebase from 'firebase';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBIHVrjqYVYLsFJE0n_RoXgenC0frJLNhw",
    authDomain: "kawaii-burguer.firebaseapp.com",
    databaseURL: "https://kawaii-burguer.firebaseio.com",
    projectId: "kawaii-burguer",
    storageBucket: "kawaii-burguer.appspot.com",
    messagingSenderId: "919586581235",
    appId: "1:919586581235:web:0a6f981dcbad70eb08e586"
  };
  firebase.initializeApp(firebaseConfig);

ReactDOM.render(<HomeTheme />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
