import React,{Component} from 'react'
import ReactDOM  from 'react-dom'
const root=document.getElementById('root')
class Main extends Component{
    constructor(props){
        super(props)
            this.state={
                firstname:'vsk'

            }
        
    }

componentDidMount(){
    setTimeout(()=>{
        this.setState({firstname:'kandhan'})
        
    },2000)
}
states=[]
getSnapshotBeforeUpdate(prevprops,prevstate){
    this.states.push(prevstate.firstname)

}

getstate=()=>{
    let currentstate=this.states[0]
    this.setState({firstname:currentstate})

}
render(){

    return(
        <>
        <h1>{this.state.firstname}</h1>
        <button onClick={this.getstate}>Go back</button>
        </>
    )
}


}

ReactDOM.render(<Main/>,root)