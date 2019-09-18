import React  from 'react';
import {CSSTransition} from 'react-transition-group';
import './App.css';
import Booking from './booking';
//to work with the slots process please make the required changes at the line number 136 and 57
class Book extends React.Component {
  constructor(props)
{
  super(props);
  this.state=
  {
    input : 0
  }
}
  componentWillMount(){//setting the minimum date for booking appointment as today and hiding licence//
    
this.setState({
  doctorId:this.props.doctor,
  Hospital:this.props.hospital,
  doc_name:this.props.doc_name,
  morning:{
    min:0,
    max:23
  },
  afternoon:{
    min:24,
    max:32
  },
  night:{
    min:33,
    max:47
  }
});
  }
  tConvert(time) {
  
  let hours = Number(time.match(/^(\d+)/)[1]);
  let minutes = Number(time.match(/:(\d+)/)[1]);
  let AMPM = time.match(/\s(.*)$/)[1];
  if(AMPM === "PM" && hours<12) hours = hours+12;
  if(AMPM === "AM" && hours===12) hours = hours-12;
  let sHours = hours.toString();
  let sMinutes = minutes.toString();
  if(hours<10) sHours = "0" + sHours;
  if(minutes<10) sMinutes = "0" + sMinutes;
  return(sHours + ":" + sMinutes);
}
finalBook(slot)
{

}
  toggleInput(val1=0,val2=0)
  { 
    let today= new Date();
    if(val1<0)
      this.setState({
        input:this.state.input-3//make 3 to 1 to make slot process work
      });
    else
    switch(this.state.input)
    {
      case 0:
        
        let max_date=new Date();
        max_date.setDate(today.getDate()+7);
        let min_dd = today.getDate(),max_dd=max_date.getDate();
        let min_mm = today.getMonth()+1,max_mm=max_date.getMonth()+1; 
        let min_yyyy = today.getFullYear(),max_yyyy=max_date.getFullYear();
         if(min_dd<10){
                min_dd='0'+min_dd
            } 
            if(min_mm<10){
                min_mm='0'+min_mm
            }
          if(max_dd<10){
                max_dd='0'+max_dd
            } 
            if(max_mm<10){
                max_mm='0'+max_mm
            }
        this.setState({
          today : min_yyyy+'-'+min_mm+'-'+min_dd,
          maxDate: max_yyyy+'-'+max_mm+'-'+max_dd,
          input: 1
        });
      break;
      case 1:
        let reqDate=document.getElementById(this.state.doctorId+this.state.Hospital+"date").value;
        if(reqDate==="")
          break;
        else{
          let checkDate= new Date(reqDate);
          const _MS_PER_DAY = 1000 * 60 * 60 * 24;
          let utc1 = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
          let utc2 = Date.UTC(checkDate.getFullYear(), checkDate.getMonth(), checkDate.getDate());
          let diffDays=Math.floor((utc2 - utc1) / _MS_PER_DAY);
          if(diffDays>7||diffDays<0)
            break;
        }
            fetch('https://www.mocky.io/v2/5d150cf42f0000dac0c4f5c7')
          .then(res => res.json())
          .then((data) => {
            data=data[0];
            data.data="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
            data.slots=data.data.split("");
            let max=47;
            for(let i=0;i<48;i++)
          {
            if(data.slots[i]==='E')
              max=i-1;
          }
            this.setState({
              date:reqDate,
              slots:data.slots,
              max_online:11,
              Max:max});
          });
        let slotTimings=["12:00 AM","12:30 AM","01:00 AM","01:30 AM","02:00 AM","02:30 AM","03:00 AM","03:30 AM","04:00 AM","04:30 AM","05:00 AM","05:30 AM","06:00 AM","06:30 AM","07:00 AM","07:30 AM",
                     "08:00 AM","08:30 AM","09:00 AM","09:30 AM","10:00 AM","10:30 AM","11:00 AM","11:30 AM","12:00 PM","12:30 PM","01:00 PM","01:30 PM","02:00 PM","02:30 PM","03:00 PM","03:30 PM","04:00 PM","04:30 PM","05:00 PM","05:30 PM","06:00 PM","06:30 PM","07:00 PM","07:30 PM",
                     "08:00 PM","08:30 PM","09:00 PM","09:30 PM","10:00 PM","10:30 PM","11:00 PM","11:30 PM"];
        let time = today.getHours() + ":" + (today.getMinutes()<10?"0"+today.getMinutes():today.getMinutes())+ ":" + today.getSeconds();
        let min=0;

        if(this.state.today===reqDate)
        for(let i=0;i<48;i++)
          {
              let str = this.tConvert(slotTimings[i]);
              if(str>time)
              {
                min=i;
                break;
              }
          }
      	
        this.setState({
          input: 4,//change this to 2 to make slots work
          slotTimings:slotTimings,
          Min:min
        });
        break;
      case 2:
        this.setState({
          input: 3,
          min:this.state.Min>val1?this.state.Min:val1,
          max:this.state.Max<val2?this.state.Max:val2,
        });
        break;
      case 3:
        this.finalBook(val1);
        this.setState({
          Time:val1,
          input: 4});
        break;
      case 4:
          this.setState({
            input: 5});
          break;
      default : ;
    }
  }
  back(){
    this.toggleInput(-1);
  }
  render() {
    return(<CSSTransition
    in={true}
    appear={true}
    timeout={500}
    classNames="fade"
    >
    <span className="booking row">
      {this.state.input===0?
      <span className="btn" style={{"color":"white","backgroundColor":"#1DA6FD","width":"100%"}} onClick={()=>{this.toggleInput()}}>Book Apointment</span>
      :
      this.state.input===1?
      <form id={"book"} ref={form => this.form = form}>
      <span style={{"float":"left","width":"100%"}}><label style={{"float":"left"}}>Enter Date :</label><br/></span>
      <span style={{"float":"left","width":"80%"}}><input type="date" onChange={()=>{this.toggleInput()}} placeholder="Enter Date" style={{"width":"100%"}}  id={this.state.doctorId+this.state.Hospital+"date"} max={this.state.maxDate} min={this.state.today} name="date" required={true}/></span>
      <span className="btn" style={{"color":"white","backgroundColor":"#1DA6FD","float":"right","width":"20%","padding":"3.2px","borderRadius":"0px 3px 3px 0px"}} onClick={()=>{this.toggleInput()}}><i className="fas fa-angle-right"></i></span>
      </form>:
      this.state.input===2?
      <CSSTransition
      in={true}
      appear={true}
      timeout={500}
      classNames="fade"
      >
      <div>
          {this.state.Min<=this.state.morning.max&&this.state.Max>=this.state.morning.min?<span className="btn" style={{"color":"#1DA6FD","backgroundColor":"white","width":"100%","marginTop":"3px","borderColor":"#1DA6FD"}} onClick={()=>{this.toggleInput(this.state.morning.min,this.state.morning.max)}}>Morning</span>:null}
          {this.state.Min<=this.state.afternoon.max&&this.state.Max>=this.state.afternoon.min?<span className="btn" style={{"color":"#1DA6FD","backgroundColor":"white","width":"100%","marginTop":"3px","borderColor":"#1DA6FD"}} onClick={()=>{this.toggleInput(this.state.afternoon.min,this.state.afternoon.max)}}>Afternoon</span>:null}
          {this.state.Min<=this.state.night.max&&this.state.Max>=this.state.night.min?<span className="btn" style={{"color":"#1DA6FD","backgroundColor":"white","width":"100%","marginTop":"3px","borderColor":"#1DA6FD"}} onClick={()=>{this.toggleInput(this.state.night.min,this.state.night.max)}}>Night</span>:null}
          <span className="btn" style={{"color":"black","backgroundColor":"white","width":"100%","marginTop":"3px","borderColor":"black"}} onClick={()=>{this.toggleInput(-1)}}><i className="fas fa-chevron-left"></i></span>
      </div></CSSTransition>:
      this.state.input===3?
      <div style={{"border":"solid","borderRadius":"10px","borderWidth":"1px","borderColor":"#5d00ff","padding":"3px"}}>
      {this.state.slotTimings.map((time,index)=>
        index>=this.state.min&&index<=this.state.max&&this.state.slots[index]!=='0'?(this.state.slots[index]<this.state.max_online || this.state.slots[index]==='A')?
        <div key={index} className="col-xs-6 col-sm-4 col-md-4 btn" style={{"color":"#1DA6FD","padding":"5px"}} onClick={()=>{this.toggleInput(this.state.slotTimings[index])}}>{time}{isNaN(this.state.slots[index])?null:<>({this.state.slots[index]})</>}</div>
        :<div key={index} className="col-xs-6 col-sm-4 col-md-4 btn disabled" style={{"color":"grey","padding":"5px"}}>{time}(full)</div>
        :null
      )
      }<span className="btn" style={{"color":"black","backgroundColor":"white","width":"100%","marginTop":"3px","borderColor":"black"}} onClick={()=>{this.toggleInput(-1)}}><i className="fas fa-chevron-left"></i></span>
      </div>:
      this.state.input===4?
      <Booking data={this.state} close={this.back.bind(this)} next={this.toggleInput.bind(this)}/>:
      <span className="btn" style={{"color":"grey","backgroundColor":"white","width":"100%","marginTop":"3px","borderColor":"grey","cursor":"not-allowed"}}>Booked</span>
      }
    </span></CSSTransition>);
  }
}

export default Book;