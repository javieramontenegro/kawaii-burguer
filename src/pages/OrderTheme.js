import React  from 'react';
import Nav from '../components/Nav'
import ButtonsOptions from '../components/ButtonsOptions';
import menu from '../data/data.json'
import ButtonsElect from '../components/ButtonElect';
import '../style/order.css'
class OrderTheme extends React.Component{
 constructor(props){
     super(props);
     this.state ={
        menu,
        order:[],
       
     }
     
     }
     selectOption=(option)=>{
        this.setState(
            {order:this.state.menu[option]},
            
            () =>{ console.log(this.state.order)}
       )
        if (option==="Desayunos"){
            this.setState(
                {breakfast:true,lunch:false}
               
                )
        }
        if (option==="Almuerzos"){
            this.setState(
                {lunch:true,breakfast:false, }
                
                )
        }
    }
    render(){
return(
    <React.Fragment>
         <Nav/>
             <div className="container" >
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-3 col-md-6 col-lg-6 col-xl-6 option-buttons  ">
                        <ButtonsOptions option={this.selectOption}/>
                        <ButtonsElect optionFood={this.state.order}  breakfast={this.state.breakfast} lunch={this.state.lunch}  />
                    
                    </div>
                    <div className="col-12 col-sm-3 col-md-6 col-lg-6 col-xl-6 option-buttons  ">
                    </div>
                </div>
            </div>
    </React.Fragment>
)
}
}
export default OrderTheme;