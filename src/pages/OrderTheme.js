import React  from 'react';
import Nav from '../components/Nav'
import ButtonsOptions from '../components/ButtonsOptions';
import menu from '../data/data.json'
class OrderTheme extends React.Component{
 constructor(props){
     super(props);
     this.state ={
        menu,
        order:[],
     }
     
     }
     selectOption=(option)=>{
        this.setState({
           order:this.state.menu[option]
        })
 
    }
    render(){
return(
    <React.Fragment>
         <Nav/>
         <ButtonsOptions option={this.selectOption} />
    </React.Fragment>
)
}
}
export default OrderTheme;