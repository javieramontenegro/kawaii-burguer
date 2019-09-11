import React  from 'react';



class List extends React.Component{
    constructor(props){
        super(props);
        this.state ={
          orderTotal:props.show,
          totalValue:0,
        }
        
        }
totalSum=(total)=>{
   let sum = this.state.orderTotal.map(sum=>sum.total)
   console.log("esperando"+sum)
   if(sum.length){
    total =sum.reduce((a, b) => a + b)
 }
 return total
}

sumQuantity=(quantity)=>{
/* quantity=quantity+1; */ 

quantity.quantity=quantity.quantity+1;
/* console.log(quantity.quantity) */
this.setState({totalValue:quantity.quantity})

}
minusQuantity=(quantity)=>{
if (quantity.quantity>0){
    quantity.quantity=quantity.quantity - 1;
    this.setState({totalValue:quantity.quantity})
}
}
deleteOrder=(key)=>{
 const removed= this.state.orderTotal.filter(deleteOrd=> deleteOrd.name !== key.name)
//chantar un if
 this.setState({orderTotal:removed})
}
newValue=(value)=>{
value.total=value.quantity * value.value
return value.total
}

    render(){
return(
    <div>
        {this.state.orderTotal.map(menu=>{
            return(
                <div key={menu.name} index={menu.name}>
                    {menu.name} {this.newValue(menu)} {menu.quantity}  <button onClick={()=> this.sumQuantity(menu)} >+</button  > <button onClick={()=>this.minusQuantity(menu)} >-</button> <button onClick={()=> this.deleteOrder(menu)} >X</button>
                    <br></br>
                    
                </div>
            )
        })}
         {this.totalSum(this.state.totalValue)}

    </div>
)
}
}
export default List;

//en el evento onClick le pones as opciones Solicitando datos (GET) levantamiento de estado