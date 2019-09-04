import React , {Component}  from 'react';
class App extends Component
{
	render()
	{
		return(
			<nav className="navbar navbar-custom navbar-fixed-top" role="navigation">
                <div className="top-area">
                    <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-6">
                        <p className="bold text-left"> </p>
                        </div>
                        <div className="col-sm-6 col-md-6">
                        <p className="bold text-right">Call us now +91 7065489757</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="container navigation">
                    <div className="navbar-header page-scroll">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
                        <i className="fa fa-bars" />
                    </button>
                    <a className="navbar-brand" href="/">
                        <img src="img/logo.png" alt="" width={100} height={80} />
                    </a>
                    </div> 
                    <div className="collapse navbar-collapse navbar-right navbar-main-collapse">
                    <ul className="nav navbar-nav">
                        <li className={this.props.home?"active":""}><a href={(this.props.home?'':"/")+"#intro"}>Home</a></li>
                        <li className={this.props.list?"active":""}><a href="/doctor_list">Doctors</a></li>
                        <li><a href={(this.props.home?'':"/")+"#healthquiz"}>Health Quiz</a></li>
                        <li className={this.props.about?"active":""}><a href="about">About us</a></li>
                        <li><a href="https://play.google.com/store/apps/details?id=info.donationclub.patient">Download App</a></li>
                    </ul>
                    </div>
                </div>
            </nav>
			);
	}
}


export default App;
