import React from 'react';
import { BrowserRouter, Switch,Route } from 'react-router-dom';
import list from './list';
import doctor from './doctor';
import home from './home';
import about from './about';
import inter from './interview';
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
      <div>
      <BrowserRouter 
basename={process.env.PUBLIC_URL}>
 <Switch>
    <Route path="/about" component={about}/>
    <Route path="/interview" component={inter}/>
 		<Route path="/doctor_list" component={ list } />
 		<Route path="/:id" component={ doctor } />a
    <Route component={home}/>
        
   </Switch>
</BrowserRouter>
              </div>
            
  );}
}

export default App;
