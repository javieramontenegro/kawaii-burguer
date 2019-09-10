import React  from 'react';
import ButtonsElect from './ButtonElect';


class ButtonsOptions extends React.Component{
render(){
return(
    <div>
       <button onClick={()=>this.props.option("Desayunos")} >Desayuno </button>
       <button onClick={()=>this.props.option("Almuerzos")} >Almuerzo </button>
       

</div>
)
}
}
export default ButtonsOptions;

//en el evento onClick le pones as opciones Solicitando datos (GET) levantamiento de estado