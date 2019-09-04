import React , {Component}  from 'react';
import {CSSTransition} from 'react-transition-group';
import './App.css';
import Header from './header';
import Foot from './footer';
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
        if(code!=="")
        {
            fetch("http://www.mocky.io/v2/5d7010eb310000a8d2660a7b").then(res=>res.json())
            .then(data=>{
                if(data.found===1)
                    this.setState({
                        url:data.url,
                        input:1
                    });
                else
                this.setState({
                    msg:"Certificate Not Found!!",
                    invalid:1
                });
            })
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
                        </div>:<iframe title="Certificate" src={"https://docs.google.com/gview?url="+this.state.url+"&embedded=true"} style={{"width":"100%",height:"720px"}} frameBorder="0"></iframe>}
                </center><br/>
            </div></CSSTransition><Foot/></>
        )
    }
}


export default App;