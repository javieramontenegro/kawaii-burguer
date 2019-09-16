import React  from 'react';
import * as firebase from 'firebase';
import {Link} from 'react-router-dom'




class List extends React.Component{
    constructor(props){
        super(props);
        this.state ={
          orderTotal:props.show,
          total:props.total,
          client:props.client,
        }
        
        }


newValue=(value)=>{
value.total=value.quantity * value.value
return value.total
}



    render(){
return(
   <div>
   
        {this.props.show.map((menu,index)=>{
            return(
                <div className="contain-food" key={index}>
                   <div className="container" >
                        <div className="row justify-content-start">
                            <div className="col-7 col-sm-8 col-md-8 col-lg-8 col-xl-9 ">
                    {menu.name} $ {this.newValue(menu)} x  {menu.quantity}
                    </div>
                    <div className="col-5 col-sm-4 col-md-4 col-lg-4 col-xl-3 ">
                      <button className="btn-sum" onClick={()=> this.props.sumQuantity(menu)} >+</button  > <button className="btn-minus" onClick={()=>this.props.minusQuantity(menu)} >-</button> <button className="btn-delete" onClick={()=> this.props.delete(menu)} >X</button>
                      </div>
                         
                      </div>
                    </div>
                </div>
            )
        })}
        <div className="total" >
                 <div className="container" >
                        <div className="row justify-content-start">
                            <div className="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 ">
                                           Total $ {this.props.totalSum(this.props.total)}
                              </div>
                        </div>
                  </div>
        </div>
        <div className="container" >
                <div className="row justify-content-start ">
                     <input className="client" type="text" onChange={this.props.onChange} name="client" placeholder="nombre cliente" ></input>
               </div>
               <div className="row justify-content-start anchor">
                 
                     <button id="send-order" className="send-order" onClick={this.props.saveFirebase} >enviar pedido</button>
                 
                <br></br>
                
                     <Link to="/ready" className="btn-to-ready">Ver pedidos</Link>
                
          </div>
        </div>
    </div>
)
}
}
export default List;

//en el evento onClick le pones as opciones Solicitando datos (GET) levantamiento de estado