import React , {Component}  from 'react';
import {CSSTransition} from 'react-transition-group';
import './App.css';
import Doctor from './edit';
import Header from './header';
import Foot from './footer';
class App extends Component
{
constructor(props)
{
  super(props);
  this.state=
  {
   doctor: null,
   Appointments : [],
   Histories : [],
   showAppointment:false,
   showHistory :false
  };
}

//fetching data from api//

componentWillMount() {
  fetch('https://www.mocky.io/v2/5d1483282f00007405c4f13d')
  .then(res => res.json())
  .then((datas) => {
     datas.forEach((data)=>{//analyzing the recieced data setting up hospital lists for hospitals ,getting all the cities etc
     	if(data.doc_id===localStorage.doc_id)
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
fetch('https://www.mocky.io/v2/5d25ec762f0000df95c10c22')
  .then(res => res.json())
  .then((Appointments) => {
    console.log(Appointments);
    Appointments.forEach((Appointment)=>{
      Appointment.date=Appointment.date.split('T');
      Appointment.date=Appointment.date[0];
    });

    this.setState({Appointments : Appointments});
  });

fetch('https://www.mocky.io/v2/5d25eed52f00009236c10c3b')
  .then(res => res.json())
  .then((Histories) => {
    console.log(Histories);
    Histories.forEach((History)=>{
      History.date=History.date.split('T');
      History.date=History.date[0];
    });
    
    this.setState({Histories : Histories});
  });
}
render()
{
 
const doctor=this.state.doctor;
return(<>
<Header home={false}/>
<div className="container" style={{"marginTop":"5px"}} >
<br/>
	{doctor!==null?
    <div>
      <h1 className="headings">My Profile</h1>
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
      </CSSTransition>
      
      <div style={{"overflow":"hidden"}}>
        <h1 className="headings">My Appointments</h1><br/>
        
        {this.state.Appointments.map((Appointment,index)=>
          <>{index===0||this.state.Appointments[index].date!==this.state.Appointments[index-1].date?<><br/><div style={{"width":"100%","color":"#00bf93",fontWeight:"bold"}}>Date : {this.state.Appointments[index].date}</div><br/></>:null}
          {this.state.showAppointment===true&&this.state.showAppointmentIndex===index?
          <CSSTransition
          in={true}
          appear={true}
          timeout={500}
          classNames="down"
          >
          <div className="col-md-3 col-sm-6 col-xs-12"  style={{"overflow":"hidden","display":"inline-block",float:"none"}}>
          <div style={{"backgroundColor":"#61d4b3","borderRadius":"5px","padding":"10px","overflow":"hidden","marginBottom":"15px"}}>
          <span style={{cursor:"pointer",float:"right"}} onClick={()=>{this.setState({showAppointment:false})}}><i class="far fa-window-close"></i></span>
          <h4>{Appointment.pat_name}</h4>
          <p>Age : {Appointment.pat_age}<br/>
            Address : {Appointment.pat_address}<br/>
            <span style={{"float":"left","fontWeight":"bold",fontSize:"13px"}}>Status : {Appointment.status===1?<i>Confirmed</i>:<i style={{color:"red"}}>Cancelled</i>}</span>
            <span style={{"float":"right","fontWeight":"bold",fontSize:"13px"}}>Slot {Appointment.slot}</span>
          </p>
          </div>
        </div></CSSTransition>:<CSSTransition
          in={true}
          appear={true}
          timeout={500}
          classNames="down"
          >
        <div className="col-md-3 col-sm-6 col-xs-12" onClick={()=>{this.setState({showAppointment:true,showAppointmentIndex:index})}}  style={{cursor:"pointer","overflow":"hidden","display":"inline-block",float:"none"}}>
          <div style={{"backgroundColor":"#61d4b3","borderRadius":"5px","padding":"10px","overflow":"hidden","marginBottom":"15px"}}>
          <p>{index+1}. Appointment with {Appointment.pat_name}</p>
          <span style={{"float":"left","fontWeight":"bold",fontSize:"13px"}}>Status : {Appointment.status===1?<i>Confirmed</i>:<i style={{color:"red"}}>Cancelled</i>}</span>
          <span style={{"float":"right","fontWeight":"bold",fontSize:"13px"}}>Slot {Appointment.slot}</span>
          </div>
        </div></CSSTransition>
        }</>)}
        
      </div>

      <div style={{"overflow":"hidden"}}>
        <h1 className="headings">My History</h1><br/>
        {this.state.Histories.map((History,index)=>
          History.view_history===1?
          <>{index===0||this.state.Histories[index].date!==this.state.Histories[index-1].date?<><br/><div style={{"width":"100%","color":"#6670b3",fontWeight:"bold"}}>Date : {this.state.Histories[index].date}</div><br/></>:null}
          {this.state.showHistory===true&&this.state.showHistoryIndex===index?
            <CSSTransition
          in={true}
          appear={true}
          timeout={500}
          classNames="down"
          >
          <div className="col-md-3 col-sm-6 col-xs-12" style={{"overflow":"hidden","display":"inline-block",float:"none"}}>
          <div style={{"backgroundColor":"#808ad1","borderRadius":"5px","padding":"10px","overflow":"hidden","marginBottom":"15px"}}>
          <span style={{cursor:"pointer",float:"right"}} onClick={()=>{this.setState({showHistory:false})}}><i class="far fa-window-close"></i></span>
          <h4>{History.pat_name}</h4>
          <p>Age : {History.pat_age}<br/>
            Address : {History.pat_address}<br/>
            <span style={{"float":"left","fontWeight":"bold",fontSize:"13px"}}>Review : {History.submit_review===1?"Recieved":"Not Recieved"}</span>
            <span style={{"float":"right","fontWeight":"bold",fontSize:"13px"}}>Slot {History.slot}</span>
          </p>
          </div></div></CSSTransition>:
          <CSSTransition
          in={true}
          appear={true}
          timeout={500}
          classNames="down"
          >
        <div className="col-md-3 col-sm-6 col-xs-12" onClick={()=>{this.setState({showHistory:true,showHistoryIndex:index})}}  style={{cursor:"pointer","overflow":"hidden","display":"inline-block",float:"none"}}>
          <div style={{"backgroundColor":"#808ad1","borderRadius":"5px","padding":"10px","overflow":"hidden","marginBottom":"15px"}}>
          <p>Appointment with {History.pat_name}</p>
          <span style={{"float":"right","color":"black","fontSize":"12px"}}>Slot {History.slot}</span>
          </div>
        </div></CSSTransition>}

        </>:null)}
      </div>
      <h1 className="headings">My Review</h1><br/>
    </div>:
    <h1>You Are Not Authorized To View This Page</h1>
  }
</div>
<Foot/>
</>

);
}
}

export default App;
