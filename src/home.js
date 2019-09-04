import React , {Component}  from 'react';
import Head from './header';
import Foot from './footer';
import './App.css';
class App extends Component
{

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
                <h4 className="h-light">Provide world class <span className="color">healthcare service</span> for you</h4>
              </div>
              <div className="well well-trans">
                <div className="wow fadeInRight" data-wow-delay="0.1s">
                  <ul className="lead-list">
                    <li><span className="fa fa-check fa-2x icon-success" /> <span className="list"><strong>Search Doctor Online</strong><br />Search the best doctors online and get instant appointment.</span></li>
                    <li><span className="fa fa-check fa-2x icon-success" /> <span className="list"><strong>Book Appointment with your favourite doctor</strong><br />No need to wait in a queue when you can book in a woo..</span></li>
                    <li><span className="fa fa-check fa-2x icon-success" /> <span className="list"><strong>Health Quizes</strong><br />A chance to work with us on healthcare project.</span></li>
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
      <div className="row">
        <div className="col-sm-3 col-md-3">
          <div className="wow fadeInUp" data-wow-delay="0.2s">
            <div className="box text-center">
              <i className="fa fa-search fa-3x circled bg-skin" />
              <h4 className="h-bold">Search Doctor online</h4>
              <p>
                Search the best doctors online and get instant appointment, guaranteed.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-3 col-md-3">
          <div className="wow fadeInUp" data-wow-delay="0.2s">
            <div className="box text-center">
              <i className="fa fa-list-alt fa-3x circled bg-skin" />
              <h4 className="h-bold">Choose your slot</h4>
              <p>
                Choose the time of consultation as per your convenience and get your appointment.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-3 col-md-3">
          <div className="wow fadeInUp" data-wow-delay="0.2s">
            <div className="box text-center">
              <i className="fa fa-user-md fa-3x circled bg-skin" />
              <h4 className="h-bold">Book Appointment</h4>
              <p>
                No need to wait in a queue when you can book in a woo..
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-3 col-md-3">
          <div className="wow fadeInUp" data-wow-delay="0.2s">
            <div className="box text-center">
              <i className="fa fa-hospital-o fa-3x circled bg-skin" />
              <h4 className="h-bold">Book diagnostic test</h4>
              <p>
                Get your test samples collected directly from your home.
              </p>
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
                    <h6><span style={{color: 'red'}}>Note:</span>The BigOHealth App is AD free,just 4MB in size and we strictly don't collect any of your personal data in background.</h6>
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
            <img src="img/dummy/imageedit_14_8779470700.png" style={{height: '500px', width: '250px', marginLeft: '120px', marginBottom: '40px'}} className="img-responsive" alt="" />
          </div>
        </div>
      </div></div></section>
  <section id="app" className="home-section nopadding paddingtop-60">
    <div className="col-sm-12 col-md-12 col-lg-12">
      <div className="wow fadeInLeft" data-wow-delay="0.1s">
        <div className="text-center">
          <h2 style={{color: '#0F3299'}}><b>Download the App</b></h2>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-sm-6 col-md-6">
          <div className="wow fadeInUp" data-wow-delay="0.2s">
            <img src="img/dummy/imageedit_11_5423175934.png" style={{height: '530px', width: '300px', marginLeft: '100px', marginBottom: '40px'}} className="img-responsive" alt="" />
          </div>
        </div>
        <div className="col-sm-6 col-md-6">
          <div className="quiz" data-wow-delay="0.2s">
            <div className="well well-trans">
              <div className="wow fadeInRight" data-wow-delay="0.1s">
                <ul className="lead-list">
                  <li><span className="fa fa-check fa-2x icon-success" /> <span className="list"><strong><h5>No need to be in a queue.</h5></strong></span></li>
                  <li><span className="fa fa-check fa-2x icon-success" /> <span className="list"><strong><h5>Book hassle-free appointment.</h5></strong></span></li>
                  <li><span className="fa fa-check fa-2x icon-success" /> <span className="list"><strong><h5 style={{marginLeft: '30px', marginTop: '-45px'}}>Choose the time of consultation as per your convenience. </h5></strong></span></li>
                  <li><span className="fa fa-check fa-2x icon-success" /> <span className="list"><strong><h5>Get health tips.</h5></strong></span></li>
                  <li><span className="fa fa-check fa-2x icon-success" /> <span className="list"><strong><h5 style={{marginLeft: '30px', marginTop: '-45px'}}>Get information about health events in your city.
                        </h5></strong></span></li>
                  <li><span className="list" style={{marginLeft: '100px'}}><div className="cta-btn">
                        <a href="https://play.google.com/store/apps/details?id=info.donationclub.patient" className="btn btn-skin btn-lg">Download BigOHealth App</a>	
                      </div>
                    </span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div></div></section>
      <div id="recognitions" className="box">
        <center><div className="text-center"><h1 style={{color: '#0F3299',fontWeight:"bold"}}>Our Recognitions</h1><br/></div>
        <img src={require("./img/american.jpeg")} alt="American Center" className="recogImg"/>
        <img src={require("./img/nexus.jpeg")} alt="Nexus" className="recogImg"/>
        <img src={require("./img/iitpatna.jpeg")} alt="IIT Patna" className="recogImg"/>
        </center>
      </div>
<Foot/>
 </div>

);
}
}

export default App;
