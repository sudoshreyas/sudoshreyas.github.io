import React  from 'react';
import {CSSTransition} from 'react-transition-group';
import './App.css';
class Doctor extends React.Component {
constructor(props)
{
  super(props);
  this.state={
    doctor : this.props.doctor,
    fromList: this.props.fromList
  };
}
  componentWillMount(){//setting the editing of each part to false//
    
this.setState({
  showlicence : 1,
  showDocList : true,
  editName:false,
  editQualification:false,
  editLicense: false,
  editExp:false,
  editFee:false,
  editAddress:false,
  editEmail:false,
  editPnone:false,
  editSkill:false,
  changed:false
});

  }
  componentDidMount(){//setting function to save the changed data in every 10 seconds and preventing tab closing for unsaved data//
    setInterval(() => {
      this.save();
    }, 10000);
    window.addEventListener("beforeunload", (ev) => 
    {  
        
        if(this.state.changed){ev.preventDefault();
        return ev.returnValue = 'There is unsaved data on the page\nAre you sure you want to close?';}
    });
  }
  save(){//this function is responsible for saving the data
    if(this.state.changed)
    {
      document.getElementById("save").innerHtml="Saving";
      console.log("api called");
      this.setState(
        {changed: false});
    }
  }
  editSpecialization(work,index=this.state.doctor.specialisation.length){//this function handles the editing of skills
    switch(work)
    {
      case 0:
        let newDoctor=this.state.doctor;
        newDoctor.specialisation.splice(index,1);
        this.setState({
          doctor:newDoctor,
          changed:1
        });
        break;
      case 1:
        this.setState({
          editSkill:true,
          skill:null,
          skillIndex:index
        });
        break;
      case 2:
        this.setState({
          editSkill:true,
          skill:this.state.doctor.specialisation[index],
          skillIndex:index
        });
        break;
      default: ;
    }
  }
  render() {
    return (
  
    <div id={this.state.doctor.doc_id}  className="container" style={{"position":"relative"}} >
      {/*dipslaying data over bootstrap cards    */}
    
      <div className="thumbnail">
         <div className="row">
            <div className="col-sm-3">
               <div className="crop" style={{"maxHeight":"250px"}}><img src={this.state.doctor.doc_img_url} alt=""  className="image"/></div>
            </div>
            <div className="col-sm-5">
               <div className="caption">
                  {this.state.editName===false?
                  <h2 className="txt" onClick={()=>{this.setState({editName:true})}}>{this.state.doctor.doc_firstname+" "+this.state.doctor.doc_middlename+" "+this.state.doctor.doc_lastname} <i style={{"opacity":"0.5","cursor":"pointer"}} className="fas fa-pencil-alt"></i></h2>
                  :
                  <center className="row" style={{"marginLeft":"0px","marginRight":"0px","marginTop":"10px"}}>
                    <div className="row">
                      <label  className="col-md-5 offset-md-2 col-sm-6">First Name :</label>
                      <input id={"fName"} className="col-md-5 col-sm-6" defaultValue={this.state.doctor.doc_firstname} placeholder="First Name"/>
                    </div>
                    <br/>
                    <div className="row">
                      <label  className="col-md-5 offset-md-2 col-sm-6">Middle Name :</label>
                      <input className="col-md-5 col-sm-6"  id={"mName"} defaultValue={this.state.doctor.doc_middlename} placeholder="Middle Name"/>
                    </div>
                    <br/>
                    <div className="row">
                      <label  className="col-md-5 offset-md-2 col-sm-6">Last Name :</label>
                      <input  id={"lName"} className="col-md-5 col-sm-6" defaultValue={this.state.doctor.doc_lastname} placeholder="Last Name"/>
                    </div>
                    <br/>
                    <div className="col-md-2 col-md-offset-10 col-sm-offset-6 col-sm-6 col-xs-12 btn" onClick={()=>{
                        let newDoctor=this.state.doctor;
                        newDoctor.doc_lastname=document.getElementById("lName").value;
                        newDoctor.doc_middlename=document.getElementById("mName").value;
                        newDoctor.doc_firstname=document.getElementById("fName").value;
                        this.setState({doctor:newDoctor,changed:true,editName:false})}} style={{"marginTop":"10px","color":"white","backgroundColor":"#1DA6FD","padding":"2px","borderRadius":"3px 3px 3px 3px"}}><i className="fas fa-check"></i>
                     </div>
                  </center>
                  }
                  {!this.state.editQualification?
                  <h4 className="txt" onClick={()=>{this.setState({editQualification:true})}}>
                     <span style={{"color":"#1DA6FD"}}>{this.state.doctor.qualification} <i style={{"opacity":"0.5","cursor":"pointer"}}  className="fas fa-pencil-alt"></i></span>
                  </h4>
                  :
                  <center className="row" style={{"marginLeft":"0px","marginRight":"0px"}}>
                     <label style={{"float":"left"}}>Qualification :</label><br/><input id={"qualification"} className="col-md-10 col-sm-8" style={{"marginTop":"5px","marginBottom":"5px"}} defaultValue={this.state.doctor.qualification} placeholder="Your Qualification"/>
                     <div className="col-md-2 col-sm-4 col-xs-12 btn" onClick={()=>{
                        let newDoctor=this.state.doctor;
                        newDoctor.qualification=document.getElementById("qualification").value;
                        this.setState({doctor:newDoctor,changed:true,editQualification:false})}} style={{"marginTop":"5px","marginBottom":"5px","color":"white","backgroundColor":"#1DA6FD","padding":"2px","borderRadius":"0px 3px 3px 0px"}}><i className="fas fa-check"></i>
                     </div>
                  </center>
                  }
                  {this.state.doctor.isHospital===0?
                  <div>
                     <span id="ver">
                        <span id="licence" style={{" borderRadius": "3px","float":"left","backgroundColor": "#cccccc","color": "black", "padding": "5px"}}><label style={{"marginTop":"2px"}}>License : </label>{!this.state.editLicense?<span onClick={()=>{this.setState({editLicense:true})}}>{this.state.doctor.license_no}  <i style={{"opacity":"0.5","cursor":"pointer"}}  className="fas fa-pencil-alt"></i></span>:
                        <center className="row" style={{"float":"right","margin":"0px"}}>
                           <input type="number" id={"licenseNo"} className="col-xs-8" defaultValue={this.state.doctor.license_no} placeholder="License No."/>
                           <div className="col-xs-4 btn" onClick={()=>{
                              if(isNaN(document.getElementById("licenseNo").value))
                              return;
                              let newDoctor=this.state.doctor;
                              newDoctor.license_no=document.getElementById("licenseNo").value;
                              this.setState({doctor:newDoctor,changed:true,editLicense:false})}} style={{"color":"#1DA6FD","padding":"2px","borderRadius":"0px 3px 3px 0px"}}><i className="fas fa-check"></i>
                           </div>
                        </center>
                        }
                     </span>
                     </span>
                     <br/>
                     <br/>
                     {!this.state.editExp?
                     <p onClick={()=>{this.setState({editExp:true})}}><i className="far fa-star" style={{"padding":"3px"}}></i>{this.state.doctor.experience} <i style={{"opacity":"0.3","cursor":"pointer"}} className="fas fa-pencil-alt"></i> Years of Experience</p>
                     :
                     <center className="row" style={{"margin":"0px"}}>
                        <label className="col-md-4 col-sm-12" style={{"marginLeft":"0px","paddingLeft":"0px","textAlign":"left"}}>Experience :</label><input type="number" id={"Exp"} className="col-sm-6 col-xs-8" defaultValue={this.state.doctor.experience} placeholder="Experience"/>
                        <div className="col-sm-2 col-xs-4 btn" onClick={()=>{
                           if(isNaN(document.getElementById("Exp").value))
                           return;
                           else{
                           let newDoctor=this.state.doctor;
                           newDoctor.experience=document.getElementById("Exp").value;
                           this.setState({doctor:newDoctor,changed:true,editExp:false})}}} style={{"color":"white","backgroundColor":"green","padding":"2px","borderRadius":"0px 3px 3px 0px"}}><i className="fas fa-check"></i>
                        </div>
                     </center>
                     }
                  </div>
                  :<h4 style={{"margin":"5px 0px 0px 0px"}}>Departments</h4>}
                  <div className="row">
                     {
                     this.state.doctor.specialisation.map((skill,index)=>
                     index!==this.state.skillIndex?
                     <div key={skill} className="skill" style={{"padding":"0px"}}><span  onClick={()=>{this.editSpecialization(2,index)}} className="far fa-edit" style={{"cursor":"pointer","padding":"10px","backgroundColor":"green","color":"white","borderRadius":"3px 0px 0px 3px","margin":"-1px"}}></span><span style={{"padding":"10px"}}>{skill}</span><span onClick={()=>{this.editSpecialization(0,index)}} className="far fa-trash-alt" style={{"cursor":"pointer","padding":"10px","backgroundColor":"green","color":"white","borderRadius":"0px 3px 3px 0px","margin":"-1px"}}></span></div>
                     :null)
                     }
                     {!this.state.editSkill?
                     <div  onClick={()=>{this.editSpecialization(1)}} className="skill" style={{"backgroundColor":"green","color":"white","padding":"6px","cursor":"pointer"}}><i className="fas fa-plus"></i></div>
                     :
                     <div className="skill" style={{"backgroundColor":"green","color":"black","padding":"0px"}}><input style={{"width":"150px","marginLeft":"5px"}} defaultValue={this.state.skill} id={"skill"}/><span onClick={()=>{
                        let newDoctor=this.state.doctor;
                        newDoctor.specialisation[this.state.skillIndex]=document.getElementById("skill").value;
                        this.setState({
                        doctor:newDoctor,
                        changed:true,
                        editSkill:false,
                        skill:null,
                        skillIndex:null
                        });
                        }} className="fas fa-check" style={{"cursor":"pointer","padding":"10px","backgroundColor":"green","color":"white","borderRadius":"0px 3px 3px 0px","margin":"-1px"}}></span>
                     </div>
                     }
                  </div>
                  <br/>
                  <p style={{"textDecoration": "underline","cursor": "pointer"}}><a href={this.state.fromList?('#'+this.state.doctor.hospital_id):("/doctor/"+this.state.doctor.hospital_id)}>{this.state.doctor.hospital}</a></p>
                  {
                  this.state.doctor.from_hospital===1&&this.state.doctor.doc_List.length>0?
                  <CSSTransition
                     in={true}
                     appear={true}
                     key={this.state.doctor.doc_id}
                     timeout={500}
                     classNames="drop">
                     <div>
                        <br/>
                        <h5>Doctors</h5>
                        {this.state.doctor.doc_List.length>0?this.state.doctor.doc_List.map(doc=>
                        <div key={doc.doc_id}>
                           <div style={{"border": "solid","borderColor": "grey","borderWidth": "1px 0px 1px 0px","padding": "0px 0px 5px 0px"}}>
                           <div>
                              <div className="col-md-4"><img alt="Doctor"  src={doc.doc_img_url} style={{"marginTop": "10px","width": "75px","height": "75px","borderRadius": "75px","border": "solid"}}/></div>
                              <div className="col-md-8" style={{"padding": "0px 5px 5px 5px"}}>
                              <h6>{doc.doc_firstname+" "+doc.doc_middlename+" "+doc.doc_lastname}<a href={this.state.fromList?('#'+doc.doc_id):("/doctor/"+doc.doc_id)}><i className="fas fa-info-circle btn"></i></a></h6>
                              <p>{doc.qualification}<br/>{doc.specialisation}<br/>₹{doc.doc_fee}</p>
                           </div>
                           <center ><span style={{"maxWidth":"320px"}}><a href={"/doctor/"+doc.doc_id}><span className="btn" style={{"color":"white","backgroundColor":"#5d00ff"}}>Book</span></a>
                              </span>
                           </center>
                        </div>
                     </div>
               </div>
               )
               :
               <center>
               <p style={{"color": "gray"}}>*No doctors list Available*</p>
               </center>
               }
               
            </div>
            </CSSTransition>
            :null
            }  
         </div>
      </div>
      <div className="col-sm-4" style={{"marginTop":"10px"}}>
         <p ><i className="far fa-thumbs-up"></i>{this.state.doctor.rank}</p>
         {!this.state.editFee?
         <p onClick={()=>{this.setState({editFee:true})}} style={{"color":"green"}}><i className="fas fa-rupee-sign"></i> {this.state.doctor.doc_fee} <i style={{"opacity":"0.3","cursor":"pointer"}} className="fas fa-pencil-alt"></i> </p>
         :
         <center className="row" style={{"margin":"0px"}}>
            <label className=" col-sm-2 col-xs-2 "><i className="fas fa-rupee-sign"></i></label><input type="number" id={"Fee"} className="col-sm-6 col-xs-6 " defaultValue={this.state.doctor.doc_fee} placeholder="Your Fee"/>
            <div className="col-sm-2 col-xs-4 btn" onClick={()=>{
               if(isNaN(document.getElementById("Fee").value))
               return;
               let newDoctor=this.state.doctor;
               newDoctor.doc_fee=document.getElementById("Fee").value;
               this.setState({doctor:newDoctor,changed:true,editFee:false})}} style={{"color":"white","backgroundColor":"green","padding":"2px","borderRadius":"0px 3px 3px 0px"}}><i className="fas fa-check"></i>
            </div>
         </center>
         }
         <div>
            {!this.state.editAddress?
            <div onClick={()=>{this.setState({editAddress:true})}}><i className="fas fa-map-marker-alt"></i>
               <span style={{"padding": "10px"}}>
               {this.state.doctor.address_line1}<br/>
               {this.state.doctor.address_line2}<br/>
               {this.state.doctor.city}-{this.props.doctor.pincode} <i style={{"opacity":"0.3","cursor":"pointer"}} className="fas fa-pencil-alt"></i><br/>
               </span>
            </div>
            :
            <div>
               <label><i className="fas fa-map-marker-alt"></i> Edit Location :</label>
               <input style={{"marginTop":"5px"}} id={"Add1"} className="col-xs-12 form-control" defaultValue={this.state.doctor.address_line1} placeholder="Address Line1"/>
               <input style={{"marginTop":"5px"}} id={"Add2"} className="col-xs-12 form-control" defaultValue={this.state.doctor.address_line2} placeholder="Address Line2"/>
               <input style={{"marginTop":"5px"}} id={"landMark"} className="col-xs-12 form-control" defaultValue={this.state.doctor.landmark} placeholder="Landmark"/>
               <input style={{"marginTop":"5px"}} id={"city"} className="col-xs-12 form-control" defaultValue={this.state.doctor.city} placeholder="City"/>
               <input style={{"marginTop":"5px"}} type="number" id={"pincode"} className="col-xs-12 form-control" defaultValue={this.state.doctor.pincode} placeholder="Pincode"/>
               <div className="col-xs-12 form-control btn" onClick={()=>{
                  let newDoctor=this.state.doctor;
                  newDoctor.address_line1=document.getElementById("Add1").value;
                  newDoctor.address_line2=document.getElementById("Add2").value;
                  newDoctor.landmark=document.getElementById("landMark").value;
                  newDoctor.city=document.getElementById("city").value;
                  newDoctor.pincode=document.getElementById("pincode").value;
                  this.setState({doctor:newDoctor,changed:true,editAddress:false})}} style={{"marginTop":"10px","color":"white","backgroundColor":"#1DA6FD","padding":"2px","borderRadius":"3px 3px 3px 3px"}}><i className="fas fa-check fa-2x"></i>
               </div>
            </div>
            }
            <br/>
            <br/>
            <div>
               <label>Email : </label>
               {!this.state.editEmail?<span onClick={()=>{this.setState({editEmail:true})}}>{this.state.doctor.doc_email} <i style={{"opacity":"0.3","cursor":"pointer"}} className="fas fa-pencil-alt"></i></span>:
               <div style={{"overflow":"hidden"}}>
                  <br/>
                  <input type="email" style={{"marginTop":"5px","float":"left","width":"80%"}} className="form-control" id={"email"} defaultValue={this.state.doctor.doc_email} placeholder="Email Id"/>
                  <div className="btn" onClick={()=>{
                     let newDoctor=this.state.doctor;
                     newDoctor.doc_email=document.getElementById("email").value;
                     this.setState({doctor:newDoctor,changed:true,editEmail:false})}} style={{"float":"left","width":"20%","marginTop":"5px","color":"white","backgroundColor":"#1DA6FD","padding":"6px","borderRadius":"5px 5px 5px 5px"}}><i className="fas fa-check"></i>
                  </div>
               </div>
               }
            </div>
         </div>
         <br/>
         <div style={{"color":"#800080"}}>
            <label>Phone Number : </label>
            {!this.state.editPhone?<span onClick={()=>{this.setState({editPhone:true})}}>{this.state.doctor.doc_phone} <i style={{"opacity":"0.3","cursor":"pointer"}} className="fas fa-pencil-alt"></i></span>:
            <div style={{"overflow":"hidden"}}>
               <input type="number" style={{"marginTop":"5px","float":"left","width":"80%"}} className="form-control" id={"phone"} defaultValue={this.state.doctor.doc_phone} placeholder="Phone Number"/>
               <div className="btn" onClick={()=>{
                  let newDoctor=this.state.doctor;
                  newDoctor.doc_phone=document.getElementById("phone").value;
                  this.setState({doctor:newDoctor,changed:true,editPhone:false})}} style={{"float":"left","width":"20%","marginTop":"5px","color":"white","backgroundColor":"#1DA6FD","padding":"6px","borderRadius":"5px 5px 5px 5px"}}><i className="fas fa-check"></i>
               </div>
            </div>
            }
            <br/>
         </div>
      </div>
      <br/>
      </div>
      <div style={{"overflow":"hidden","width":"100%"}}>
         <div className="foot" style={{"width":"100%"}}>
            <center>
               <div className="col-md-8  col-sm-6">
               </div>
               <div className="col-md-4 col-sm-6" >
                  <div style={{}}>
                     {this.state.changed?<span onClick={()=>{this.save()}} className="btn" id={"save"} style={{"color":"white","backgroundColor":"#5d00ff","width":"100%"}}>Save</span>:
                     <span className="btn disabled" id={"save"} style={{"color":"white","backgroundColor":"#5d00ff","width":"100%"}}>Save</span>}
                  </div>
               </div>
            </center>
         </div>
      </div>
      </div>
      </div>
    );
  }
}

export default Doctor;