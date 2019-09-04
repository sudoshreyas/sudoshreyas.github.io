import React , {Component}  from 'react';
import {CSSTransition} from 'react-transition-group';
import './App.css';
import Doctor from './doc';
import Header from './header';
import Foot from './footer';
import $ from 'jquery';
class App extends Component
{
constructor(props)
{
  super(props);
  this.state=
  {
   doctor: null,
   para:this.props.match.params.id.split("$")
  };
}

//fetching data from api//

componentWillMount() {
  let pointer=this;
  if(this.state.para.length>1)
  $.post("https://bigobackend.herokuapp.com/doctors", {
                  "language_id":1,
                  "city":pointer.state.para[1]
                },  
                function(datas,status) { 
                  datas=datas.data;
     datas.forEach((data)=>{//analyzing the recieced data setting up hospital lists for hospitals ,getting all the cities etc
     	if(data.doc_url===pointer.state.para[0])
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
        pointer.setState({ doctor: data});
        
        }

      });
     
    
   
  });
  

}
render()
{
 
let doctor=this.state.doctor;
return(
  <>
  
<Header home={false} list={false} about={false}/>
<div className="container" style={{"marginTop":"150px"}} >
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
<Foot/>
</>

);
}
}

export default App;
