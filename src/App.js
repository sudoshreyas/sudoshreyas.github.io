import React from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import list from './list';
import doctor from './doctor';
import dashboard from './dashboard';
import verify from './verify';
import {CSSTransition} from 'react-transition-group';
import './App.css';
 class App extends React.Component {
  constructor(props){
    super(props);
    
    this.state ={
      data : []
    }
  }
  componentWillMount(){

    
}  
   render(){
    return (
      <div className="container" >
      <HashRouter basename='/'>   <div>
    
    <CSSTransition
          in={true}
          appear={true}
          timeout={10000}
          classNames="pull"
          ><ul>
     <li><Link to="/">Home</Link></li>
     <li><Link to="/doctor/dashboard">dashboard</Link></li>
     <li><Link to="/doctor/:id">doctor</Link></li>
     <li><Link to="/doctor_list">list</Link></li>
    </ul></CSSTransition>
    <hr />
    <Route path="/doctor/dashboard" component={ dashboard } />
    <Route path="/doctor/:id" component={ doctor } />
    <Route path="/doctor_list" component={ list } />
    <Route path="/verify/:ph" component={ verify } />
   </div>
  </
HashRouter>
              </div>
            
  );}
}

export default App;
