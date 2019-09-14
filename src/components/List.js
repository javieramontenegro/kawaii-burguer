import React  from 'react';
import * as firebase from 'firebase';




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
                <div key={index}>
                    {menu.name} {this.newValue(menu)} {menu.quantity}  <button onClick={()=> this.props.sumQuantity(menu)} >+</button  > <button onClick={()=>this.props.minusQuantity(menu)} >-</button> <button onClick={()=> this.props.delete(menu)} >X</button>
                    <br></br>
                    
                </div>
            )
        })}
        <div>
         {this.props.totalSum(this.props.total)}

        </div>
         <br></br>
          <input type="text" onChange={this.props.onChange} name="client" placeholder="nombre cliente" ></input>
          <br></br>
          <button id="send-order" onClick={this.props.saveFirebase} >enviar pedido</button>
         
    </div>
)
}
}
export default List;

//en el evento onClick le pones as opciones Solicitando datos (GET) levantamiento de estado