import React , {Component}  from 'react';
import {CSSTransition} from 'react-transition-group';
import './App.css';
import Doctor from './edit';
class App extends Component
{
constructor(props)
{
  super(props);
  this.state=
  {
   doctor: null
  };
}

//fetching data from api//

componentWillMount() {
  fetch('http://www.mocky.io/v2/5d1483282f00007405c4f13d')
  .then(res => res.json())
  .then((datas) => {
     datas.forEach((data)=>{//analyzing the recieced data setting up hospital lists for hospitals ,getting all the cities etc
     	if(data.doc_id===this.props.match.params.id)
     	{
        if((data.from_hospital===1))
          {
            data.isHospital=1;
            data.doc_List=[];
            
            datas.forEach((childData)=>{
            
              if((childData.doc_id!==childData.hospital_id)&&(childData.hospital_id===data.hospital_id))
              {
                data.doc_List[data.doc_List.length]=childData;
              }
            });
          }
        else
          data.isHospital=0;
        data.specialisation=data.specialisation.split(",");
        this.setState({ doctor: data});
        
        }

      });
     
    
   
  });
  

}
render()
{
 
const doctor=this.state.doctor;
return(
<div className="container" style={{"marginTop":"5px"}} >
<br/>
	{doctor!==null?
    <CSSTransition
    in={true}
    appear={true}
    timeout={500}
    classNames="fade"
    >
    <Doctor
            doctor={doctor}
            fromList={false}
          />
          </CSSTransition>:null}




</div>


);
}
}

export default App;
