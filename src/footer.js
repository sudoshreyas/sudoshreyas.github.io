
import './style.css';
import React , {Component}  from 'react';
class App extends Component
{
	render()
	{
		return(
			<>
             <footer>
    <div className="container">
      <div className="row">
        <div className="col-sm-6 col-md-4">
          <div className="wow fadeInDown" data-wow-delay="0.1s">
            <div className="widget">
              <h5>About</h5>
              <p>
                BigOHealth is a eHealth startup which help you in finding right doctor,booking online appointment,getting health tips,review your history etc. We ensure easy access to many doctors thus creating an experience for both the doctor and patient. 
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4">
          <div className="wow fadeInDown" data-wow-delay="0.1s">
            <div className="widget">
              <h5>Our Office</h5>
              <p>
                E36 Ganesh Nagar Pandav Nagar Complex,Delhi
              </p>
              <ul>
                <li>
                  <span className="fa-stack fa-lg" style={{color: 'white'}}>
                    <i className="fas fa-phone" />
                  </span><p style={{marginLeft: '40px', marginTop: '-35px'}}>+91-7065489757</p>
                </li>
                <li>
                  <span className="fa-stack fa-lg" style={{color: 'white'}}>
                    <i className="fas fa-envelope" />
                  </span><p style={{marginLeft: '40px', marginTop: '-35px'}}> bigohealth@gmail.com</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="wow fadeInDown" data-wow-delay="0.1s">
          <div className="widget">
            <h5>Follow us</h5>
            <ul className="company-social">
              <li><a href="https://www.facebook.com/bigohealth/"><img src="img/facebook (1).png" alt='facebook' style={{color: 'white'}} /></a></li>
              <li><a href="https://www.instagram.com/bigohealth/"><img src="img/instagram (1).png" alt='instagram'/></a></li>
              <li><a href="https://twitter.com/bigohealth1"><img src="img/twitter.png" alt='twiter'/></a></li>
              <li><a href="/#"><img src="img/youtube.png" alt='youtube'/></a></li>
            </ul>
          </div>
        </div>
        <a href="/certificates"><div className="btn" style={{backgroundColor:"rgba(0,0,0,0)",color:"white",border:"solid",borderColor:"white",borderRadius:"20px"}}>Verify Certificates</div></a>
      </div>
    </div>	
    <div className="sub-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="wow fadeInLeft" data-wow-delay="0.1s">
              <div className="text-center">
                <p>©Copyright 2018 - BigOHealth. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>	
      </div>
    </div>
  </footer>
  <a href="#" className="scrollup"><i className="fa fa-angle-up active" /></a>
</>
			);
	}
}


export default App;
