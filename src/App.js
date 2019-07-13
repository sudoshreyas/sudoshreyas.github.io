import React from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import list from './list';
import doctor from './doctor';
import dashboard from './dashboard';
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
    <ul>
     <li><Link to="/">Home</Link></li>
     <li><Link to="/doctor/dashboard">dashboard</Link></li>
     <li><Link to="/doctor/:id">doctor</Link></li>
     <li><Link to="/doctor_list">list</Link></li>
    </ul>
    <hr />
    <Route path="/doctor/dashboard" component={ dashboard } />
    <Route path="/doctor/:id" component={ doctor } />
    <Route path="/doctor_list" component={ list } />
    
   </div>
  </
HashRouter>
              </div>
            
  );}
}

export default App;
