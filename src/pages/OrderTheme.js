import React  from 'react';
import Nav from '../components/Nav'
import ButtonsOptions from '../components/ButtonsOptions';
import menu from '../data/data.json'
import ButtonsElect from '../components/ButtonElect';
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
         <ButtonsOptions option={this.selectOption}/>
         <ButtonsElect optionFood={this.state.order}  breakfast={this.state.breakfast} lunch={this.state.lunch}  />
    </React.Fragment>
)
}
}
export default OrderTheme;