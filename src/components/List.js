import React  from 'react';
import {db} from '../firebase/firebase';


class List extends React.Component{
    constructor(props){
        super(props);
        this.state ={
          orderTotal:props.show,
          total:props.total,
          client:"",
        }
        
        }

handleChange = e => {
            this.setState({
             client: e.target.value,
            },()=>{console.log(this.state.client)} );
          };


 totalSum=(total)=>{
   let sum = this.props.show.map(sum=>sum.total)
 
   if(sum.length){
    total =sum.reduce((a, b) => a + b)
 }
  
 return total
}


sumQuantity=(quantity)=>{
/* quantity=quantity+1; */ 

quantity.quantity=quantity.quantity+1;
/* console.log(quantity.quantity) */
this.setState({orderTotal:this.props.show})

}
minusQuantity=(quantity)=>{
if (quantity.quantity>0){
    quantity.quantity=quantity.quantity - 1;
    this.setState({orderTotal:this.props.show})
}
}
/* deleteOrder=(key)=>{
 const removed= this.state.orderTotal.filter(deleteOrd=> deleteOrd.name !== key.name)
//chantar un if
 this.setState({orderTotal:removed})
} */
newValue=(value)=>{
value.total=value.quantity * value.value
return value.total
}
componentDidMount(){
let btnSend= document.getElementById("send-order");
btnSend.addEventListener('click',()=>{
    if (this.state.client=""){
        alert("ingresa un nombre")
    }
    else{
        db.collection("order").add({
            client:this.state.client,
            order:this.props.show,
            total:this.props.total,
            time: new Date(),
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
          })
          .catch(function(error) {
            console.error("Error adding document: ", error);
          });
   
    }
})
}
    render(){
return(
    <div>
        {this.props.show.map((menu,index)=>{
            return(
                <div key={index}>
                    {menu.name} {this.newValue(menu)} {menu.quantity}  <button onClick={()=> this.sumQuantity(menu)} >+</button  > <button onClick={()=>this.minusQuantity(menu)} >-</button> <button onClick={()=> this.props.delete(menu)} >X</button>
                    <br></br>
                    
                </div>
            )
        })}
         {this.totalSum(this.props.total)}
         <br></br>
          <input type="text" onChange={this.handleChange} name="client" placeholder="nombre cliente" ></input>
          <br></br>
          <button id="send-order">enviar pedido</button>
    </div>
)
}
}
export default List;

//en el evento onClick le pones as opciones Solicitando datos (GET) levantamiento de estado