// List.js
import React from 'react';
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { firebaseConfig, db } from '../index'; // Ajusta la ruta si es necesario



class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orderTotal: props.show,
            total: props.total,
            client: props.client,
            loading: false
        };
    }

    // Método para calcular el valor total
    newValue = (value) => {
        value.total = value.quantity * value.value;
        return value.total;
    };

    // Guardar pedido en Firebase
   /*  saveFirebase = async () => {
        this.setState({ loading: true });
        try {
            const docRef = await addDoc(collection(db, "order"), {
                client: this.state.client,
                items: this.state.orderTotal,
                total: this.props.total,
            });
            console.log("Document written with ID: ", docRef.id);
            this.setState({ loading: false });
        } catch (e) {
            console.error("Error adding document: ", e);
            this.setState({ loading: false });
        }
    }; */

    render() {
        return (
            <div>
                {this.props.show.map((menu, index) => {
                    return (
                        <div className="contain-food" key={index}>
                            <div className="container">
                                <div className="row justify-content-start">
                                    <div className="col-7 col-sm-8 col-md-8 col-lg-8 col-xl-9 ">
                                        {menu.name} $ {this.newValue(menu)} x {menu.quantity}
                                    </div>
                                    <div className="col-5 col-sm-4 col-md-4 col-lg-4 col-xl-3 ">
                                        <button className="btn-sum" onClick={() => this.props.sumQuantity(menu)} >+</button>
                                        <button className="btn-minus" onClick={() => this.props.minusQuantity(menu)} >-</button>
                                        <button className="btn-delete" onClick={() => this.props.delete(menu)} >X</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
                <div className="total">
                    <div className="container">
                        <div className="row justify-content-start">
                            <div className="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 ">
                                Total $ {this.props.totalSum(this.props.total)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row justify-content-start ">
                        <input
                            className="client"
                            type="text"
                            onChange={this.props.onChange}
                            name="client"
                            placeholder="nombre cliente"
                        />
                    </div>
                    <div className="row justify-content-start anchor">
                        {this.state.loading ? (
                            <div>Cargando...</div>
                        ) : (
                            <button id="send-order" className="send-order" onClick={this.props.saveFirebase}>Enviar Pedido</button>
                        )}
                        <br />
                        <Link to="/ready" className="btn-to-ready">Ver pedidos</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default List;
