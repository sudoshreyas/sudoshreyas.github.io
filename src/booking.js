import {CSSTransition} from 'react-transition-group';
import './App.css';
import React , {Component}  from 'react';
class App extends Component
{
	constructor(props)
	{
	  super(props);
	  this.state={
	  	width:"88%",
        validPhone:-1,
        validAge:-1,
        doc_id:this.props.data.doctorId,
        hospitalId: this.props.data.Hospital,
        offline_appoint:0,
        status:0,
        doc_name:this.props.data.doc_name,
        date:this.props.data.date,
        slot:this.props.data.Time
	  };
	}
	
	componentDidMount() {
		this.setState({
			width:document.getElementById("pbody").offsetWidth-document.getElementById("code").offsetWidth-42+"px"
		});
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
    }
    checkAge(){
        let age=document.getElementById("age").value;
        if((age>180||age<0))
        {this.setState({
            validAge:0
        });}
        else{
            this.setState({
                validAge:1
            });
        }
    }
	submit(){
        let name=document.getElementById("name").value;
        let age=document.getElementById("age").value;
        let address=document.getElementById("add").value;
        let ref=document.getElementById("ref").value;
        //let skill=document.getElementById("skill").value;
        if(this.state.validPhone===1&&this.state.validAge===1&&name!==null&&address!==null)
        {
            let data= {
                phone : document.getElementById("ph_no").value,
                doc_id:this.state.doc_id,
                date:this.state.date,
                //slot:this.state.slot,
                offline_appoint:0,
                name:name,
                age:age,
                address:address,
                doc_name:this.state.doc_name,
                referral:ref,
                //specs:skill,
                hospitalId:this.state.hospitalId,
                status:0,
                booking_placed_time:Date()
                };
                let mail='mailto:bigohealth@gmail.com?subject=Booking&body='+JSON.stringify(data);
                window.open(mail);
                this.props.next()
                
        }
        else{
                this.setState({
                        message:"Fill All The Required Feilds Correctly"
                    });
            }
          
	}
	render()
	{
        
		return(
				<div style={{position:"fixed",top:"0px",left:"0px",backgroundColor:"rgba(0,0,0,0.5)",width:"100%",height:"100%",zIndex:"9999999"}}>
            <div className="container-fluid decor_bg" id="login-panel">
                <div className="row">
                    <div className="col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1">
                        <div className="container-fluid decor_bg" id="login-panel">
                        <CSSTransition
	                    in={true}
	                    appear={true}
	                    timeout={500}
	                    classNames="pull">
                         <div className="panel panel-primary" style={{marginTop:"10%",overflow:"auto",maxHeight:"600px"}}>
                             <div className="panel-heading" style={{"overflow":"hidden",marginTop:"-1px"}}>
                                 <h2 style={{"float":"left",display:"inline-block"}}>Booking Form</h2><span style={{"float": "right"}} className="far fa-window-close btn" onClick={this.props.close}></span></div>
                             <div className="panel-body" id="pbody">
                        <form>
                            <div className="form-group">
                            <i className="error" style={{float:"left"}}>*</i>
                                <input type="text" className="form-control" id="name" defaultValue={null} placeholder="Patient's Name" pattern=".{8,}" name="password"  required = {true}/>
                            </div>
                            <div className="form-group" style={{overflow:"hidden"}}><i className="error" style={{float:"left"}}>*</i>
                                <input type="number" className="form-control" id="age" defaultValue={null} placeholder="Age" onChange={()=>{this.checkAge()}} pattern=".{8,}" name="password"  required = {true}/>
                                {this.state.validAge===0?<i className="error" style={{float:"right"}}>Invalid Age<br/></i>:null} 
                            </div>                                                       
                            <div className="form-group" style={{overflow:"hidden"}}><i className="error" style={{float:"left"}}>*</i><br/>
                                <input id="code" className="form-control" type="text" value={"+91 |"} style={{"borderStyle":"solid none solid solid",borderRadius:"4px 0px 0px 4px",width:"10%",minWidth:"32px",paddingLeft:"3px",paddingRight:"3px",float:"left"}} readOnly/>
                                <input type="number" className="form-control" id="ph_no" defaultValue={null} onChange={()=>{this.checkPhone()}} style={{float:"left",width:this.state.width,"borderStyle":"solid solid solid none",borderRadius:"0px 4px 4px 0px"}} placeholder="Phone Number" name="name"  required = {true}/>
                                {this.state.validPhone===0?<i className="error" style={{float:"right"}}>Invalid Phone Number</i>:null}   
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" id="ref" defaultValue={null} placeholder="Refferral Code(Optional)" pattern=".{8,}" name="password"  required = {true}/>
                            </div>
                            {/*<div className="form-group"><i className="error" style={{float:"left"}}>*</i>
                                <input type="text" className="form-control" id="skill" defaultValue={null} placeholder="Specialisation" pattern=".{8,}" name="password"  required = {true}/>
                            </div>*/}
                            <div className="form-group"><i className="error" style={{float:"left"}}>*</i>
                                <input type="text" className="form-control" id="add" defaultValue={null} placeholder="Address" pattern=".{8,}" name="password"  required = {true}/>
                            </div>
                            <div onClick={()=>{this.submit()}} className="btn btn-primary" >Submit</div>
                            <br/>
                            <p className="error">{this.state.message}</p>
                        </form></div><div className="panel-footer"><i className="error">*</i> Marked Fields Are Compulsory</div>
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

export default App;