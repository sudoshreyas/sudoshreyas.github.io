import React from 'react';


 class App extends React.Component {
  constructor(props){
    super(props);
    console.log(this.props.match.params.id);
    this.state ={
      data : []
    }
  }
  componentWillMount(){

    
}  
   render(){
    return (
      <div className="container" >
      {this.state.data.map(doc=>
            <a href= {'/doctor/' + doc.npi}>
            <div className=" lp panel panel-primary">
            <div className="panel-heading">
             <h4>{doc.profile.first_name} {doc.profile.middle_name} {doc.profile.last_name}</h4>
            </div>
            <div className="panel-body">
            <div className="col-sm-4">
              <img src={doc.profile.image_url} style = {{height : "100px"}} alt = "Doctor"/>
              </div>
            <div className="col-sm-4">
              <h4>Tittle</h4>
              <h6>{doc.profile.title}</h6></div>
              <div className="col-sm-4">
              <h4>Type</h4>
              <h6>{doc.specialties[0].uid.toUpperCase()}</h6></div>
              </div>
              </div></a>
              )}
              </div>
            
  );}
}

export default App;
