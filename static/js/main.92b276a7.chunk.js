(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},30:function(e,t,a){e.exports=a(46)},46:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),o=a(16),c=a.n(o),s=a(13),i=a(12),r=a(2),d=a(3),m=a(5),p=a(4),u=a(6),h=a(7),f=(a(14),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={input:0},a}return Object(u.a)(t,e),Object(d.a)(t,[{key:"componentWillMount",value:function(){this.setState({doctorId:this.props.doctor,Hospital:this.props.hospital,morning:{min:0,max:23},afternoon:{min:24,max:32},night:{min:33,max:47}})}},{key:"tConvert",value:function(e){var t=Number(e.match(/^(\d+)/)[1]),a=Number(e.match(/:(\d+)/)[1]),l=e.match(/\s(.*)$/)[1];"PM"===l&&t<12&&(t+=12),"AM"===l&&12===t&&(t-=12);var n=t.toString(),o=a.toString();return t<10&&(n="0"+n),a<10&&(o="0"+o),n+":"+o}},{key:"finalBook",value:function(e){}},{key:"toggleInput",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,l=new Date;if(t<0)this.setState({input:this.state.input-1});else switch(this.state.input){case 0:var n=new Date;n.setDate(l.getDate()+7);var o=l.getDate(),c=n.getDate(),s=l.getMonth()+1,i=n.getMonth()+1,r=l.getFullYear(),d=n.getFullYear();o<10&&(o="0"+o),s<10&&(s="0"+s),c<10&&(c="0"+c),i<10&&(i="0"+i),this.setState({today:r+"-"+s+"-"+o,maxDate:d+"-"+i+"-"+c,input:1});break;case 1:var m=document.getElementById(this.state.doctorId+this.state.Hospital+"date").value;if(""===m)break;var p=new Date(m),u=Date.UTC(l.getFullYear(),l.getMonth(),l.getDate()),h=Date.UTC(p.getFullYear(),p.getMonth(),p.getDate()),f=Math.floor((h-u)/864e5);if(f>7||f<0)break;fetch("https://www.mocky.io/v2/5d150cf42f0000dac0c4f5c7").then(function(e){return e.json()}).then(function(t){(t=t[0]).slots=t.data.split("");for(var a=47,l=0;l<48;l++)"E"===t.slots[l]&&(a=l-1);e.setState({slots:t.slots,max_online:t.online_max_quantity,Max:a})});var E=["12:00 AM","12:30 AM","01:00 AM","01:30 AM","02:00 AM","02:30 AM","03:00 AM","03:30 AM","04:00 AM","04:30 AM","05:00 AM","05:30 AM","06:00 AM","06:30 AM","07:00 AM","07:30 AM","08:00 AM","08:30 AM","09:00 AM","09:30 AM","10:00 AM","10:30 AM","11:00 AM","11:30 AM","12:00 PM","12:30 PM","01:00 PM","01:30 PM","02:00 PM","02:30 PM","03:00 PM","03:30 PM","04:00 PM","04:30 PM","05:00 PM","05:30 PM","06:00 PM","06:30 PM","07:00 PM","07:30 PM","08:00 PM","08:30 PM","09:00 PM","09:30 PM","10:00 PM","10:30 PM","11:00 PM","11:30 PM"],g=l.getHours()+":"+(l.getMinutes()<10?"0"+l.getMinutes():l.getMinutes())+":"+l.getSeconds(),x=0;if(this.state.today===m)for(var y=0;y<48;y++){if(this.tConvert(E[y])>g){x=y;break}}this.setState({input:2,slotTimings:E,Min:x});break;case 2:this.setState({input:3,min:this.state.Min>t?this.state.Min:t,max:this.state.Max<a?this.state.Max:a});break;case 3:this.finalBook(t),this.setState({input:4})}}},{key:"render",value:function(){var e=this;return n.a.createElement(h.CSSTransition,{in:!0,appear:!0,timeout:500,classNames:"fade"},n.a.createElement("span",{className:"booking row"},0===this.state.input?n.a.createElement("span",{className:"btn",style:{color:"white",backgroundColor:"#1DA6FD",width:"100%"},onClick:function(){e.toggleInput()}},"Book Apointment"):1===this.state.input?n.a.createElement("form",{id:"book",ref:function(t){return e.form=t}},n.a.createElement("span",{style:{float:"left",width:"100%"}},n.a.createElement("label",{style:{float:"left"}},"Enter Date :"),n.a.createElement("br",null)),n.a.createElement("span",{style:{float:"left",width:"80%"}},n.a.createElement("input",{type:"date",onChange:function(){e.toggleInput()},placeholder:"Enter Date",style:{width:"100%"},id:this.state.doctorId+this.state.Hospital+"date",max:this.state.maxDate,min:this.state.today,name:"date",required:!0})),n.a.createElement("span",{className:"btn",style:{color:"white",backgroundColor:"#1DA6FD",float:"right",width:"20%",padding:"2px",borderRadius:"0px 3px 3px 0px"},onClick:function(){e.toggleInput()}},n.a.createElement("i",{className:"fas fa-sign-in-alt"}))):2===this.state.input?n.a.createElement(h.CSSTransition,{in:!0,appear:!0,timeout:500,classNames:"fade"},n.a.createElement("div",null,this.state.Min<=this.state.morning.max&&this.state.Max>=this.state.morning.min?n.a.createElement("span",{className:"btn",style:{color:"#1DA6FD",backgroundColor:"white",width:"100%",marginTop:"3px",borderColor:"#1DA6FD"},onClick:function(){e.toggleInput(e.state.morning.min,e.state.morning.max)}},"Morning"):null,this.state.Min<=this.state.afternoon.max&&this.state.Max>=this.state.afternoon.min?n.a.createElement("span",{className:"btn",style:{color:"#1DA6FD",backgroundColor:"white",width:"100%",marginTop:"3px",borderColor:"#1DA6FD"},onClick:function(){e.toggleInput(e.state.afternoon.min,e.state.afternoon.max)}},"Afternoon"):null,this.state.Min<=this.state.night.max&&this.state.Max>=this.state.night.min?n.a.createElement("span",{className:"btn",style:{color:"#1DA6FD",backgroundColor:"white",width:"100%",marginTop:"3px",borderColor:"#1DA6FD"},onClick:function(){e.toggleInput(e.state.night.min,e.state.night.max)}},"Night"):null,n.a.createElement("span",{className:"btn",style:{color:"black",backgroundColor:"white",width:"100%",marginTop:"3px",borderColor:"black"},onClick:function(){e.toggleInput(-1)}},n.a.createElement("i",{className:"fas fa-chevron-left"})))):3===this.state.input?n.a.createElement("div",{style:{border:"solid",borderRadius:"10px",borderWidth:"1px",borderColor:"#5d00ff",padding:"3px"}},this.state.slotTimings.map(function(t,a){return a>=e.state.min&&a<=e.state.max&&"0"!==e.state.slots[a]?e.state.slots[a]<e.state.max_online||"A"===e.state.slots[a]?n.a.createElement("div",{key:a,className:"col-xs-6 col-sm-4 col-md-4 btn",style:{color:"#1DA6FD",padding:"5px"},onClick:function(){e.toggleInput(a)}},t,"(",e.state.slots[a],")"):n.a.createElement("div",{key:a,className:"col-xs-6 col-sm-4 col-md-4 btn disabled",style:{color:"grey",padding:"5px"}},t,"(full)"):null}),n.a.createElement("span",{className:"btn",style:{color:"black",backgroundColor:"white",width:"100%",marginTop:"3px",borderColor:"black"},onClick:function(){e.toggleInput(-1)}},n.a.createElement("i",{className:"fas fa-chevron-left"}))):n.a.createElement("span",{className:"btn",style:{color:"grey",backgroundColor:"white",width:"100%",marginTop:"3px",borderColor:"grey",cursor:"not-allowed"}},"Booked")))}}]),t}(n.a.Component)),E=a(18),g=a.n(E),x=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={doctor:a.props.doctor,fromList:a.props.fromList},a}return Object(u.a)(t,e),Object(d.a)(t,[{key:"componentWillMount",value:function(){this.setState({showlicence:0,showDocList:!1})}},{key:"componentDidMount",value:function(){}},{key:"toggleDocList",value:function(){this.setState({showDocList:!this.state.showDocList})}},{key:"toggleLicence",value:function(e){this.setState({showlicence:e})}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{id:this.state.doctor.doc_id,className:"col-xs-12 cont",style:{position:"relative"}},n.a.createElement("div",{className:"thumbnail"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-3"},n.a.createElement("div",{className:"crop",style:{maxHeight:"250px"}},n.a.createElement("img",{src:this.state.doctor.doc_img_url,alt:"",className:"image"}))),n.a.createElement("div",{className:"col-sm-5"},n.a.createElement("div",{className:"caption"},n.a.createElement("h2",{className:"txt"},this.state.doctor.doc_firstname," ",this.state.doctor.doc_middlename," ",this.state.doctor.doc_lastname),n.a.createElement("h4",{className:"txt"},n.a.createElement("span",{style:{color:"#1DA6FD"}},this.state.doctor.qualification)),0===this.state.doctor.isHospital?n.a.createElement("div",null,n.a.createElement("span",{id:"ver",onMouseEnter:function(){e.setState({showlicence:1})},onMouseLeave:function(){e.setState({showlicence:0})}},n.a.createElement("img",{alt:"",style:{width:"20px",height:"20px"," borderRadius":"10px"},src:"https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678134-sign-check-512.png"}),n.a.createElement("span",{style:{color:" #cccccc"}},"Verified"),this.state.showlicence?n.a.createElement("span",{id:"licence",style:{" borderRadius":"3px",marginLeft:"5px",backgroundColor:"#cccccc",color:"black",padding:"5px"}},"License : ",this.state.doctor.license_no):null),n.a.createElement("p",null,n.a.createElement("i",{className:"far fa-star",style:{padding:"3px"}}),this.state.doctor.experience," Years of Experience")):n.a.createElement("h4",{style:{margin:"5px 0px 0px 0px"}},"Departments"),n.a.createElement("div",{className:"row"},this.state.doctor.specialisation.map(function(e){return n.a.createElement("span",{key:e,className:"skill"},e)})),n.a.createElement("br",null),n.a.createElement("p",{style:{textDecoration:"underline",cursor:"pointer"}},n.a.createElement("a",{href:this.state.fromList?"#"+this.state.doctor.hospital_id:"/doctor/"+this.state.doctor.hospital_id},this.state.doctor.hospital)),1===this.state.doctor.from_hospital?this.state.showDocList?n.a.createElement(h.CSSTransition,{in:!0,appear:!0,key:this.state.doctor.doc_id,timeout:500,classNames:"drop"},n.a.createElement("div",null,n.a.createElement("span",{className:"btn",onClick:function(){e.toggleDocList()},style:{backgroundColor:"white",color:"#1DA6FD",borderColor:"#1DA6FD",marginTop:"5px"}},"Hide Doctors ",n.a.createElement("i",{className:"fas fa-chevron-up"})),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("h5",null,"Doctors"),this.state.doctor.doc_List.length>0?this.state.doctor.doc_List.map(function(t){return n.a.createElement("div",{key:t.doc_id},n.a.createElement("div",{style:{border:"solid",borderColor:"grey",borderWidth:"1px 0px 1px 0px",padding:"0px 0px 5px 0px"}},n.a.createElement("div",null,n.a.createElement("div",{className:"col-md-4"},n.a.createElement("img",{alt:"Doctor",src:t.doc_img_url,style:{marginTop:"10px",width:"75px",height:"75px",borderRadius:"75px",border:"solid"}})),n.a.createElement("div",{className:"col-md-8",style:{padding:"0px 5px 5px 5px"}},n.a.createElement("h6",null,t.doc_firstname+" "+t.doc_middlename+" "+t.doc_lastname,n.a.createElement("a",{href:e.state.fromList?"#"+t.doc_id:"/doctor/"+t.doc_id},n.a.createElement("i",{className:"fas fa-info-circle btn"}))),n.a.createElement("p",null,t.qualification,n.a.createElement("br",null),t.specialisation,n.a.createElement("br",null),"\u20b9",t.doc_fee)),n.a.createElement("center",null,n.a.createElement("span",{style:{maxWidth:"320px"}},n.a.createElement("a",{href:"/#/doctor/"+t.doc_id},n.a.createElement("span",{className:"btn",style:{color:"white",backgroundColor:"#5d00ff"}},"Book")))))))}):n.a.createElement("center",null,n.a.createElement("p",{style:{color:"gray"}},"*No doctors list Available*")))):n.a.createElement("span",{className:"btn",onClick:function(){e.toggleDocList()},style:{backgroundColor:"white",color:"#1DA6FD",borderColor:"#1DA6FD",marginTop:"5px"}},"All Doctors ",n.a.createElement("i",{className:"fas fa-chevron-down"})):null)),n.a.createElement("div",{className:"col-sm-4",style:{marginTop:"10px"}},n.a.createElement("p",null,n.a.createElement("i",{className:"far fa-thumbs-up"}),this.state.doctor.rank),n.a.createElement("p",{style:{color:"green"}},n.a.createElement("i",{className:"fas fa-rupee-sign"}),this.state.doctor.doc_fee),n.a.createElement("div",null,n.a.createElement("i",{className:"fas fa-map-marker-alt"}),n.a.createElement("span",{style:{padding:"10px"}},this.state.doctor.address_line1,n.a.createElement("br",null),this.state.doctor.address_line2,n.a.createElement("br",null),this.state.doctor.city,"-",this.props.doctor.pincode,n.a.createElement("br",null)),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("p",{style:{color:"gray"}},"Note : Timings may vary slightly depending upon the number of patients and availability of doctor.")),n.a.createElement("br",null),n.a.createElement("p",{style:{color:"#800080"}},"*No Booking Charges Applied*"))),n.a.createElement("div",{style:{overflow:"hidden",width:"100%"}},n.a.createElement("div",{className:"foot",style:{width:"100%"}},n.a.createElement("center",null,n.a.createElement("div",{className:"col-md-4  col-sm-3"}),n.a.createElement("div",{className:"col-md-4  col-sm-3"},this.state.fromList?n.a.createElement("span",{className:"btn",style:{color:"black",width:"100%",backgroundColor:"white",borderColor:"black",marginBottom:"5px"},onClick:function(){var t="http://localhost:3000/doctor/"+e.state.doctor.doc_id,a=g()("<input>");g()("body").append(a),a.val(t).select(),document.execCommand("copy"),a.remove(),document.execCommand("copy"),alert("Link to the doctor copied!")}},n.a.createElement("i",{className:"fas fa-share-alt"})," Share"):null),n.a.createElement("div",{className:"col-md-4 col-sm-6"},n.a.createElement("div",{style:{}},this.state.fromList?n.a.createElement("a",{href:"/#/doctor/"+this.state.doctor.doc_id},n.a.createElement("span",{className:"btn",style:{color:"white",backgroundColor:"#5d00ff",width:"100%"}},"Book")):n.a.createElement(f,{doctor:this.state.doctor.doc_id,style:{}}))))))))}}]),t}(n.a.Component),y=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={doctors:[],showPopup:0,showHospital:0,cities:[],currentCity:null!=localStorage.lastCity?localStorage.lastCity:"All"},a}return Object(u.a)(t,e),Object(d.a)(t,[{key:"componentWillMount",value:function(){var e=this,t=new Set;t.add("All"),fetch("https://www.mocky.io/v2/5d1483282f00007405c4f13d").then(function(e){return e.json()}).then(function(a){a.forEach(function(e){1===e.from_hospital?(e.isHospital=1,e.doc_List=[],a.forEach(function(t){t.doc_id!==t.hospital_id&&t.hospital_id===e.hospital_id&&(e.doc_List[e.doc_List.length]=t,t.hospital=e.doc_firstname+" "+e.doc_middlename+" "+e.doc_lastname)})):e.isHospital=0,e.specialisation=e.specialisation.split(","),t.add(e.city)}),e.setState({doctors:a,cities:Array.from(t.values())})})}},{key:"toggleCurrentCity",value:function(e){this.state.currentCity!==e&&this.setState({currentCity:e})}},{key:"togglePopup",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.state.showHospital;0===this.state.showPopup&&(this.setState({popupData:e}),this.setState({showPopup:!this.state.showPopup})),null!==e&&this.setState({popupData:e})}},{key:"onSelected",value:function(){var e=document.getElementById("selectCity"),t=e.options[e.selectedIndex].value;localStorage.setItem("lastCity",t)}},{key:"componentDidMount",value:function(){document.getElementById("selectCity").value=this.state.currentCity}},{key:"render",value:function(){var e=this,t=this.state.doctors;return n.a.createElement("div",{className:"container",style:{marginTop:"5px"}},n.a.createElement("div",{className:"container"},n.a.createElement("div",{style:{backgroundColor:"rgba(0,0,0,0.1)",padding:"10px",maxWidth:"200px",borderRadius:"10px",marginLeft:"15px"}},n.a.createElement("select",{id:"selectCity",className:"form-control",style:{maxWidth:"180px"},onChange:function(){e.onSelected()}},this.state.cities.map(function(t){return n.a.createElement("option",{key:t,value:t,selected:t===e.state.currentCity?"selected":""},t)})))),n.a.createElement("br",null),t.map(function(t){return n.a.createElement("div",{key:t.doc_id},t.city===e.state.currentCity||"All"===e.state.currentCity?n.a.createElement(h.CSSTransition,{in:!0,appear:!0,timeout:500,classNames:"fade"},n.a.createElement(x,{doctor:t,fromList:!0,closePopup:e.togglePopup.bind(e)})):null)}))}}]),t}(l.Component),b=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={doctor:null},a}return Object(u.a)(t,e),Object(d.a)(t,[{key:"componentWillMount",value:function(){var e=this;fetch("https://www.mocky.io/v2/5d1483282f00007405c4f13d").then(function(e){return e.json()}).then(function(t){t.forEach(function(a){a.doc_id===e.props.match.params.id&&(1===a.from_hospital?(a.isHospital=1,a.doc_List=[],t.forEach(function(e){e.doc_id!==e.hospital_id&&e.hospital_id===a.hospital_id&&(a.doc_List[a.doc_List.length]=e)})):a.isHospital=0,a.specialisation=a.specialisation.split(","),e.setState({doctor:a}))})})}},{key:"render",value:function(){var e=this.state.doctor;return n.a.createElement("div",{className:"container",style:{marginTop:"5px"}},n.a.createElement("br",null),null!==e?n.a.createElement(h.CSSTransition,{in:!0,appear:!0,timeout:500,classNames:"fade"},n.a.createElement(x,{doctor:e,fromList:!1})):null)}}]),t}(l.Component),v=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={doctor:a.props.doctor,fromList:a.props.fromList},a}return Object(u.a)(t,e),Object(d.a)(t,[{key:"componentWillMount",value:function(){this.setState({showlicence:1,showDocList:!0,editName:!1,editQualification:!1,editLicense:!1,editExp:!1,editFee:!1,editAddress:!1,editEmail:!1,editPnone:!1,editSkill:!1,changed:!1})}},{key:"componentDidMount",value:function(){var e=this;setInterval(function(){e.save()},1e4),window.addEventListener("beforeunload",function(t){if(e.state.changed)return t.preventDefault(),t.returnValue="There is unsaved data on the page\nAre you sure you want to close?"})}},{key:"save",value:function(){this.state.changed&&(document.getElementById("save").innerHtml="Saving",console.log("api called"),this.setState({changed:!1}))}},{key:"editSpecialization",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.state.doctor.specialisation.length;switch(e){case 0:var a=this.state.doctor;a.specialisation.splice(t,1),this.setState({doctor:a,changed:1});break;case 1:this.setState({editSkill:!0,skill:null,skillIndex:t});break;case 2:this.setState({editSkill:!0,skill:this.state.doctor.specialisation[t],skillIndex:t})}}},{key:"render",value:function(){var e=this;return console.log(this.state),n.a.createElement("div",{id:this.state.doctor.doc_id,className:"container",style:{position:"relative"}},n.a.createElement("div",{className:"thumbnail"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-3"},n.a.createElement("div",{className:"crop",style:{maxHeight:"250px"}},n.a.createElement("img",{src:this.state.doctor.doc_img_url,alt:"",className:"image"}))),n.a.createElement("div",{className:"col-sm-5"},n.a.createElement("div",{className:"caption"},!1===this.state.editName?n.a.createElement("h2",{className:"txt",onClick:function(){e.setState({editName:!0})}},this.state.doctor.doc_firstname+" "+this.state.doctor.doc_middlename+" "+this.state.doctor.doc_lastname," ",n.a.createElement("i",{style:{opacity:"0.5",cursor:"pointer"},className:"fas fa-pencil-alt"})):n.a.createElement("center",{className:"row",style:{marginLeft:"0px",marginRight:"0px",marginTop:"10px"}},n.a.createElement("div",{className:"row"},n.a.createElement("label",{className:"col-md-5 offset-md-2 col-sm-6"},"First Name :"),n.a.createElement("input",{id:"fName",className:"col-md-5 col-sm-6",defaultValue:this.state.doctor.doc_firstname,placeholder:"First Name"})),n.a.createElement("br",null),n.a.createElement("div",{className:"row"},n.a.createElement("label",{className:"col-md-5 offset-md-2 col-sm-6"},"Middle Name :"),n.a.createElement("input",{className:"col-md-5 col-sm-6",id:"mName",defaultValue:this.state.doctor.doc_middlename,placeholder:"Middle Name"})),n.a.createElement("br",null),n.a.createElement("div",{className:"row"},n.a.createElement("label",{className:"col-md-5 offset-md-2 col-sm-6"},"Last Name :"),n.a.createElement("input",{id:"lName",className:"col-md-5 col-sm-6",defaultValue:this.state.doctor.doc_lastname,placeholder:"Last Name"})),n.a.createElement("br",null),n.a.createElement("div",{className:"col-md-2 col-md-offset-10 col-sm-offset-6 col-sm-6 col-xs-12 btn",onClick:function(){var t=e.state.doctor;t.doc_lastname=document.getElementById("lName").value,t.doc_middlename=document.getElementById("mName").value,t.doc_firstname=document.getElementById("fName").value,e.setState({doctor:t,changed:!0,editName:!1})},style:{marginTop:"10px",color:"white",backgroundColor:"#1DA6FD",padding:"2px",borderRadius:"3px 3px 3px 3px"}},n.a.createElement("i",{className:"fas fa-check"}))),this.state.editQualification?n.a.createElement("center",{className:"row",style:{marginLeft:"0px",marginRight:"0px"}},n.a.createElement("label",{style:{float:"left"}},"Qualification :"),n.a.createElement("br",null),n.a.createElement("input",{id:"qualification",className:"col-md-10 col-sm-8",style:{marginTop:"5px",marginBottom:"5px"},defaultValue:this.state.doctor.qualification,placeholder:"Your Qualification"}),n.a.createElement("div",{className:"col-md-2 col-sm-4 col-xs-12 btn",onClick:function(){var t=e.state.doctor;t.qualification=document.getElementById("qualification").value,e.setState({doctor:t,changed:!0,editQualification:!1})},style:{marginTop:"5px",marginBottom:"5px",color:"white",backgroundColor:"#1DA6FD",padding:"2px",borderRadius:"0px 3px 3px 0px"}},n.a.createElement("i",{className:"fas fa-check"}))):n.a.createElement("h4",{className:"txt",onClick:function(){e.setState({editQualification:!0})}},n.a.createElement("span",{style:{color:"#1DA6FD"}},this.state.doctor.qualification," ",n.a.createElement("i",{style:{opacity:"0.5",cursor:"pointer"},className:"fas fa-pencil-alt"}))),0===this.state.doctor.isHospital?n.a.createElement("div",null,n.a.createElement("span",{id:"ver"},n.a.createElement("span",{id:"licence",style:{" borderRadius":"3px",float:"left",backgroundColor:"#cccccc",color:"black",padding:"5px"}},n.a.createElement("label",{style:{marginTop:"2px"}},"License : "),this.state.editLicense?n.a.createElement("center",{className:"row",style:{float:"right",margin:"0px"}},n.a.createElement("input",{type:"number",id:"licenseNo",className:"col-xs-8",defaultValue:this.state.doctor.license_no,placeholder:"License No."}),n.a.createElement("div",{className:"col-xs-4 btn",onClick:function(){if(!isNaN(document.getElementById("licenseNo").value)){var t=e.state.doctor;t.license_no=document.getElementById("licenseNo").value,e.setState({doctor:t,changed:!0,editLicense:!1})}},style:{color:"#1DA6FD",padding:"2px",borderRadius:"0px 3px 3px 0px"}},n.a.createElement("i",{className:"fas fa-check"}))):n.a.createElement("span",{onClick:function(){e.setState({editLicense:!0})}},this.state.doctor.license_no,"  ",n.a.createElement("i",{style:{opacity:"0.5",cursor:"pointer"},className:"fas fa-pencil-alt"})))),n.a.createElement("br",null),n.a.createElement("br",null),this.state.editExp?n.a.createElement("center",{className:"row",style:{margin:"0px"}},n.a.createElement("label",{className:"col-md-4 col-sm-12",style:{marginLeft:"0px",paddingLeft:"0px",textAlign:"left"}},"Experience :"),n.a.createElement("input",{type:"number",id:"Exp",className:"col-sm-6 col-xs-8",defaultValue:this.state.doctor.experience,placeholder:"Experience"}),n.a.createElement("div",{className:"col-sm-2 col-xs-4 btn",onClick:function(){if(!isNaN(document.getElementById("Exp").value)){var t=e.state.doctor;t.experience=document.getElementById("Exp").value,e.setState({doctor:t,changed:!0,editExp:!1})}},style:{color:"white",backgroundColor:"green",padding:"2px",borderRadius:"0px 3px 3px 0px"}},n.a.createElement("i",{className:"fas fa-check"}))):n.a.createElement("p",{onClick:function(){e.setState({editExp:!0})}},n.a.createElement("i",{className:"far fa-star",style:{padding:"3px"}}),this.state.doctor.experience," ",n.a.createElement("i",{style:{opacity:"0.3",cursor:"pointer"},className:"fas fa-pencil-alt"})," Years of Experience")):n.a.createElement("h4",{style:{margin:"5px 0px 0px 0px"}},"Departments"),n.a.createElement("div",{className:"row"},this.state.doctor.specialisation.map(function(t,a){return a!==e.state.skillIndex?n.a.createElement("div",{key:t,className:"skill",style:{padding:"0px"}},n.a.createElement("span",{onClick:function(){e.editSpecialization(2,a)},className:"far fa-edit",style:{cursor:"pointer",padding:"10px",backgroundColor:"green",color:"white",borderRadius:"3px 0px 0px 3px",margin:"-1px"}}),n.a.createElement("span",{style:{padding:"10px"}},t),n.a.createElement("span",{onClick:function(){e.editSpecialization(0,a)},className:"far fa-trash-alt",style:{cursor:"pointer",padding:"10px",backgroundColor:"green",color:"white",borderRadius:"0px 3px 3px 0px",margin:"-1px"}})):null}),this.state.editSkill?n.a.createElement("div",{className:"skill",style:{backgroundColor:"green",color:"black",padding:"0px"}},n.a.createElement("input",{style:{width:"150px",marginLeft:"5px"},defaultValue:this.state.skill,id:"skill"}),n.a.createElement("span",{onClick:function(){var t=e.state.doctor;t.specialisation[e.state.skillIndex]=document.getElementById("skill").value,e.setState({doctor:t,changed:!0,editSkill:!1,skill:null,skillIndex:null})},className:"fas fa-check",style:{cursor:"pointer",padding:"10px",backgroundColor:"green",color:"white",borderRadius:"0px 3px 3px 0px",margin:"-1px"}})):n.a.createElement("div",{onClick:function(){e.editSpecialization(1)},className:"skill",style:{backgroundColor:"green",color:"white",padding:"6px",cursor:"pointer"}},n.a.createElement("i",{className:"fas fa-plus"}))),n.a.createElement("br",null),n.a.createElement("p",{style:{textDecoration:"underline",cursor:"pointer"}},n.a.createElement("a",{href:this.state.fromList?"#"+this.state.doctor.hospital_id:"/doctor/"+this.state.doctor.hospital_id},this.state.doctor.hospital)),1===this.state.doctor.from_hospital?n.a.createElement(h.CSSTransition,{in:!0,appear:!0,key:this.state.doctor.doc_id,timeout:500,classNames:"drop"},n.a.createElement("div",null,n.a.createElement("br",null),n.a.createElement("h5",null,"Doctors"),this.state.doctor.doc_List.length>0?this.state.doctor.doc_List.map(function(t){return n.a.createElement("div",{key:t.doc_id},n.a.createElement("div",{style:{border:"solid",borderColor:"grey",borderWidth:"1px 0px 1px 0px",padding:"0px 0px 5px 0px"}},n.a.createElement("div",null,n.a.createElement("div",{className:"col-md-4"},n.a.createElement("img",{alt:"Doctor",src:t.doc_img_url,style:{marginTop:"10px",width:"75px",height:"75px",borderRadius:"75px",border:"solid"}})),n.a.createElement("div",{className:"col-md-8",style:{padding:"0px 5px 5px 5px"}},n.a.createElement("h6",null,t.doc_firstname+" "+t.doc_middlename+" "+t.doc_lastname,n.a.createElement("a",{href:e.state.fromList?"#"+t.doc_id:"/doctor/"+t.doc_id},n.a.createElement("i",{className:"fas fa-info-circle btn"}))),n.a.createElement("p",null,t.qualification,n.a.createElement("br",null),t.specialisation,n.a.createElement("br",null),"\u20b9",t.doc_fee)),n.a.createElement("center",null,n.a.createElement("span",{style:{maxWidth:"320px"}},n.a.createElement("a",{href:"/doctor/"+t.doc_id},n.a.createElement("span",{className:"btn",style:{color:"white",backgroundColor:"#5d00ff"}},"Book")))))))}):n.a.createElement("center",null,n.a.createElement("p",{style:{color:"gray"}},"*No doctors list Available*")),n.a.createElement("div",{className:"btn",style:{color:"#1DA6FD",padding:"5px",width:"100%"}},n.a.createElement("i",{className:"far fa-plus-square"})," Add Doctor"))):null)),n.a.createElement("div",{className:"col-sm-4",style:{marginTop:"10px"}},n.a.createElement("p",null,n.a.createElement("i",{className:"far fa-thumbs-up"}),this.state.doctor.rank),this.state.editFee?n.a.createElement("center",{className:"row",style:{margin:"0px"}},n.a.createElement("label",{className:" col-sm-2 col-xs-2 "},n.a.createElement("i",{className:"fas fa-rupee-sign"})),n.a.createElement("input",{type:"number",id:"Fee",className:"col-sm-6 col-xs-6 ",defaultValue:this.state.doctor.doc_fee,placeholder:"Your Fee"}),n.a.createElement("div",{className:"col-sm-2 col-xs-4 btn",onClick:function(){if(!isNaN(document.getElementById("Fee").value)){var t=e.state.doctor;t.doc_fee=document.getElementById("Fee").value,e.setState({doctor:t,changed:!0,editFee:!1})}},style:{color:"white",backgroundColor:"green",padding:"2px",borderRadius:"0px 3px 3px 0px"}},n.a.createElement("i",{className:"fas fa-check"}))):n.a.createElement("p",{onClick:function(){e.setState({editFee:!0})},style:{color:"green"}},n.a.createElement("i",{className:"fas fa-rupee-sign"})," ",this.state.doctor.doc_fee," ",n.a.createElement("i",{style:{opacity:"0.3",cursor:"pointer"},className:"fas fa-pencil-alt"})," "),n.a.createElement("div",null,this.state.editAddress?n.a.createElement("div",null,n.a.createElement("label",null,n.a.createElement("i",{className:"fas fa-map-marker-alt"})," Edit Location :"),n.a.createElement("input",{style:{marginTop:"5px"},id:"Add1",className:"col-xs-12 form-control",defaultValue:this.state.doctor.address_line1,placeholder:"Address Line1"}),n.a.createElement("input",{style:{marginTop:"5px"},id:"Add2",className:"col-xs-12 form-control",defaultValue:this.state.doctor.address_line2,placeholder:"Address Line2"}),n.a.createElement("input",{style:{marginTop:"5px"},id:"landMark",className:"col-xs-12 form-control",defaultValue:this.state.doctor.landmark,placeholder:"Landmark"}),n.a.createElement("input",{style:{marginTop:"5px"},id:"city",className:"col-xs-12 form-control",defaultValue:this.state.doctor.city,placeholder:"City"}),n.a.createElement("input",{style:{marginTop:"5px"},type:"number",id:"pincode",className:"col-xs-12 form-control",defaultValue:this.state.doctor.pincode,placeholder:"Pincode"}),n.a.createElement("div",{className:"col-xs-12 form-control btn",onClick:function(){var t=e.state.doctor;t.address_line1=document.getElementById("Add1").value,t.address_line2=document.getElementById("Add2").value,t.landmark=document.getElementById("landMark").value,t.city=document.getElementById("city").value,t.pincode=document.getElementById("pincode").value,e.setState({doctor:t,changed:!0,editAddress:!1})},style:{marginTop:"10px",color:"white",backgroundColor:"#1DA6FD",padding:"2px",borderRadius:"3px 3px 3px 3px"}},n.a.createElement("i",{className:"fas fa-check fa-2x"}))):n.a.createElement("div",{onClick:function(){e.setState({editAddress:!0})}},n.a.createElement("i",{className:"fas fa-map-marker-alt"}),n.a.createElement("span",{style:{padding:"10px"}},this.state.doctor.address_line1,n.a.createElement("br",null),this.state.doctor.address_line2,n.a.createElement("br",null),this.state.doctor.city,"-",this.props.doctor.pincode," ",n.a.createElement("i",{style:{opacity:"0.3",cursor:"pointer"},className:"fas fa-pencil-alt"}),n.a.createElement("br",null))),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",null,n.a.createElement("label",null,"Email : "),this.state.editEmail?n.a.createElement("div",{style:{overflow:"hidden"}},n.a.createElement("br",null),n.a.createElement("input",{type:"email",style:{marginTop:"5px",float:"left",width:"80%"},className:"form-control",id:"email",defaultValue:this.state.doctor.doc_email,placeholder:"Email Id"}),n.a.createElement("div",{className:"btn",onClick:function(){var t=e.state.doctor;t.doc_email=document.getElementById("email").value,e.setState({doctor:t,changed:!0,editEmail:!1})},style:{float:"left",width:"20%",marginTop:"5px",color:"white",backgroundColor:"#1DA6FD",padding:"6px",borderRadius:"5px 5px 5px 5px"}},n.a.createElement("i",{className:"fas fa-check"}))):n.a.createElement("span",{onClick:function(){e.setState({editEmail:!0})}},this.state.doctor.doc_email," ",n.a.createElement("i",{style:{opacity:"0.3",cursor:"pointer"},className:"fas fa-pencil-alt"})))),n.a.createElement("br",null),n.a.createElement("div",{style:{color:"#800080"}},n.a.createElement("label",null,"Phone Number : "),this.state.editPhone?n.a.createElement("div",{style:{overflow:"hidden"}},n.a.createElement("input",{type:"number",style:{marginTop:"5px",float:"left",width:"80%"},className:"form-control",id:"phone",defaultValue:this.state.doctor.doc_phone,placeholder:"Phone Number"}),n.a.createElement("div",{className:"btn",onClick:function(){var t=e.state.doctor;t.doc_phone=document.getElementById("phone").value,e.setState({doctor:t,changed:!0,editPhone:!1})},style:{float:"left",width:"20%",marginTop:"5px",color:"white",backgroundColor:"#1DA6FD",padding:"6px",borderRadius:"5px 5px 5px 5px"}},n.a.createElement("i",{className:"fas fa-check"}))):n.a.createElement("span",{onClick:function(){e.setState({editPhone:!0})}},this.state.doctor.doc_phone," ",n.a.createElement("i",{style:{opacity:"0.3",cursor:"pointer"},className:"fas fa-pencil-alt"})),n.a.createElement("br",null))),n.a.createElement("br",null)),n.a.createElement("div",{style:{overflow:"hidden",width:"100%"}},n.a.createElement("div",{className:"foot",style:{width:"100%"}},n.a.createElement("center",null,n.a.createElement("div",{className:"col-md-8  col-sm-6"}),n.a.createElement("div",{className:"col-md-4 col-sm-6"},n.a.createElement("div",{style:{}},this.state.changed?n.a.createElement("span",{onClick:function(){e.save()},className:"btn",id:"save",style:{color:"white",backgroundColor:"#5d00ff",width:"100%"}},"Save"):n.a.createElement("span",{className:"btn disabled",id:"save",style:{color:"white",backgroundColor:"#5d00ff",width:"100%"}},"Save"))))))))}}]),t}(n.a.Component),N=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={doctor:null},a}return Object(u.a)(t,e),Object(d.a)(t,[{key:"componentWillMount",value:function(){var e=this;fetch("https://www.mocky.io/v2/5d1483282f00007405c4f13d").then(function(e){return e.json()}).then(function(t){t.forEach(function(a){a.doc_id===localStorage.doc_id&&(1===a.from_hospital?(a.isHospital=1,a.doc_List=[],t.forEach(function(e){e.doc_id!==e.hospital_id&&e.hospital_id===a.hospital_id&&(a.doc_List[a.doc_List.length]=e)})):a.isHospital=0,a.specialisation=a.specialisation.split(","),e.setState({doctor:a}))})})}},{key:"render",value:function(){var e=this.state.doctor;return n.a.createElement("div",{className:"container",style:{marginTop:"5px"}},n.a.createElement("br",null),null!==e?n.a.createElement("div",null,n.a.createElement("h1",{className:"headings"},"My Profile"),n.a.createElement(h.CSSTransition,{in:!0,appear:!0,timeout:500,classNames:"fade"},n.a.createElement(v,{doctor:e,fromList:!1})),n.a.createElement("h1",{className:"headings"},"My Slots"),n.a.createElement("br",null),n.a.createElement("h1",{className:"headings"},"My History"),n.a.createElement("br",null),n.a.createElement("h1",{className:"headings"},"My Review"),n.a.createElement("br",null)):n.a.createElement("h1",null,"You Are Not Authorized To View This Page"))}}]),t}(l.Component),k=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={data:[]},a}return Object(u.a)(t,e),Object(d.a)(t,[{key:"componentWillMount",value:function(){}},{key:"render",value:function(){return n.a.createElement("div",{className:"container"},n.a.createElement(s.b,{basename:"/"},"   ",n.a.createElement("div",null,n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement(s.c,{to:"/"},"Home")),n.a.createElement("li",null,n.a.createElement(s.c,{to:"/doctor/dashboard"},"dashboard")),n.a.createElement("li",null,n.a.createElement(s.c,{to:"/doctor/:id"},"doctor")),n.a.createElement("li",null,n.a.createElement(s.c,{to:"/doctor_list"},"list"))),n.a.createElement("hr",null),n.a.createElement(i.a,{path:"/doctor/dashboard",component:N}),n.a.createElement(i.a,{path:"/doctor/:id",component:b}),n.a.createElement(i.a,{path:"/doctor_list",component:y}))))}}]),t}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(s.a,{basename:""},n.a.createElement(i.c,null,n.a.createElement(i.a,{path:"/doctor/dashboard",component:N}),n.a.createElement(i.a,{path:"/doctor/:id",component:b}),n.a.createElement(i.a,{path:"/doctor_list",component:y}),n.a.createElement(i.a,{path:"/",component:k}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,1,2]]]);
//# sourceMappingURL=main.92b276a7.chunk.js.map