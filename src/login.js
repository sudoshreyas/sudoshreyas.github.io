import $ from 'jquery';
import {CSSTransition} from 'react-transition-group';
import './App.css';
import React , {Component}  from 'react';

class Example extends React.Component {
  constructor(props)
	{
	  super(props);
	  this.state={
	  	width:"88%",
	  	validPhone:-1, // to check for the phone number 
	  	validPassword:-1,  // to check for the password 
	  
	  };
  }
  
  
  // to check phonenumber already registered or not left

  componentDidMount() {
		this.setState({
			width:document.getElementById("pbody").offsetWidth-document.getElementById("code").offsetWidth-31+"px"
		});
  }
  
  //validation for phone number

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
  }
  //validation for password pattern

	checkPattern(){
		if(document.getElementById("pass")!=null){
		let password=document.getElementById("pass").value;
		
		if(password.length>7&&password.length<101)
			this.setState({
				validPassword:1
				
			});
		else
			this.setState({
				validPassword:0
			
			});}
	}
    
  
// submit the data

  submit()
  {
   let pointer=this;
		if(this.state.validPhone===1&&this.state.validPassword===1)
			$.post("https://bigobackend.herokuapp.com/login", {
                  phone : document.getElementById("ph_no").value,
                  password : document.getElementById("pass").value,
                  
                  role : 1
                },
	
    function(data,status) {
                	if(data==="No user found")
      {
        pointer.setState({
          message:data
        });
      }
      else if(data.auth===false)
      {
        pointer.setState({
          message:"Invalid Credentials"
        });
      }
      else{
        localStorage.user=JSON.stringify(data);
        window.location.href="/";
      }
    }
    );        
	}





    render() {
      return (
        <div style={{position:"fixed",top:"0px",left:"0px",backgroundColor:"rgba(0,0,0,0.5)",width:"100%",height:"100%",zIndex:"1"}}>
            <div className="container-fluid decor_bg" id="login-panel">
                <div className="row">
                    <div className="col-lg-4 col-lg-offset-4 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                      <div className="container-fluid decor_bg" id="login-panel">
                      <CSSTransition
	                    in={true}
	                    appear={true}
	                    timeout={500}
	                    classNames="pull">
                         <div className="panel panel-primary" style={{marginTop:"20%",overflow:"auto",maxHeight:"60%"}}>
                             <div className="panel-heading" style={{"overflow":"hidden",marginTop:"-1px"}}>
                                 <h2 style={{"float":"left",display:"inline-block"}}>LOGIN</h2><span style={{"float": "right"}} className="far fa-window-close fa-2x btn" onClick={this.props.close}></span></div>
                             <div className="panel-body" id="pbody">
                        <form>
                            <div className="form-group" style={{overflow:"hidden"}}>
                                <input id="code" className="form-control" type="text" value={"+91 |"} style={{"borderStyle":"solid none solid solid",borderRadius:"4px 0px 0px 4px",width:"12%",minWidth:"32px",paddingLeft:"3px",paddingRight:"3px",float:"left"}} readOnly/>
                                <input type="number" className="form-control" id="ph_no" defaultValue={null} onChange={()=>{this.checkPhone()}} style={{float:"left",width:this.state.width,"borderStyle":"solid solid solid none",borderRadius:"0px 4px 4px 0px"}} placeholder="Phone Number" name="name"  required = {true}/>   
                            </div>
                            {this.state.validPhone===0?<p className="error">Invalid Phone Number</p>:null}
                            <div className="form-group">
                                <input type="password" className="form-control" id="pass" defaultValue={null} placeholder="Password" onChange={()=>{this.checkPattern()}} pattern=".{8,}" name="password"  required = {true}/>
                            </div>
                            {this.state.validPassword===0?<p className="error">Invalid Password!!</p>:null}

                            <div onClick={()=>{this.submit()}} className="btn btn-primary" >Submit</div>
                            <br/>
                            <p className="error">{this.state.message}</p>
                        </form>
                        </div>
                        <div className="panel-footer"><p>New user? <i onClick={this.props.sign} style={{"color":"#00aeff",cursor:"pointer"}}>Sign Up</i></p></div>
                        </div>
                      </CSSTransition>
                      </div>
                </div>
            </div>
        </div>
       </div> 

       
      );
    }
  }
  export default Example;