import React  from 'react';
import * as firebase from 'firebase';

class Res extends React.Component{
   
   render(){
    
       return(
        this.props.data !== undefined ? this.props.data.map(el=>
                
                
          
               <div className="container ready" >
                        <div className="row justify-content-start">
                            <div className="col-9 col-sm-9 col-md-9 col-lg-9 col-xl-9 ">
                                   
                                    <h1 className="text-name">{el.data.client}</h1>
                                    </div>
               {el.data.order.map(order=>{
                   return(
                    <div key={order.name} className="container" >
                           <div className="row justify-content-start">
                                
                                         
                                        <div  className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 color-res">
                                            <p >{order.name}</p> 
                                            </div>
                                            <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 color-res">
                                            <p>$ {order.value}</p>
                                            </div>
                                            <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 color-res ">
                                            <p>X {order.quantity}</p>
                                            </div>
                                            <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 color-res ">
                                            <p>$ {order.total}</p>
                                            </div>
                                  
                    </div> 
           </div>
                   )
               })}
                <div className="col-9 col-sm-9 col-md-9 col-lg-9 col-xl-9 ">
                      <h1 className="text-name" >Total $ {el.data.total}</h1>
                </div>

                  </div>
               </div>
            
        ):<p></p> 
    )
       
          
   
}}
export default Res;