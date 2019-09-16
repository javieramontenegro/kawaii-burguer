import React  from 'react';
import ButtonsElect from './ButtonElect';


class ButtonsOptions extends React.Component{
render(){
return(
    
       <div className="container" >
                <div className="row justify-content-start">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 option-buttons  ">
                    
                    <button className="btn-option" onClick={()=>this.props.option("Desayunos")} >Desayuno </button>
                    <button className="btn-option" onClick={()=>this.props.option("Almuerzos")} >Almuerzo </button>
                    </div>
                    </div>
                    </div>
)
}
}
export default ButtonsOptions;

//en el evento onClick le pones as opciones Solicitando datos (GET) levantamiento de estado