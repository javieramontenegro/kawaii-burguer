import React  from 'react';
import * as firebase from 'firebase';

class Res extends React.Component{
   
   render(){
    
       return(
        this.props.data !== undefined ? this.props.data.map(el=>
                
                
            <div >
              <h3>nombre cliente</h3>
               <h1>{el.data.client}</h1>
               {el.data.order.map(order=>{
                   return(
                    <div key={order.name}>  
                    <p>{order.name}</p> <p>$ {order.value}</p>
                    <h3>$ {order.total}</h3>
                    </div> 
                   )
               })}
            </div> 
        
        ):<p></p> 
    )
       
          
   
}}
export default Res;