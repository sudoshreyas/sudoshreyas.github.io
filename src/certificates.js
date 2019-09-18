import React , {Component}  from 'react';
import {CSSTransition} from 'react-transition-group';
import './App.css';
import Header from './header';
import Foot from './footer';
import './normal.css';
import $ from 'jquery';
class App extends Component
{
    constructor(props){
        super(props);
        this.state={
            url:null,
            input:0,
            msg:null,
            invalid:0
        }
    }
    submit(){
        let code=document.getElementById("code").value;
        let pointer=this;
        if(code!=="")
        {
            
            $.ajax({
                url:"https://bigobackend.herokuapp.com/verifyCert/"+code,
                success:function(data,status,xhr){
            console.log(status);    
            if(xhr.status===200)
                pointer.setState({
                    url:code,
                    input:1
                })
                },
                error:function (xhr, ajaxOptions, thrownError){
                    if(xhr.status===404) {
                        console.clear();
                        pointer.setState({
                            msg:"Certificate Not Found!!!",
                            invalid:1
                        })
                    }}})
            
        }
    }
    render(){
        return(<>
            <Header home={false}/>
            <CSSTransition
              in={true}
              appear={true}
              timeout={500}
              classNames="pull"
              >
            <div className="container" style={{marginTop:"200px"}}>
                <center>
                    <h1 className="headings">Verify Certificates</h1>
                    {this.state.input===0?
                        <div className="form-group col-sm-6 col-md-4 col-sm-offset-3 col-md-offset-4">
                        <input type="text" className="form-control" id="code" placeholder="Certificate Code"/>{this.state.invalid===0?null:<><i className="error" style={{float:"right"}}>{this.state.msg}</i><br/></>}<br/>
                        <center><div className="btn" onClick={()=>{this.submit()}} style={{cursor:"pointer",backgroundColor:"#0F3299",color:"#ffffff"}}>Submit</div></center>
                        </div>:<CSSTransition
                        in={true}
                        appear={true}
                        timeout={500}
                        classNames="pull"
                        ><div>
                        <iframe title="Certificate" src={"https://docs.google.com/gview?url=https://bigobackend.herokuapp.com/verifyCert/"+this.state.url+"&embedded=true"} style={{"width":"100%",height:window.screen.width>420?"590px":"300px"}} frameBorder="0"></iframe></div></CSSTransition>}
                </center><br/>
            </div></CSSTransition><Foot/></>
        )
    }
}


export default App;