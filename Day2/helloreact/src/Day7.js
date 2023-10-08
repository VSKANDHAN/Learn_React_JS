import React from "react";
import ReactDOM  from "react-dom";
const root=document.getElementById('root')
class Main extends React.Component{
    state={
        count:0,
        bgcolor:'white',
        color:'black'
    }
  
    render(){
       const style1={
            backgroundColor:this.state.bgcolor,
            color:this.state.color
        }
        let change=()=>{
            let bcolor=this.state.bgcolor==='white'?'black':'white'
            let color=this.state.color==='black'?'white':'black'

            this.setState({bgcolor:bcolor,color:color})

        }
        return(<>
        <div style={style1}>
            <h1>Counter and BG Changer</h1>
<h2 >{this.state.count}</h2>
<button  onClick={()=>{this.setState({count:this.state.count+1});change()} }>Add</button>
<button onClick={()=>{this.setState({count:this.state.count-1});change()}}>Sub</button>
</div>
</>
        )
    }
}
ReactDOM.render(<Main/>,root)
