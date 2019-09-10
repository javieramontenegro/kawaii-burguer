import React  from 'react';


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
    }
    
    }
  add(name,value){
    
  }

  render(){
    
    return(
  
      <React.Fragment>
         {this.props.breakfast &&(
            this.props.optionFood.map(menu=>{
                return(
                  <button>{menu.name}</button>
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
                            <button>{menu.name}</button>
                              )
                             })
                        )
                     }  
          {
            this.state.agregados && (
              this.props.optionFood.Agregados.map(menu=>{
                return(
                  <button>{menu.name}</button>
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
                              <button>{menu.name}</button>
                            )
                          })
                        )
                      }  
                      {
                        this.state.gaseosa && (
                          this.props.optionFood.Bebestibles.Gaseosa.map(menu=>{
                            return(
                              <button>{menu.name}</button>
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
                              <button>{menu.name}</button>
                            )
                          })
                        )
                      }  
                    {
                      this.state.doble && (
                        this.props.optionFood.Hamburguesas.Doble.map(menu=>{
                          return(
                            <button>{menu.name}</button>
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
         
       


          </React.Fragment>
)
}
}
export default ButtonsElect;

