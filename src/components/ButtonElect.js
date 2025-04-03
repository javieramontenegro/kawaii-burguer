import React from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore'; // Importaciones de Firebase 9+
import { initializeApp } from 'firebase/app'; // Asegúrate de importar initializeApp
import { firebaseConfig, db } from '../index'; // Ajusta la ruta si es necesario
import Swal from 'sweetalert2';
import List from './List';

class ButtonsElect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      acompañamientos: false,
      agregados: false,
      bebestibles: false,
      hamburguesas: false,
      agua: false,
      gaseosa: false,
      simple: false,
      doble: false,
      orderList: [],
      totalValue: 0,
      client: "",
    };
  }

  componentDidMount() {
    // Inicializar Firebase solo si no ha sido inicializado previamente
    if (!window.firebaseApp) {
      window.firebaseApp = initializeApp(firebaseConfig);
    }
  }

  add = (name, value) => {
    let exist = this.state.orderList.some(order => order.name === name);
    let updatedOrderList = [...this.state.orderList];

    if (exist) {
      updatedOrderList = updatedOrderList.map(order => {
        if (order.name === name) {
          order.quantity++;
          order.total = order.quantity * order.value;
        }
        return order;
      });
    } else {
      updatedOrderList.push({ name, value, quantity: 1, total: value });
    }

    this.setState({
      orderList: updatedOrderList,
      totalValue: this.state.totalValue + value,
    });
  };

  sumQuantity = (quantity) => {
    quantity.quantity++;
    quantity.total = quantity.quantity * quantity.value;

    this.setState({
      orderList: [...this.state.orderList],
      totalValue: this.state.totalValue + quantity.value,
    });
  };

  minusQuantity = (quantity) => {
    if (quantity.quantity > 0) {
      quantity.quantity--;
      quantity.total = quantity.quantity * quantity.value;

      this.setState({
        orderList: [...this.state.orderList],
        totalValue: this.state.totalValue - quantity.value,
      });
    }
  };

  deleteOrder = (key) => {
    const removed = this.state.orderList.filter(deleteOrd => deleteOrd.name !== key.name);
    this.setState({
      orderList: removed,
    });
  };

  saveFirebase = async () => {
    if (this.state.client === "") {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Debes ingresar un nombre!',
      });
    } else {
      try {
        console.log("Guardando en Firestore...");
        const docRef = await addDoc(collection(db, "order"), {
          client: this.state.client,
          order: this.state.orderList,
          total: this.state.totalValue,
          orderReady: true,
          time: new Date(),
        });
        console.log("Documento guardado con ID:", docRef.id);
        Swal.fire({
          title: 'Orden guardada',
          width: 600,
          padding: '3em',
          background: '#fff url(https://ih1.redbubble.net/image.501834807.7352/flat,1000x1000,075,f.u5.jpg) no-repeat center right',
          backdrop: `
            rgba(0,0,123,0.4)
            url("http://66.media.tumblr.com/8210fd413c5ce209678ef82d65731443/tumblr_mjphnqLpNy1s5jjtzo1_400.gif")
            center left
            no-repeat
          `,
        });
      } catch (error) {
        console.error("Error al guardar el documento:", error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Hubo un problema al guardar la orden. Intenta nuevamente.',
        });
      }
    }
  };
  

  handleChange = (e) => {
    this.setState({
      client: e.target.value,
    });
  };

  totalSum = () => {
    const sum = this.state.orderList.reduce((acc, curr) => acc + curr.total, 0);
    return sum;
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
              {this.props.breakfast && this.props.optionFood.map(menu => (
                <button className="btn-breakfast" onClick={() => this.add(menu.name, menu.value)} key={menu.name}>{menu.name}</button>
              ))}
              {this.props.lunch && (
                <React.Fragment>
                  <button className="btn-breakfast" onClick={() => this.setState({ acompañamientos: true, agregados: false, bebestibles: false, hamburguesas: false })}>Acompañamiento</button>
                  <button className="btn-breakfast" onClick={() => this.setState({ acompañamientos: false, agregados: true, bebestibles: false, hamburguesas: false })}>Agregados</button>
                  <button className="btn-breakfast" onClick={() => this.setState({ acompañamientos: false, agregados: false, bebestibles: true, hamburguesas: false })}>Bebestible</button>
                  <button className="btn-breakfast" onClick={() => this.setState({ acompañamientos: false, agregados: false, bebestibles: false, hamburguesas: true })}>Hamburguesas</button>
                  <br />
                  {this.state.acompañamientos && this.props.optionFood.Acompañamientos.map(menu => (
                    <button className="btn-ulti" onClick={() => this.add(menu.name, menu.value)} key={menu.name}>{menu.name}</button>
                  ))}
                  {this.state.agregados && this.props.optionFood.Agregados.map(menu => (
                    <button className="btn-ulti" onClick={() => this.add(menu.name, menu.value)} key={menu.name}>{menu.name}</button>
                  ))}
                  {this.state.bebestibles && (
                    <React.Fragment>
                      <button className="btn-ulti" onClick={() => this.setState({ agua: true, gaseosa: false })}>Agua</button>
                      <button className="btn-ulti" onClick={() => this.setState({ agua: false, gaseosa: true })}>Gaseosa</button>
                      <br />
                      {this.state.agua && this.props.optionFood.Bebestibles.Agua.map(menu => (
                        <button className="btn-breakfast" onClick={() => this.add(menu.name, menu.value)} key={menu.name}>{menu.name}</button>
                      ))}
                      {this.state.gaseosa && this.props.optionFood.Bebestibles.Gaseosa.map(menu => (
                        <button className="btn-breakfast" onClick={() => this.add(menu.name, menu.value)} key={menu.name}>{menu.name}</button>
                      ))}
                    </React.Fragment>
                  )}
                  {this.state.hamburguesas && (
                    <React.Fragment>
                      <button className="btn-ulti" onClick={() => this.setState({ simple: true, doble: false })}>Simple</button>
                      <button className="btn-ulti" onClick={() => this.setState({ simple: false, doble: true })}>Doble</button>
                      <br />
                      {this.state.simple && this.props.optionFood.Hamburguesas.Simple.map(menu => (
                        <button className="btn-breakfast" onClick={() => this.add(menu.name, menu.value)} key={menu.name}>{menu.name}</button>
                      ))}
                      {this.state.doble && this.props.optionFood.Hamburguesas.Doble.map(menu => (
                        <button className="btn-breakfast" onClick={() => this.add(menu.name, menu.value)} key={menu.name}>{menu.name}</button>
                      ))}
                    </React.Fragment>
                  )}
                </React.Fragment>
              )}
            </div>
            <div className="col-md-6 xl-3 ml-auto">
              <List show={this.state.orderList} delete={this.deleteOrder} total={this.state.totalValue} client={this.state.client} saveFirebase={this.saveFirebase} onChange={this.handleChange} totalSum={this.totalSum} sumQuantity={this.sumQuantity} minusQuantity={this.minusQuantity} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ButtonsElect;
