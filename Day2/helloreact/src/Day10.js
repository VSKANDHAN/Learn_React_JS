import React,{Component} from 'react'
import ReactDOM from 'react-dom'
const root=document.getElementById('root')
class Main extends Component{
    state={
        msg:''
    }
    handleChange=(e)=>{
        this.setState({msg:e.target.value})
    }
    render(){

        return(<>
            <input type='text' value={this.state.msg }  placeholder='Enter your name' onChange={this.handleChange} ></input>
            <h1>{this.state.msg}</h1></>
        )
    }

}
ReactDOM.render(<Main/>,root)