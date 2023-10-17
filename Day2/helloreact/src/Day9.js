import React,{Component} from 'react'
import ReactDOM  from 'react-dom'
const root=document.getElementById('root')
class Main extends Component{
    state={
        msg:' '
    }
    handleClick=(e)=>{
        this.setState({msg:`clicked the${e.target}`})
      
    }
    handleCopy=(e)=>{
        this.setState({msg:'press ctrl+v for paste brooo'})
        
    }
    render(){
        return(
            <>
            <h1 onClick={this.handleClick} onCopy={this.handleCopy}>Event Handling in REACT</h1>
            <button onClick={this.handleClick}>Click Me to inspect the Event </button>
<h3>{this.state.msg}</h3>
            </>
        )
    }
}

ReactDOM.render(<Main/>,root)