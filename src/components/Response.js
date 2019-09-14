import React  from 'react';
import * as firebase from 'firebase';
import Res from './Res'
class Response extends React.Component{
    constructor(props){
        super(props);
        this.state ={
       /*  data:[], */
        }
        
        }
componentDidMount(){
    console.log("didmount")
    var db = firebase.firestore();
    db.collection("order").where("orderReady", "==", true).orderBy("time", "desc").onSnapshot((snap)=>{
      this.setState({
        data:snap.docs.map(doc=>{
          return {data:doc.data()}
        })
      })
    })
    
}
   render(){
    const {data} = this.state;
       return(
           <div>
             <Res data={data} />
           </div>
       )
   }
}
export default Response;