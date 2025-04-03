import React from 'react';
import ReactDOM from 'react-dom/client'; // Importa desde react-dom/client
import * as serviceWorker from './serviceWorker';
import App from './components/App';

// Importar Firebase 9+ de forma modular
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Configuración de Firebase
export const firebaseConfig = {
    apiKey: "AIzaSyBIHVrjqYVYLsFJE0n_RoXgenC0frJLNhw",
    authDomain: "kawaii-burguer.firebaseapp.com",
    databaseURL: "https://kawaii-burguer.firebaseio.com",
    projectId: "kawaii-burguer",
    storageBucket: "kawaii-burguer.appspot.com",
    messagingSenderId: "919586581235",
    appId: "1:919586581235:web:0a6f981dcbad70eb08e586"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Obtener Firestore
const db = getFirestore(app);

// Exportar para usar en otros archivos
export { app, db };

// Usar el nuevo método de React 18 para renderizar la aplicación
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// Si deseas que tu aplicación funcione offline y se cargue más rápido,
// puedes cambiar unregister() a register() a continuación. Ten en cuenta que esto viene con algunas complicaciones.
// Más información sobre los service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
