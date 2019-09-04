import React , {Component}  from 'react';
import Head from './header';
import Foot from './footer';
import './style.css';
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
                    <div className="col-lg-12">
                    <div className="wow fadeInDown" data-wow-offset={0} data-wow-delay="0.1s">
                        <h2 className="h-ultra">About us</h2>
                    </div>
                    <div className="wow fadeInUp" data-wow-offset={0} data-wow-delay="0.1s">
                        <h6><span style={{color: 'black'}}>BigOHealth is a healthcare platform which helps you build your digital presence and gain from a simple but powerful solution to grow your practice.
                            Our product will help you manage your practice and take it to the new heights.
                            You will be able to grow your professional network and deliver smart patient care.
                            We pride ourselves for being super focused on the basics - Ease of use, honest pricing, great service, and respect for trust that Doctors place in us.We currently work in tier 2 and tier 3 cities of the country.</span></h6><br /><br />
                        <h2>Our Vision</h2>
                        <h6>To build a strong healthcare platform that responds the need and health challenges of the society</h6>
                        <h2>Our Mission</h2>
                        <h6>1.Extending the role of technology in healthcare<br />
                        2.Developing health awareness and health fundamentals among people.<br />
                        3.Outreach activities will contribute to the overall well being of society.</h6>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
        <div id="team" className="box" style={{backgroundColor:"black",color:"white",borderRadius:"0px"}}>
        <center><h1>Our Team</h1>
        <div className="row"><center>
            <div className="col-sm-6 col-md-4">
                <div className="circleCrop" style={{"width":"250px"}}><img style={{"width":"250px"}} src={"https://www.benq.com/content/dam/b2c/en/knowledge-center/unsure-about-projection-colors,color-gamut,or-wheel/kv-colorpeople-dot-m.jpg"} alt=""  className="image"/></div>
                <br/>
                <h4 className="headings" style={{color:"white",marginBottom:"5px"}}>Name of her</h4>
                <h6>Desgination</h6>
                <p>She is a very good girl.She is a very good girl.She is a very good girl.She is a very good girl.She is a very good girl.She is a very good girl.She is a very good girl.</p>
            </div>
            <div className="col-sm-6 col-md-4">
                <div className="circleCrop" style={{"width":"250px"}}><img style={{"width":"250px"}} src={"https://www.benq.com/content/dam/b2c/en/knowledge-center/unsure-about-projection-colors,color-gamut,or-wheel/kv-colorpeople-dot-m.jpg"} alt=""  className="image"/></div>
                <br/>
                <h4 className="headings" style={{color:"white",marginBottom:"5px"}}>Name of her</h4>
                <h6>Desgination</h6>
                <p>She is a very good girl.She is a very good girl.She is a very good girl.She is a very good girl.She is a very good girl.She is a very good girl.She is a very good girl.</p>
            </div><div className="col-sm-6 col-md-4">
                <div className="circleCrop" style={{"width":"250px"}}><img style={{"width":"250px"}} src={"https://www.benq.com/content/dam/b2c/en/knowledge-center/unsure-about-projection-colors,color-gamut,or-wheel/kv-colorpeople-dot-m.jpg"} alt=""  className="image"/></div>
                <br/>
                <h4 className="headings" style={{color:"white",marginBottom:"5px"}}>Name of her</h4>
                <h6>Desgination</h6>
                <p>She is a very good girl.She is a very good girl.She is a very good girl.She is a very good girl.She is a very good girl.She is a very good girl.She is a very good girl.</p>
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
