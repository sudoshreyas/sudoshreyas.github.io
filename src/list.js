import React , {Component}  from 'react';
import {CSSTransition} from 'react-transition-group';
import './App.css';
import Doctor from './doc';
import $ from 'jquery';
import Header from './header';
import Foot from './footer';
import './normal.css';
class App extends Component
{
constructor(props)
{
  super(props);
  this.state=
  {
   doctors: [],
   showPopup : 0,
   showHospital :0,
   cities : [],
   currentCityE : localStorage.lastCityE!=null?localStorage.lastCityE :null,
   currentCityH : localStorage.lastCityH!=null?localStorage.lastCityH :null, 
   eng:localStorage.lang!=null?parseInt(localStorage.lang,10):1,
   sent:-1,
   validPhone:-1
  };
}
checkPhone(){
  if(document.getElementById("ph_no")!=null){
  let phone=document.getElementById("ph_no").value/1000000000;
  if(!(phone<10&&phone>5))
    this.setState({
      validPhone:0
    });
  else
    this.setState({
      validPhone:1
    });}
}submit()
{
 let pointer=this;
  if(this.state.validPhone===1&&this.state.sent!==1)
  {
    $.post("https://bigobackend.herokuapp.com/appLink",{phone:document.getElementById("ph_no").value},function(data,status)
    {
      if(data.sent===1)
    pointer.setState({sent:1});
    else
    pointer.setState({sent:0});})
  }
}
//fetching data from api//

componentWillMount() {
  this.apiCall(this.state.eng===1?this.state.currentCityE:this.state.currentCityH,this.state.eng);
}
apiCall(reqcity,lang){
  let pointer=this;
  $.post("https://bigobackend.herokuapp.com/doctors", {
                  "language_id":lang,
                  "city":reqcity
                },  
                function(datas,status) { 
                  if(status!=="success")
                  return;
     datas.data.forEach((data)=>{//analyzing the recieced data setting up hospital lists for hospitals ,getting all the cities etc
      
      if((data.from_hospital===1))
          {
            data.isHospital=1;
            data.doc_List=[];
            datas.data.forEach((childData)=>{
              if((childData.doc_id!==childData.hospital_id)&&(childData.hospital_id===data.hospital_id))
              {
                data.doc_List[data.doc_List.length]=childData;
                childData.hospital=data.doc_firstname+" "+data.doc_middlename+" "+data.doc_lastname;
                childData.hospital_url=data.doc_url;
              }
            });
          }
        else
          data.isHospital=0;
        data.specialisation=data.specialisation.split(",");
      });
     
   pointer.setState({ doctors: datas.data,
    cities: datas.city
  });
  });
}
toggleCurrentCity(city){//changes the city on click
  this.apiCall(city,this.state.eng);
}

togglePopup(data=null,show=this.state.showHospital) {//manages showing and hidding of data and setups data for the popup
  
  if(this.state.showPopup===0)
    {this.setState({
      popupData : data
    });
    this.setState({
      showPopup: !this.state.showPopup
    });}
    if(data!==null)
    {
      this.setState({
      popupData : data
    });
    }


  }
  onSelected(){
    let selectCity = document.getElementById("selectCity");
    let selectedCity = selectCity.options[selectCity.selectedIndex].value;
    if(this.state.eng===1)
    localStorage.setItem('lastCityE', selectedCity);
    else
    localStorage.setItem('lastCityH', selectedCity);
    this.toggleCurrentCity(selectedCity);
  }
  componentDidMount() {
    if(this.state.eng===1)
    {
      document.getElementById("language").checked=true;
    }
  }
toggleData(){
  let lang=this.state.eng===1?2:1
  localStorage.lang=lang;
  this.setState({
    eng:lang
  })
  this.apiCall(lang===1?localStorage.lastCityE:localStorage.lastCityH,lang);
}
render()
{
const doctors=this.state.doctors;
return(<>
  <Header home={false} list={true} about={false} style={{zIndex:"99999"}}/><div style={{width:"100%",backgroundColor:"#f4f2f7",position:"relative",top:"-100px",paddingTop:"100px"}}>
<div className="container" style={{"marginTop":"200px",position:"relative"}} >
<div style={{w:"right"}}>

<div className="container" >

<div style={{"backgroundColor":"rgba(0,0,0,0.1)","padding":"10px",overflow:"hidden","maxWidth":window.screen.width>1080?"73%":"100%","borderRadius":"10px"}}>
 <select id="selectCity" className="form-control" style={{"maxWidth":"180px",float:"left",marginBottom:window.screen.width>420?"0px":"5px"}} onChange={()=>{this.onSelected();}}>
 
{this.state.cities.map(city=><option key={city.city} value={city.city} selected={city.city===(this.state.eng===1?localStorage.lastCityE:localStorage.lastCityH)?"selected":""}>{city.city}</option>)}

</select>
  <div style={{float:"right"}}>
    <h3 style={{"float" : "right","margin":"5px",fontSize:"24px"}}>{this.state.eng===1?"English":
    "अंग्रेज़ी"}</h3>
    <label style={{"float" : "right","margin":"0px 5px 0px 5px",transform:"scale(0.7)"}} className="switch">
      <input onChange={()=>{this.toggleData()}} id="language" type="checkbox" />
      <span className="slider round"></span>
    </label>
    <h3 style={{"float" : "right","margin":"5px",fontSize:"24px"}}>{this.state.eng===1?"Hindi":
    "हिंदी"}</h3>
  </div>
</div></div>
</div>
{
doctors.map(doct =><div key={doct.doc_id+doct.city}>{
    <CSSTransition
    in={true}
    appear={true}
    timeout={500}
    classNames="fade"
    >
    <Doctor
            doctor={doct}
            fromList={true}
            closePopup={this.togglePopup.bind(this)}
          />
          </CSSTransition>}
</div>


  )
}
{window.screen.width>720?<div className="quiz" style={{"position":"sticky",right:"0px",bottom:"0px",top:"50px",width:'25%',float:"right",zIndex:"999"}} data-wow-delay="0.2s">
            <div className="well well-trans">
              <div className="wow fadeInRight" data-wow-delay="0.1s">
                <ul className="lead-list">
                <div className="text-center"><br/>
                  <h2 style={{color: '#0F3299'}}><b>Download the BigOHealth App</b></h2>
                </div>
                  <center><span className="list"><strong><h5 style={{fontSize:"15px"}}>No need to be in a queue.Book hassle-free appointment.<br/>Get health tips.Get information about health events in your city.</h5></strong></span></center>
                  
                        <div className="form-group" style={{overflow:"hidden"}}>
                                <div className="col-xs-3" style={{paddingRight:"0px",marginRight:"0px"}}><input id="code" className="form-control" type="text" value={"+91 |"} style={{"borderStyle":"solid none solid solid",borderRadius:"4px 0px 0px 4px",display:"inline-block"}} readOnly/></div>
                                <div className="col-xs-9"style={{paddingLeft:"0px",marginLeft:"0px"}}><input type="number" className="form-control col-xs-10" id="ph_no" defaultValue={null} onChange={()=>{this.checkPhone()}} style={{"borderStyle":"solid solid solid none",borderRadius:"0px 4px 4px 0px",display:"inline-block"}} placeholder="Phone Number" name="name"  required = {true}/></div> 
                            </div><div className=" col-md-12"><span onClick={()=>{this.submit()}} className="btn" style={{"color":"white","backgroundColor":this.state.sent===0?"red":this.state.sent===1?"green":"#0F3299","width":"100%"}}>{this.state.sent===1?"Sent":this.state.sent===0?"Failed":"Get Link"}</span></div>{this.state.validPhone===0?<p className="error" style={{"float":"right",marginRight:"5%"}}>Invalid Phone Number</p>:null}<br/><br/>
                        <center><a href="https://play.google.com/store/apps/details?id=info.donationclub.patient"><img style={{width:"150px",height:"auto"}} src={require("./img/play.jpeg")} alt="play store" /></a></center>
                      
                </ul>
              </div>
            </div>
          </div>:null}



</div></div>
<Foot/>
</>

);
}
}

export default App;
