import React  from 'react';
import {CSSTransition} from 'react-transition-group';
import './App.css';
import Book from './book';
import $ from 'jquery';
class Doctor extends React.Component {
constructor(props)
{
  super(props);
  this.state={
    doctor : this.props.doctor,
    fromList: this.props.fromList
  };
}
  componentWillMount(){//setting the minimum date for booking appointment as today and hiding licence//
    
this.setState({
  showlicence : 0,
  showDocList : false

});

  }
  componentDidMount(){//reseting form and making the popup center aligned//
  }
  toggleDocList()
  {
    this.setState({
      showDocList : !this.state.showDocList
    });
  }
  toggleLicence(show){//this function hides and shows the licence of the doctor//
    this.setState({
      showlicence : show
    })
  }
  render() {
    
    //checks that the data recieved is a hospital or not
    return (<div id={this.state.doctor.doc_url}  className="col-xs-12 cont" style={{"position":"relative"}} >
{/*dipslaying data over bootstrap cards    */}

<div className="thumbnail">
<div className="row">
<div className="col-sm-3"><div className="crop" style={{"maxHeight":"250px"}}><img src={this.state.doctor.doc_img_url} alt=""  className="image"/></div></div>
<div className="col-sm-5">
<div className="caption">
<h2 className="txt" style={{marginBottom:"5px"}}>{this.state.doctor.doc_firstname} {this.state.doctor.doc_middlename} {this.state.doctor.doc_lastname}</h2>
<h6 className="txt" style={{marginBottom:"5px"}}>
<span style={{"color":"#1DA6FD"}}>{this.state.doctor.qualification}</span>
</h6>
{this.state.doctor.isHospital===0?
<div>
<span id="ver" onMouseEnter={()=>{this.setState({
      showlicence : 1
    })}} onMouseLeave={()=>{this.setState({
      showlicence : 0
    })}}><img alt="" style={{"width": "20px","height": "20px"," borderRadius": "10px"}} src={"https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678134-sign-check-512.png"}/><span style={{"color":" #cccccc"}}>Verified</span>{this.state.showlicence ?<span id="licence" style={{" borderRadius": "3px", "marginLeft":"5px", "backgroundColor": "#cccccc","color": "black", "padding": "5px"}}>License : {this.state.doctor.license_no}</span>: null}</span>
<p><i className="far fa-star" style={{"padding":"3px"}}></i>{this.state.doctor.experience} Years of Experience</p>
</div>:<h4 style={{"margin":"5px 0px 0px 0px"}}>Departments</h4>}
<div className="row">
{
  this.state.doctor.specialisation.map(skill=>
    <span key={skill} className="skill">{skill}</span>)
}</div> 
<br/>
<p style={{"textDecoration": "underline","cursor": "pointer"}}><a href={this.state.fromList?('#'+this.state.doctor.hospital_url):("/"+this.state.doctor.hospital_url+"$"+this.state.doctor.city)}>{this.state.doctor.hospital}</a></p>

{
  this.state.doctor.from_hospital===1&&this.state.doctor.doc_List.length>0?
                    !this.state.showDocList?
                    <span className="btn" onClick={()=>{this.toggleDocList()}} style={{"backgroundColor":"white","color":"#1DA6FD","borderColor":"#1DA6FD","marginTop":"5px"}}>All Doctors <i className="fas fa-chevron-down"></i></span>
                    :
                    <CSSTransition
                    in={true}
                    appear={true}
                    key={this.state.doctor.doc_id}
                    timeout={500}
                    classNames="drop">{/*these are responsible for effects*/}
                    <div>
                    <span className="btn" onClick={()=>{this.toggleDocList()}} style={{"backgroundColor":"white","color":"#1DA6FD","borderColor":"#1DA6FD","marginTop":"5px"}}>Hide Doctors <i className="fas fa-chevron-up"></i></span>
                    <br/>
                    <br/>
                    <h5>Doctors</h5>
                    {this.state.doctor.doc_List.length>0?this.state.doctor.doc_List.map(doc=>
                    <div key={doc.doc_id}><div style={{"border": "solid","borderColor": "grey","borderWidth": "1px 0px 1px 0px","padding": "0px 0px 5px 0px"}}>
                    <div>
                        <div className="col-md-4"><img alt="Doctor"  src={doc.doc_img_url} style={{"marginTop": "10px","width": "75px","height": "75px","borderRadius": "75px","border": "solid"}}/></div>
                          <div className="col-md-8" style={{"padding": "0px 5px 5px 5px"}}>
                            <h6>{doc.doc_firstname+" "+doc.doc_middlename+" "+doc.doc_lastname}<a href={this.state.fromList?('#'+doc.doc_url):("/"+doc.doc_url+"$"+doc.city)}><i style={{color:"blue"}} className="fas fa-info-circle btn"></i></a></h6>
                            <p>{doc.qualification}<br/>{doc.specialisation}<br/>₹{doc.doc_fee}</p></div>
                        <center ><span style={{"maxWidth":"320px"}}><a href={"/"+doc.doc_url+"$"+doc.city}><span className="btn" style={{"color":"white","backgroundColor":"#5d00ff"}}>Book</span></a>
      </span></center>
                    </div>
                    </div>
                    </div>)
                    :
                    <center>
                      <p style={{"color": "gray"}}>*No doctors list Available*</p>
                    </center>
                    }
                </div></CSSTransition>
                :null
}  
</div>
</div>
<div className="col-sm-4" style={{"marginTop":"10px"}}>
  <p style={{marginBottom:"5px"}}><i className="far fa-thumbs-up"></i>{this.state.doctor.rank}</p>
  <p style={{marginBottom:"5px"}}>
  <span className={this.state.doctor.TotalRatings>0.4?"fa fa-star checked":"fa fa-star"}></span>
  <span className={this.state.doctor.TotalRatings>1.4?"fa fa-star checked":"fa fa-star"}></span>
  <span className={this.state.doctor.TotalRatings>2.4?"fa fa-star checked":"fa fa-star"}></span>
  <span className={this.state.doctor.TotalRatings>3.4?"fa fa-star checked":"fa fa-star"}></span>
  <span className={this.state.doctor.TotalRatings>4.4?"fa fa-star checked":"fa fa-star"}></span>
  </p>
  <p style={{"color":"green"}}><i className="fas fa-rupee-sign"></i>{this.state.doctor.doc_fee}</p>
  <div>
                  <i className="fas fa-map-marker-alt"></i>
                  <span style={{"padding": "10px"}}>
                    {this.state.doctor.address_line1}<br/>
                    {this.state.doctor.address_line2}<br/>
                    {this.state.doctor.city}-{this.props.doctor.pincode}<br/>
                  </span><br/>
                  <br/>
                  <p style={{"color": "gray"}}>Note : Timings may vary slightly depending upon the number of patients and availability of doctor.</p>
                </div>
                <br/>

</div>
</div>
<div style={{"overflow":"hidden","width":"100%"}}>
  <div className="foot" style={{"width":"100%"}}>
  <center>
  <div className="col-md-4  col-sm-3">
  </div>
  <div className="col-md-4  col-sm-3">
  {this.state.fromList?<span className="btn" style={{"color":"black","width":"100%","backgroundColor":"white","borderColor":"black","marginBottom":"5px"}} onClick={()=>{let link="https://sudoshreyas.github.io/"+this.state.doctor.doc_url+"$"+this.state.doctor.city; var $temp = $("<input>");
  $("body").append($temp);
  $temp.val(link).select();
  document.execCommand("copy");
  $temp.remove();document.execCommand("copy");alert("Link to the doctor copied!");}}><i className="fas fa-share-alt"></i> Share</span>:null}
  </div>
  <div className="col-md-4 col-sm-6" >
  <div style={{}}>
  {this.state.fromList?<a href={"/"+this.state.doctor.doc_url+"$"+this.state.doctor.city}><span className="btn" style={{"color":"white","backgroundColor":"#5d00ff","width":"100%"}}>Book</span></a>
      :
      this.state.doctor.book_appt===1?<Book doctor={this.state.doctor.doc_id} style={{}} hospital={this.state.doctor.hospital_id} doc_name={this.state.doctor.doc_firstname+" "+this.state.doctor.doc_middlename+" "+this.state.doctor.doc_lastname} />:<span className="btn disabled" style={{"color":"white","backgroundColor":"#5d00ff","width":"100%"}}>Unavailable</span>}</div></div></center>
  </div>
</div>
</div>

</div>
    );
  }
}

export default Doctor;