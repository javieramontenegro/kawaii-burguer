import React  from 'react';
import Response from './Response'
import List from './List'
import * as firebase from 'firebase';

class ButtonsElect extends React.Component{
  constructor(props){
    super(props);
    this.state ={
     acompañamientos:false,
     agregados:false,
     bebestibles:false,
     hamburguesas:false,
     agua:false,
     gaseosa:false,
     simple:false,
     doble:false,
     orderList:[],
     totalValue:0,
     client:"",
    
    
    }
    /* this.add = this.add.bind(this) */
    }
  add=(name,value)=>{
    let exist=false;
    
    
     /*   this.state.orderList.push(list) */
    this.state.orderList.map(order=>{
      
    if(order.name=== name){
       exist=true;
       order.quantity++;
       this.setState({
        totalValue:this.state.totalValue + order.value,})
     }
    })
    if(!exist){
      let list = {name:name,value:value,quantity:1,total:value,}
      this.state.orderList.push(list)
     
   
     }
    
    this.setState({orderList:this.state.orderList,
                    totalValue:this.state.totalValue + value,})
  
  
  }
  sumQuantity=(quantity)=>{
 

    quantity.quantity=quantity.quantity+1;
    
    this.setState({orderList:this.state.orderList,
      totalValue:this.state.totalValue + quantity.value,})
    
    }
    minusQuantity=(quantity)=>{
      if (quantity.quantity>0){
          quantity.quantity=quantity.quantity - 1;
          this.setState({orderList:this.state.orderList,
            totalValue:this.state.totalValue - quantity.value,})
      }
      }
  deleteOrder=(key)=>{
    const removed= this.state.orderList.filter(deleteOrd=> deleteOrd.name !== key.name)
    let sum = this.state.orderList.map(sum=>sum.total)
    //chantar un if
    this.setState({orderList:removed,
                   /*  totalValue:this.state.totalValue - sum, */
                          })

   }
   saveFirebase=()=>{
    
    this.setState({totalValue:this.state.totalValue},()=>{console.log(this.state.totalValue)})
    if (this.state.client===""){
        alert("ingresa un nombre")
    }
    else{
      this.setState({totalValue:this.state.totalValue},()=>{console.log(this.state.totalValue)})
        console.log("funciona el click")
        var db = firebase.firestore();
        db.collection("order").add({
            client:this.state.client,
            order:this.state.orderList,
            total:this.state.totalValue,
            orderReady:true,
            time: new Date(),
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
          })
          .catch(function(error) {
            console.error("Error adding document: ", error);
          });
   
    }

}
handleChange = e => {
  this.setState({
   client: e.target.value,
  },()=>{console.log(this.state.client)} );
};
totalSum=(total)=>{
  let sum = this.state.orderList.map(sum=>sum.total)

  if(sum.length){
   total =sum.reduce((a, b) => a + b)
}

return total
}

/* getFirebase=()=>{
  var db = firebase.firestore();
  db.collection("order").where("orderReady", "==", true).orderBy("time", "desc").onSnapshot((querysnapshot)=>{
    this.setState({
      data:querysnapshot.docs.map(doc=>{
        return {data:doc.data()}
      })
    })
  })
  
 
  
} */



  render(){
    
    return(
  
      <React.Fragment>
         {this.props.breakfast &&(
            this.props.optionFood.map(menu=>{
              console.log(menu) 
              return(
                  <button onClick={()=>this.add(menu.name,menu.value)}key={menu.name} >{menu.name}</button>
                )
            })
         )}
         
         {this.props.lunch &&(
                    <React.Fragment>
                   
                        <button onClick={()=>this.setState({acompañamientos:true,agregados:false,bebestibles:false,hamburguesas:false,})}>Acompañamiento</button>
                        <button onClick={()=>this.setState({acompañamientos:false,agregados:true,bebestibles:false,hamburguesas:false,})}>Agregados</button>
                        <button onClick={()=>this.setState({acompañamientos:false,agregados:false,bebestibles:true,hamburguesas:false,})}>Bebestible</button>
                        <button onClick={()=>this.setState({acompañamientos:false,agregados:false,bebestibles:false,hamburguesas:true,})}>Hamburguesas</button>
                   <br></br>
                {
                   this.state.acompañamientos && (
                      this.props.optionFood.Acompañamientos.map(menu=>{
                          return(
                            <button onClick={()=>this.add(menu.name,menu.value)} >{menu.name}</button>
                              )
                             })
                        )
                     }  
          {
            this.state.agregados && (
              this.props.optionFood.Agregados.map(menu=>{
                return(
                  <button onClick={()=>this.add(menu.name,menu.value)} >{menu.name}</button>
                )
              })
            )
          }  
           {
            this.state.bebestibles && (
              <React.Fragment>
                  <button onClick={()=>this.setState({agua:true,gaseosa:false,})} >Agua</button>
                  <button onClick={()=>this.setState({agua:false,gaseosa:true,})} >Gaseosa</button>
                  <br></br>
                      {
                        this.state.agua && (
                          this.props.optionFood.Bebestibles.Agua.map(menu=>{
                            return(
                              <button onClick={()=>this.add(menu.name,menu.value)} >{menu.name}</button>
                            )
                          })
                        )
                      }  
                      {
                        this.state.gaseosa && (
                          this.props.optionFood.Bebestibles.Gaseosa.map(menu=>{
                            return(
                              <button onClick={()=>this.add(menu.name,menu.value)} >{menu.name}</button>
                            )
                          })
                        )
                      }  
              </React.Fragment>
            )
          }  
               {
            this.state.hamburguesas && (
                 <React.Fragment>
                  <button onClick={()=>this.setState({simple:true,doble:false,})} >Simple</button>
                  <button onClick={()=>this.setState({simple:false,doble:true,})} >Doble</button>
                  <br></br>
                   {
                        this.state.simple && (
                          this.props.optionFood.Hamburguesas.Simple.map(menu=>{
                            return(
                              <button onClick={()=>this.add(menu.name,menu.value)} >{menu.name}</button>
                            )
                          })
                        )
                      }  
                    {
                      this.state.doble && (
                        this.props.optionFood.Hamburguesas.Doble.map(menu=>{
                          return(
                            <button onClick={()=>this.add(menu.name,menu.value)} >{menu.name}</button>
                          )
                        })
                      )
                    }  
               </React.Fragment>
            )
          }  
                    
                   
                    </React.Fragment>
                    
              )
            }
         
             <List show={this.state.orderList} delete={this.deleteOrder} total={this.state.totalValue} client={this.state.client} saveFirebase={this.saveFirebase} onChange={this.handleChange} totalSum={this.totalSum} sumQuantity={this.sumQuantity} minusQuantity={this.minusQuantity}   />
              <Response  />

          </React.Fragment>
)
}
}
export default ButtonsElect;

