import React,{Component} from "react";
import ReactDOM from "react-dom";
const root=document.getElementById('root')

class Main extends Component{
    constructor(props){
        super(props)
        this.state={
            name:this.props.name
        }
    }
    
    handleclick=()=>{
        this.setState({name:'kandhan'})
    }
    render(){
        return(
        <>
            <h1>{this.state.name}</h1>
        <button onClick={this.handleclick}>Change</button>
            </>
        )
    }
}
ReactDOM.render(<Main name='vskandhan'/>,root)