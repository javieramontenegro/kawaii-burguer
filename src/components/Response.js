import React from 'react';
import { collection, query, where, orderBy, onSnapshot } from 'firebase/firestore'; 
import { initializeApp } from 'firebase/app'; // Asegúrate de importar initializeApp
import { firebaseConfig, db } from '../index'; // Ajusta la ruta si es necesario
import Res from './Res';

class Response extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    console.log("didmount");

    // Inicializa Firebase solo si no ha sido inicializado
    if (!window.firebaseApp) {
      // Inicializa Firebase solo una vez
      window.firebaseApp = initializeApp(firebaseConfig);
    }

    // Obtener la instancia de Firestore
    /* const db = getFirestore(window.firebaseApp); // Usa la instancia de Firebase almacenada en window */

    // Crear una referencia a la colección 'order'
    const q = query(
      collection(db, "order"),
      where("orderReady", "==", true),
      orderBy("time", "desc")
    );

    // Usar onSnapshot para obtener los datos en tiempo real
    this.unsubscribe = onSnapshot(q, (snap) => {
      this.setState({
        data: snap.docs.map(doc => ({
          data: doc.data(),
        })),
      });
    }, (error) => {
      console.error("Error obteniendo datos: ", error);
    });
  }

  componentWillUnmount() {
    // Limpiar el listener de onSnapshot cuando el componente se desmonte
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <Res data={data} />
      </div>
    );
  }
}

export default Response;
