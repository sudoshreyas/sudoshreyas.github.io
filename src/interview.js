import React , {Component}  from 'react';
import {CSSTransition} from 'react-transition-group';
import './App.css';
class App extends Component
{
    constructor(props){
        super(props);
        
        this.state ={
          data : [],
          show:false,
          showThis:0,
          doctor:{}
        }

      }
componentWillMount() {
   
    fetch("https://www.mocky.io/v2/5d7ea2b73300007c00f0add4").then(res=>res.json())
    .then(interview=>{
        let push=this.state.data;
        const key='AIzaSyBG-b1BeuadWaDPuSfBZca64bHuyX6GTd0';
        interview.forEach(view => {
            let link=view.video;
            fetch('https://www.googleapis.com/youtube/v3/videos?part=snippet&id='+link+'&key='+key)
    .then(res => res.json())
          .then((data) => {
              data.items=data.items[0];
              data.doc=view;
              push.push(data);
              this.setState({
                  data:push
              });
          });
        });
    });
}
toggle(data=null){
    if(this.state.show)
    this.setState({show:false});
    else 
    this.setState({show:true,showThis:data});
    
}
render(){
    console.log()
    return(<div>
        
        {
            this.state.show?
            <CSSTransition
	            in={true}
	            appear={true}
	            timeout={500}
	            classNames="pull">
                    <div  style={{position:"fixed",top:"0px",left:"0px",backgroundColor:"rgba(0,0,0,0.5)",width:"100%",height:"100%",zIndex:"9999",overflow:"auto"}}>
                        <div style={{position:"fixed",bottom:"10px",left:"0px",zIndex:"99",backgroundColor:"#efdaf7",padding:"5px"}}>
                            <span style={{display:"inline-block",color:"#0004ff"}}>Was this helpful?
                                <br/>Let us know!!
                            </span>
                            <div className="btn" style={{backgroundColor:"green",color:"white",border:"solid",borderColor:"white",borderRadius:"20px 20px 20px 20px",display:"inline-block"}}><i className="far fa-thumbs-up"></i></div>
                            <div className="btn" style={{backgroundColor:"red",color:"white",border:"solid",borderColor:"white",borderRadius:"20px 20px 20px 20px",display:"inline-block"}}><i className="far fa-thumbs-down"></i></div>
                        </div>
                        <span  onClick={()=>{this.toggle(null)}} style={{"float": "right",position:"absolute",top:"10px",right:"0px",color:"black",zIndex:"99999"}} className="far fa-window-close btn"></span>
                        <div onClick={()=>{}} className="thumbnail"style={{padding:"10px",margin:"0px",overflow:"auto"}}>
                            <div className="col-md-7"><iframe title={this.state.showThis.items.snippet.thumbnails.high.url} style={{width:"100%",height:window.screen.width>1080?"400px":window.screen.width>720?"350px":window.screen.width>420?"190px":"150px"}} src={"https://www.youtube.com/embed/"+this.state.showThis.items.id} alt="thumbnail" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe><br/></div>
                            <div className="col-md-5">
                                <div className="col-md-12 col-sm-6"><div style={{maxHeight:"250px",maxWidth:window.screen.width>1080?"50%":"100%",overflow:"hidden"}}><img src={this.state.showThis.doc.doc_img_url} alt="doctor" style={{width:"100%",height:"auto"}}/></div></div>
                                <div className="col-md-12 col-sm-6">
                                <h2 className="txt" style={{marginBottom:"5px",fontSize:"25px"}}>{this.state.showThis.doc.doc_firstname} {this.state.showThis.doc.doc_middlename} {this.state.showThis.doc.doc_lastname}</h2>
                                <h6 className="txt" style={{marginBottom:"5px",fontSize:"20px"}}>
                                <span style={{"color":"#1DA6FD"}}>Designation : Doctor</span>
                                </h6>
                                <div className="row">
                                    {
                                    this.state.showThis.doc.specialisation.map(skill=>
                                        <span key={skill} className="skill">{skill}</span>)
                                    }
                                </div>
                                <h6 className="txt" style={{marginBottom:"5px",fontSize:"20px",marginTop:"5px"}}>
                                <span style={{"color":"#1DA6FD"}}>City : {this.state.showThis.doc.city}</span>
                                </h6></div>
                            </div>
                            <br/>
                            <div className="col-xs-12" style={{marginTop:"10px",overflow:"hidden"}}>
                            <h3 style={{fontSize:"25px",fontWeight:"bold"}}>{this.state.showThis.items.snippet.title}</h3>
                            <textarea id="des" style={{width:"100%",height:"300px",color:"black",fontWeight:"500",overflow:"auto",border:"none",backgroundColor:"#f4f2f7"}} value={this.state.showThis.items.snippet.localized.description} readOnly></textarea></div><br/><br/><br/>
                        </div>
                    </div>
            </CSSTransition>
            :this.state.data.map((data,index)=>
                <div key={data.id} className={index%5===0?"col-xs-12 col-sm-4 col-md-2 col-md-offset-1":"col-xs-12 col-sm-4 col-md-2"} style={{overflow:"hidden"}}>
                    <div className="cont1" onClick={()=>{this.toggle(data)}} style={{width:"100%"}}>
                        <img src={data.items.snippet.thumbnails.high.url} style={{width:"100%",height:"100%"}} alt="thumbnail" className="recogImg"/><br/>
                        <div className="bottom">{data.items.snippet.title}</div>
                    </div>
                </div>)
        }
    </div>);
}
}


export default App;