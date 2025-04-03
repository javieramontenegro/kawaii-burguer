import React  from 'react';
import Nav from '../components/Nav'
import '../style/home.css'
import logo from '../img/logo.png'
import {Link} from 'react-router-dom'
class HomeTheme extends React.Component{
 constructor(props){
     super(props);
     this.state ={
      
     }
     
     }
    
    render(){
return(
    <React.Fragment>
         <Nav/>
          <div className="container">

             <div className="row justify-content-center">
                <div className="col-12 col-sm-3 col-md-3 col-lg-4 col-xl-4">  </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                        <img src={logo}  id="logo" alt="logo" className="img-fluid"></img>
                    </div>
                    <div className="col-12 col-sm-3 col-md-3 col-lg-4 col-xl-4">  </div>
                </div>
              <div className="row justify-content-center">
                 <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 text-prin"> 
                      <h1>Bienvenido a Burger Queen</h1>
                 </div>
              </div>
              <div className="row justify-content-center">
                 <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 text-prin"> 
                      <h3>Haz click aquí</h3>
                 </div>
              </div>
              <div className="row justify-content-center">
                 <div class="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 order-space"> 
                      <Link to="/order" className="btn-order">Haz tu orden</Link>
                 </div>
              </div>



         </div>
    </React.Fragment>
)
}
}
export default HomeTheme;