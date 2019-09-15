import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import HomeTheme from '../pages/HomeTheme'
import OrderTheme from '../pages/OrderTheme'
import ReadyTheme from '../pages/ReadyTheme'
function App(){
    return(
        <BrowserRouter>
               <Switch>
               <Route exact path="/" component={HomeTheme} ></Route>
                <Route exact path="/home" component={HomeTheme} ></Route>
                <Route exact path="/order" component={OrderTheme} ></Route>
                <Route exact path="/ready" component={ReadyTheme} ></Route>
               </Switch>
        </BrowserRouter>
    )
}
export default App;