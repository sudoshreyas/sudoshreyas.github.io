import $ from 'jquery';
import {CSSTransition} from 'react-transition-group';
import './App.css';
import React , {Component}  from 'react';
import Header from './header';
import Foot from './footer';
class App extends Component
{
	constructor(props)
	{
	  super(props);
	  this.state={
	  	invalid:false
	  };
	}
	verify(){
		let otp=document.getElementById("otp").value;
		if(otp<10000&&otp>-1)
		{
			let pointer=this;
			$.post("https://bigobackend.herokuapp.com/verifyOTP", {
                  phone : this.props.match.params.ph,
                  OTP :otp,
                  role : 1
                },  
                function(data,status) {
                	console.log(data);
                	if(data.opr==="failure")
                	{
                		pointer.setState({
                			invalid:true
                		});
                	}
                	else{
                		localStorage.token=data.token;
                		window.location.href="/";
                	}
                });

		}
	}
	render()
	{
		return(
			<>
		<Header home={false}/>
		<CSSTransition
          in={true}
          appear={true}
          timeout={500}
          classNames="pull"
          ><div className="container-fluid decor_bg" id="content">
            <div className="row">
                <div className="container">
                    <div className="col-lg-4 col-lg-offset-4 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                        <h2 className="headings">Verify</h2>
                        <form  action="signup_script.php" method="POST">
                            <div className="form-group">
                            <label>Phone Number</label>
                                <input value={this.props.match.params.ph} className="form-control" placeholder="Phone Number" name="Ph_no" readOnly/>
                            </div>
                            <div className="form-group">
                            	<label style={{float:"left",width:"30%",padding:"1px",marginTop:"5px"}}>Your OTP :</label>
                                <input type="number" style={{float:"left",width:"50%"}}  min="0000" max="9999" className="form-control" placeholder="OTP" id="otp"  required ={true}/><br/><br/>
                            </div>
                            {this.state.invalid?<p className="error">Invalid OTP</p>:null}                          
                            <div onClick={()=>{this.verify()}}  className="btn btn-primary">Submit</div>

                        </form>
                    </div>
                </div>
            </div>
        </div></CSSTransition><Foot/></>);
	}
}

export default App;