import React , {Component}  from 'react';
import {CSSTransition} from 'react-transition-group';
import Head from './header';
import Foot from './footer';
import './App.css';
import Interview from './interview';
import './normal.css';
import $ from 'jquery';
class App extends Component
{
  constructor(props)
	{
	  super(props);
	  this.state={
      showimage:0,
      sent:-1,
      validPhone:-1
    }
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
    {  $.post("https://bigobackend.herokuapp.com/appLink",{phone:document.getElementById("ph_no").value},function(data,status)
    {
      if(data.sent===1)
    pointer.setState({sent:1});
    else
    pointer.setState({sent:0});})}
  }
render()
{
return(
    <div><Head home={true} list={false} about={false}/>
  <div id="wrapper">
    
    <section id="intro" className="intro">
      <div className="intro-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="wow fadeInDown" data-wow-offset={0} data-wow-delay="0.1s">
                <h2 className="h-ultra">BigOHealth</h2>
              </div>
              <div className="wow fadeInUp" data-wow-offset={0} data-wow-delay="0.1s">
                <h4 className="h-light">Provide world class <span className="color">healthcare service</span> in tier 2 & 3 cities.</h4>
              </div>
              <div className="well well-trans">
                <div className="wow fadeInRight" data-wow-delay="0.1s">
                  <ul className="lead-list">
                    <li><span className="fa fa-check fa-2x icon-success"></span> <span className="list"><strong>Search Doctor Online</strong><br />Search the best doctors online and get instant appointment.</span></li>
                    <li><span className="fa fa-check fa-2x icon-success"></span> <span className="list"><strong>Book Appointment with your favourite doctor</strong><br />No need to wait in a queue when you can book in a woo..</span></li>
                    <li><span className="fa fa-check fa-2x icon-success"></span> <span className="list"><strong>BigOHealth Device</strong><br />A device for clinics to sync online and walk-in appointments.</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>					
    </section></div>		
  <section id="boxes" className="home-section paddingtop-80">
    <div className="container">
    <div className="text-center"><h1 style={{color: '#0F3299',fontWeight:"bold"}}>How It Works?</h1><br/></div>
      <div className="row">
        <div className="col-sm-3 col-md-3">
          <div className="wow fadeInUp" data-wow-delay="0.2s">
            <div className="box text-center">
              <i className="fa fa-search fa-3x circled bg-skin" />
              <h4 className="h-bold">Search Doctor online</h4>
              <p>
              Download BigOHealth App and search the specialist Doctor for your health problem.</p>
            </div>
          </div>
        </div>
        <div className="col-sm-3 col-md-3">
          <div className="wow fadeInUp" data-wow-delay="0.2s">
            <div className="box text-center">
              <i className="fa fa-list-alt fa-3x circled bg-skin" />
              <h4 className="h-bold">Choose preferable slot</h4>
              <p>
              Fill the patient details and choose the time of consultation as per your convenience.</p>
            </div>
          </div>
        </div>
        <div className="col-sm-3 col-md-3">
          <div className="wow fadeInUp" data-wow-delay="0.2s">
            <div className="box text-center">
              <i className="fa fa-rupee-sign fa-3x circled bg-skin" />
              <h4 className="h-bold">Pay consultation fee online</h4>
              <p>
              You can pay the consultation fee through Credit card, Debit card, Netbanking, E-Wallet.</p>
            </div>
          </div>
        </div>
        <div className="col-sm-3 col-md-3">
          <div className="wow fadeInUp" data-wow-delay="0.2s">
            <div className="box text-center">
              <i className="fa fa-calendar-check fa-3x circled bg-skin" />
              <h4 className="h-bold">Book appointment Online</h4>
              <p>
              Now click the book button and get your appointment done.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="callaction" className="home-section paddingtop-40">	
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="callaction bg-gray">
            <div className="row">
              <div className="col-md-8">
                <div className="wow fadeInUp" data-wow-delay="0.1s">
                  <div className="cta-text">
                    <h3>Frustated of being in line to get Appointment with doctors?</h3>
                    <h6><span style={{color: 'red'}}>Note:</span>The BigOHealth App is AD free, we strictly don't collect any of your personal data in background.</h6>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="wow lightSpeedIn" data-wow-delay="0.1s">
                  <div className="cta-btn">
                    <a href="https://play.google.com/store/apps/details?id=info.donationclub.patient" className="btn btn-skin btn-lg">Download BigOHealth App</a>	
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>	
  {/* Section: services */}
  <section id="healthquiz" className="home-section nopadding paddingtop-60">
    <div className="col-sm-12 col-md-12 col-lg-12">
      <div className="wow fadeInLeft" data-wow-delay="0.1s">
        <div className="text-center">
          <h2 style={{color: '#0F3299'}}><b>BigOHealth Quiz</b></h2>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-sm-6 col-md-6">
          <div className="quiz" data-wow-delay="0.2s">
            <div className="well well-trans">
              <div className="wow fadeInRight" data-wow-delay="0.1s">
                <ul className="lead-list">
                  <li><span className="fa fa-check fa-2x icon-success" /> <span className="list"><strong>An initiative towards a better society.</strong></span></li><br />
                  <li><span className="fa fa-check fa-2x icon-success" /> <span className="list"><strong>Be the Healthhero of your school/city/district.</strong></span></li><br />
                  <li><span className="fa fa-check fa-2x icon-success" /> <span className="list"><strong>Participation certificate and a lot of prizes.</strong></span></li><br />
                  <li><span className="fa fa-check fa-2x icon-success" /> <span className="list"><strong>Chance to work with us on Healthcare Projects.</strong></span></li><br />
                  <li><span className="fa fa-check fa-2x icon-success" /> <span className="list"><strong>Conducted on our Android App - BigOHealth free of cost.
                      </strong></span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-6">
          <div className="wow fadeInUp" data-wow-delay="0.2s">
           <center> <img src="img/dummy/imageedit_14_8779470700.png" style={{height: 'auto', width: '180px', marginLeft: '120px', marginBottom: '40px'}} className="img-responsive" alt="" /></center>
          </div>
        </div>
      </div></div></section>
  <section id="app" className="home-section nopadding paddingtop-60">
    <div className="col-sm-12 col-md-12 col-lg-12">
      <div className="wow fadeInLeft" data-wow-delay="0.1s">
        
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-sm-6 col-md-4">
          <div className="wow fadeInUp" data-wow-delay="0.2s">
            <img src="img/dummy/imageedit_11_5423175934.png" style={{height: 'auto', width: window.screen.width>420?'230px':"100%", marginLeft: window.screen.width>420?'100px':"0px", marginBottom: '40px'}} className="img-responsive" alt="" />
          </div>
        </div>
        <div className="col-sm-6 col-md-8">
          <div className="quiz" data-wow-delay="0.2s">
            <div className="well well-trans">
              <div className="wow fadeInRight" data-wow-delay="0.1s">
                <ul className="lead-list">
                <div className="text-center"><br/><br/><br/>
                  <h2 style={{color: '#0F3299'}}><b>Download the BigOHealth App</b></h2>
                </div>
                  <center><span className="list"><strong><h5 style={{fontSize:"15px"}}>No need to be in a queue.Book hassle-free appointment.<br/>Get health tips.Get information about health events in your city.</h5></strong></span></center>
                  
                        <div className="form-group col-md-7 col-md-offset-1" style={{overflow:"hidden"}}>
                                <div className="col-xs-3 col-sm-2" style={{paddingRight:"0px",marginRight:"0px",paddingLeft:"0px",marginLeft:"0px"}}><input id="code" className="form-control" type="text" value={"+91 |"} style={{"borderStyle":"solid none solid solid",borderRadius:"4px 0px 0px 4px",display:"inline-block"}} readOnly/></div>
                                <div className="col-xs-9 col-sm-10"style={{paddingLeft:"0px",marginLeft:"0px",paddingRight:"0px",marginRight:"0px"}}><input type="number" className="form-control col-xs-10" id="ph_no" defaultValue={null} onChange={()=>{this.checkPhone()}} style={{"borderStyle":"solid solid solid none",borderRadius:"0px 4px 4px 0px",display:"inline-block"}} placeholder="Phone Number" name="name"  required = {true}/></div> 
                            </div><div className=" col-md-3"style={{"marginLeft":"0px"}}><span onClick={()=>{this.submit()}} className="btn" style={{"color":"white","backgroundColor":this.state.sent===0?"red":this.state.sent===1?"green":"#0F3299","width":"100%"}}>{this.state.sent===1?"Sent":this.state.sent===0?"Failed":"Get Link"}</span></div>{this.state.validPhone===0?<p className="error" style={{"float":"right",marginRight:"5%"}}>Invalid Phone Number</p>:null}<br/><br/>
                        <center><a href="https://play.google.com/store/apps/details?id=info.donationclub.patient"><img style={{width:"150px",height:"auto"}} src={require("./img/play.jpeg")} alt="play store" /></a></center>
                      
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div></div></section>
      <div id="reviews" className="box" style={{marginBottom:"0px"}}>
        <center><div className="text-center"><h1 style={{color: '#0F3299',fontWeight:"bold"}}>What Our Users Have to Say</h1><br/></div>
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators" style={{bottom:"-10px"}}>
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="item active">
              <p style={{margin:"0px 20% 10px 20%"}}>Very useful app. Earlier we have to be in queue for 4 to 5 hours to get appointment, now we book appointment from home. Thank You BigOHealth Team</p><br/>
              <span style={{padding:"8px",backgroundColor:"#c3c2c4",color:"black",border:"solid",borderColor:"white",borderRadius:"20px"}}><i className="far fa-user"></i> Rakesh Kumar</span>
              <br/>
            </div>

            <div className="item">
              <p style={{margin:"0px 20% 10px 20%"}}>Earlier we have to come early in the morning 4:00 a.m. to get appointment but with the help of BigOHealth we can now book from home.</p><br/>
              <span style={{padding:"8px",backgroundColor:"#c3c2c4",color:"black",border:"solid",borderColor:"white",borderRadius:"20px"}}><i className="far fa-user"></i> Rizwan Alam</span>
              <br/>
            </div>
          
            <div className="item">
              <p style={{margin:"0px 20% 10px 20%"}}>You people are not just saving time but also saving our money earlier we spend whole day and doctor clinic and lost our daily wages. Now it's very simple to get appointment with doctor.</p><br/>
              <span style={{padding:"8px",backgroundColor:"#c3c2c4",color:"black",border:"solid",borderColor:"white",borderRadius:"20px"}}><i className="far fa-user"></i> Rajindra Das</span><br/>
            </div>
          </div>
        </div>
        </center>
      </div><center>
      <div style={{padding:"50px",width:"100%",backgroundColor:"#f0f0f0",color:"black",border:"solid",borderColor:"white",overflow:"hidden"}}>
        <div className="col-sm-4"> <p className="fa fa-2x fa-city" style={{marginBottom:"10px"}}/><br/><p style={{fontSize:"50px",margin:"10px"}}>3</p><span style={{color:"#1DA6FD",fontWeight:"bold",fontSize:"20px"}}>Cities</span></div>
        <div className="col-sm-4"> <p className="fa fa-2x fa-user-md" style={{marginBottom:"5px"}} /><br/><p style={{fontSize:"50px",margin:"10px"}}>100+</p><span style={{color:"#1DA6FD",fontWeight:"bold"}}>Doctors Onboard</span></div> 
        <div className="col-sm-4"><p className="fa fa-2x fa-calendar-check" style={{marginBottom:"5px"}} /> <br/><p style={{fontSize:"50px",margin:"10px",marginTop:"10px"}}>7000+</p><span style={{color:"#1DA6FD",fontWeight:"bold"}}>Appointments Booked</span></div>    
          </div></center>
          <div style={{backgroundColor:"white"}}><br/>
          <center><div className="text-center"><h1 style={{color: '#0F3299',fontWeight:"bold"}}>Our Interviews</h1><br/></div></center>
          <div style={{"overflow":"hidden"}}>
        <Interview/></div></div>
      <div id="achievements" className="box" style={{marginBottom:"0px"}}>
        <center><div className="text-center"><h1 style={{color: '#0F3299',fontWeight:"bold"}}>Our Achievements</h1><br/></div>
        
        <div className="cont1"><img onClick={()=>{this.setState({showimage:1})}} src={require("./img/ach1.jpeg")} alt="Turkey" className="recogImg" style={{height:"200px",maxWidth:"100%"}}/><div className="bottom">Our Co-Founder Gaurav Rajput pitching at Startup Turkey,Instanbul</div> </div>
        {this.state.showimage===1?<div onClick={()=>{this.setState({showimage:0})}}  style={{position:"fixed",top:"0px",left:"0px",backgroundColor:"rgba(0,0,0,0.5)",width:"100%",height:"100%",zIndex:"9999999"}}>
        <span style={{"float": "right",position:"absolute",top:"10px",right:"0px"}} className="far fa-window-close btn"></span>
        <CSSTransition
	                    in={true}
	                    appear={true}
	                    timeout={500}
	                    classNames="pull"><img src={require("./img/ach1.jpeg")} alt="Nexus" className="recogImg" style={{height:window.screen.width>420?"60%":"auto",marginTop:"10%",width:window.screen.width>420?"auto":"80%"}}/></CSSTransition>
        </div>:null}
        <div className="cont1"><img onClick={()=>{this.setState({showimage:2})}} src={require("./img/ach2.jpeg")} alt="graduation seremony" className="recogImg" style={{height:"200px",marginLeft:window.screen.width>420?"10px":"0px",maxWidth:"100%"}}/><div className="bottom">Nexus Graduation Ceremony</div></div>
        {this.state.showimage===2?<div onClick={()=>{this.setState({showimage:0})}}  style={{position:"fixed",top:"0px",left:"0px",backgroundColor:"rgba(0,0,0,0.5)",width:"100%",height:"100%",zIndex:"9999999"}}>
        <span style={{"float": "right",position:"absolute",top:"10px",right:"0px"}} className="far fa-window-close btn"></span>
        <CSSTransition
	                    in={true}
	                    appear={true}
	                    timeout={500}
	                    classNames="pull"><img src={require("./img/ach2.jpeg")} alt="American Center" className="recogImg" style={{height:window.screen.width>420?"60%":"auto",marginTop:"10%",width:window.screen.width>420?"auto":"80%"}}/></CSSTransition>
        </div>:null}
        <div className="cont1"><img onClick={()=>{this.setState({showimage:3})}} src={require("./img/ach3.jpeg")} alt="Certificate" className="recogImg" style={{height:"200px",marginLeft:window.screen.width>420?"10px":"0px",maxWidth:"100%"}}/><div className="bottom">Our Co-Founders receiving graduation certificate from Nexus@American Center.</div></div>
        {this.state.showimage===3?<div onClick={()=>{this.setState({showimage:0})}}  style={{position:"fixed",top:"0px",left:"0px",backgroundColor:"rgba(0,0,0,0.5)",width:"100%",height:"100%",zIndex:"9999999"}}>
        <span style={{"float": "right",position:"absolute",top:"10px",right:"0px"}} className="far fa-window-close btn"></span>
        <CSSTransition
	                    in={true}
	                    appear={true}
	                    timeout={500}
	                    classNames="pull"><img src={require("./img/ach3.jpeg")} alt="Certificate" className="recogImg" style={{height:window.screen.width>420?"60%":"auto",marginTop:"10%",width:window.screen.width>420?"auto":"80%"}}/></CSSTransition>
        </div>:null}
        </center>
      </div>
      <div id="recognitions" className="box">
        <center><div className="text-center"><h1 style={{color: '#0F3299',fontWeight:"bold"}}>Our Recognitions</h1><br/></div>
        <img src={require("./img/nexus.jpg")} style={{maxWidth:"100%"}} alt="Nexus" className="recogImg"/>
        <img src={require("./img/american.jpeg")} style={{maxWidth:"100%"}}  alt="American Center" className="recogImg"/>
        <img src={require("./img/iitpatna.jpeg")} style={{maxWidth:"100%"}} alt="IIT Patna" className="recogImg"/>
        </center>
      </div>
<Foot/>
 </div>

);
}
}

export default App;
