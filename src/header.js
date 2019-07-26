
import './App.css';
import React , {Component}  from 'react';
import Login from './login';
import Signup from './signup';
class App extends Component
{
	constructor(props)
	{
	  super(props);
	  this.state=
	  {
	  	showLogin:false,
	  	showSignUp:false
	  }
	}
	toggleLogin()
	{
		this.setState({
			showLogin:!this.state.showLogin
		})
	}
	toggleSignUp()
	{
		this.setState({
			showSignUp:!this.state.showSignUp
		})
	}
	render()
	{
		return(
			<>
				<div className="navbar navbar-default" style={{width:"100%"}}>
					<ul className="nav navbar-nav navbar-right">
						<li onClick={()=>{this.toggleLogin();}}  style={{cursor:"pointer",margin:"5px",borderRadius:"5px",border:"solid",borderWidth:"2px"}}><span style={{fontSize:"17px",padding:"5px 12px 5px 12px",letterSpacing:"2px"}}>Login</span></li>
						<li id="signup" onClick={()=>{this.toggleSignUp();}} onMouseOut={()=>{document.getElementById("signup").style.backgroundColor="black";document.getElementById("sign").style.color="white";}} onMouseOver={()=>{document.getElementById("signup").style.backgroundColor="white";document.getElementById("sign").style.color="black";}}  style={{cursor:"pointer",transition:"all 300ms linear",backgroundColor:"black",margin:"5px 20px 5px 5px",borderRadius:"5px",border:"solid",borderWidth:"2px"}}><span style={{fontSize:"17px",padding:"5px 12px 5px 12px",letterSpacing:"2px",color:"white"}} id="sign">Sign Up</span></li>
					</ul>
				</div>
				{this.state.showLogin?<Login close={this.toggleLogin.bind(this)}/>:null}
				{this.state.showSignUp?<Signup close={this.toggleSignUp.bind(this)}/>:null}

			</>
			);
	}
}


export default App;
