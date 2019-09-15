import React  from 'react';
import Nav from '../components/Nav'
import Response from '../components/Response'
import {Link} from 'react-router-dom'

class ReadyTheme extends React.Component{
 constructor(props){
     super(props);
     this.state ={
      
       
     }
     
     }
   
    render(){
return(
    <React.Fragment>
         <Nav/>
         <Response  />
    </React.Fragment>
)
}
}
export default ReadyTheme;