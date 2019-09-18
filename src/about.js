import React , {Component}  from 'react';
import Head from './header';
import Foot from './footer';
import './style.css';
import './normal.css';
class App extends Component
{

render()
{
return(
    <div>
        <Head home={false} list={false} about={true}/>
        <section id="intro" className="intro">
            <div className="intro-content1">
                <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-6">
                    <div className="wow fadeInDown" data-wow-offset={0} data-wow-delay="0.1s">
                        <h2 className="h-ultra">About us</h2>
                    </div>
                    <div className="wow fadeInUp" data-wow-offset={0} data-wow-delay="0.1s">
                        <p style={{marginBottom:"20px"}}><span style={{color: 'black'}}>
                            BigOHealth is a healthcare platform which helps you to build your digital presence and gain from a simple but powerful solution to grow your practice. Our product will help you manage your practice and take it to new heights. You will be able to grow your professional network and deliver smart patient care. We pride ourselves for being super focused on the basics - Ease of use, honest pricing, great service, and respect for trust that Doctors place in us.
<br/><br/>We are focused in tier 2 and tier 3 cities of the country.Our uniqueness is that we have developed a device for doctors and clinics that sync their no. of online and walk-in appointments.
                            </span></p><br />
                            <p>We are supported by Nexus@American center and IIT patna</p>
                        
                    </div>
                    </div>
                    <div className="col-md-6 col-sm-6"><br/>
                        <img src={require("./img/about.jpeg")} alt="About" style={{width:"100%",height:"auto",marginTop:"5px"}}/><br/><br/>
                        
                    </div>
                </div>
                </div>
            </div>
        </section>
        <div id="team" className="box" style={{backgroundColor:"white",color:"black",borderRadius:"0px"}}>
        <center><h1 style={{fontWeight:"bold"}}>Meet The Founders</h1>
        <div className="row"><center>
            <div className="col-sm-6 col-md-4 col-md-offset-2">
                <div className="circleCrop" style={{"width":"200px"}}><img style={{"width":"200px"}} src={require("./img/team1.jpeg")} alt=""  className="image"/></div>
                <br/>
                <h4 className="headings" style={{marginBottom:"5px"}}>Gaurav Rajput</h4>
                <h6>Co-founder</h6><p>Gaurav is a social innovator and entrepreneur, passionate about improving the healthcare sector of india through technology and innovation.He has done B.Tech in computer science background in 2019.</p>
                <a href="https://www.linkedin.com/in/gaurav-rajput-b14192ba"><i className="fab fa-linkedin fa-2x" style={{color:"#0F3299"}}></i></a>
            </div>
            <div className="col-sm-6 col-md-4">
                <div className="circleCrop" style={{"width":"200px"}}><img style={{"width":"200px"}} src={require("./img/team2.jpeg")} alt=""  className="image"/></div>
                <br/>
                <h4 className="headings" style={{marginBottom:"5px"}}>Shubham Shreyas</h4>
                <h6>Co-founder</h6><p>Shubham is a social innovator and entrepreneur passionate about using the power of internet not only to connect people, but to save lives of millions .He has done B.Tech in computer science background in 2019.</p>
                <a href="https://www.linkedin.com/in/shubham-shreyas-07183891"><i className="fab fa-linkedin fa-2x" style={{color:"#0F3299"}}></i></a>
            </div></center>
        </div>
        </center>
        </div>
        <Foot/>
    </div>

);
}
}

export default App;
