import React , {Component}  from 'react';
import {CSSTransition} from 'react-transition-group';
import './App.css';
class App extends Component
{
    constructor(props){
        super(props);
        
        this.state ={
          data : {
            city:null,
            designation:null,
            doc_firstname:null,
            doc_img_url:null,
            doc_lastname:null,
            doc_middlename:null,
            experience:null,
            questions:[],
            specialisation:[]
          }
        }
      }
componentWillMount() {
    fetch('http://www.mocky.io/v2/5d6ebae332000097aaa8aa64')
    .then(res => res.json())
          .then((data) => {
              this.setState({
                  data:data
              })
          });
}
submit(){
    
}
render(){
    return(<div className="container">
        <h1 className="headings">Interview</h1>
            <div className="thumbnail">
            <div className="row">
            <div className="col-sm-3"><div className="crop" style={{"maxHeight":"250px"}}><img src={this.state.data.doc_img_url} alt=""  className="image"/></div></div>
            <div className="col-sm-5">
            <div className="caption">
            <h2 className="" style={{marginBottom:"5px"}}>{this.state.data.doc_firstname} {this.state.data.doc_middlename} {this.state.data.doc_lastname}</h2>
            <h4 className="" style={{marginBottom:"5px"}}>
            <span style={{"color":"#1DA6FD"}}>Designation : {this.state.data.designation}</span>
            </h4>
            <div className="row">
            {
            this.state.data.specialisation.map(skill=>
                <span key={skill} className="skill">{skill}</span>)
            }</div> 
            </div>
            </div>
            <div className="col-sm-4">
                <span style={{"color":"green"}}>Experience : {this.state.data.experience}</span><br/><br/>
                <span style={{"color":"#1DA6FD"}}>City : {this.state.data.city}</span>
            
            </div>
            </div>
            </div>
        <div>
        <h3 className="headings">Instructions</h3>
        <ul>
            <li>Attempt all questions</li>
            <li>All questions 10 marks each</li>
        </ul>
        </div>
        <div>
            <h3 className="headings">Questions</h3>
            {
                this.state.data.questions.map((ques,index)=><CSSTransition
                in={true}
                appear={true}
                timeout={500}
                classNames="down"
                >
                    <div className="box">
                        <p>{(index+1)+"). "+ques.question}</p>
                        {ques.type===1?
                            <><p>{"Answer:"}<br/></p>
                            {ques.options.map((val,i)=>
                                <><input type="radio" name={"question"+index} value={val}/>{String.fromCharCode(65+i)+". "+val}<br/></>)}</>:
                                <div className="form-group">
                                    <textarea type="text" className="form-control" id={"question"+index} placeholder="Answer" style={{height:"150px"}}></textarea>
                                </div>}
                    </div></CSSTransition>
                )
            }
        </div>
        <div className="box" style={{overflow:"hidden",padding:"5px",borderRadius:"0px 0px 10px 10px",backgroundColor:"#e5d8f2"}}>
            <div className="btn" onClick={()=>{this.submit()}} style={{cursor:"pointer",backgroundColor:"#8000ff",color:"#ffffff",float:"right"}}>Submit</div>
        </div>
    </div>);
}
}


export default App;