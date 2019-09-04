import React , {Component}  from 'react';
import {CSSTransition} from 'react-transition-group';
import './App.css';
import Doctor from './doc';
import $ from 'jquery';
import Header from './header';
import Foot from './footer';
class App extends Component
{
constructor(props)
{
  super(props);
  this.state=
  {
   doctors: [],
   showPopup : 0,
   showHospital :0,
   cities : [],
   currentCity : localStorage.lastCity!=null?localStorage.lastCity :null
  };
}

//fetching data from api//

componentWillMount() {
  this.apiCall(this.state.currentCity);
}
apiCall(reqcity){
  let pointer=this;
  $.post("https://bigobackend.herokuapp.com/doctors", {
                  "language_id":1,
                  "city":reqcity
                },  
                function(datas,status) { 
                    console.log(datas);
     datas.data.forEach((data)=>{//analyzing the recieced data setting up hospital lists for hospitals ,getting all the cities etc
        if((data.from_hospital===1))
          {
            data.isHospital=1;
            data.doc_List=[];
            datas.data.forEach((childData)=>{
              if((childData.doc_id!==childData.hospital_id)&&(childData.hospital_id===data.hospital_id))
              {
                data.doc_List[data.doc_List.length]=childData;
                childData.hospital=data.doc_firstname+" "+data.doc_middlename+" "+data.doc_lastname;
                childData.hospital_url=data.doc_url;
              }
            });
          }
        else
          data.isHospital=0;
        data.specialisation=data.specialisation.split(",");
      });
     
    pointer.setState({ doctors: datas.data,
      cities: datas.city,
      currentCity:reqcity});
   
  });
}
toggleCurrentCity(city){//changes the city on click
  if(this.state.currentCity!==city)
  this.apiCall(city);
}

togglePopup(data=null,show=this.state.showHospital) {//manages showing and hidding of data and setups data for the popup
  
  if(this.state.showPopup===0)
    {this.setState({
      popupData : data
    });
    this.setState({
      showPopup: !this.state.showPopup
    });}
    if(data!==null)
    {
      this.setState({
      popupData : data
    });
    }


  }
  onSelected(){
    let selectCity = document.getElementById("selectCity");
    let selectedCity = selectCity.options[selectCity.selectedIndex].value;
    localStorage.setItem('lastCity', selectedCity);
    this.toggleCurrentCity(selectedCity);
  }
  componentDidMount() {
      document.getElementById("selectCity").value=this.state.currentCity;
  }

render()
{
 
const doctors=this.state.doctors;
return(<>
  <Header home={false} list={true} about={false}/>
<div className="container" style={{"marginTop":"200px"}} >
<div className="container" >
<div style={{"backgroundColor":"rgba(0,0,0,0.1)","padding":"10px","maxWidth":"200px","borderRadius":"10px","marginLeft":"15px"}}>
 <select id="selectCity" className="form-control" style={{"maxWidth":"180px"}} onChange={()=>{this.onSelected();}}>
 
{this.state.cities.map(city=><option key={city.city} value={city.city} selected={city.city===this.state.currentCity?"selected":""}>{city.city}</option>)}

</select></div>
</div>
<br/>
{
doctors.map(doct =><div key={doct.doc_id}>{(doct.city === this.state.currentCity||"All" === this.state.currentCity)?
    <CSSTransition
    in={true}
    appear={true}
    timeout={500}
    classNames="fade"
    >
    <Doctor
            doctor={doct}
            fromList={true}
            closePopup={this.togglePopup.bind(this)}
          />
          </CSSTransition>:
null}</div>


  )
}




</div>
<Foot/>
</>

);
}
}

export default App;
