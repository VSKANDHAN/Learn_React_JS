import React from "react";
import ReactDom from "react-dom";
const root=document.getElementById('root')
class Header extends React.Component{
hello=function (){
    alert('helloo guyss')
}
    render(){
        return(<>
        <h1>This is the header section</h1>
        <h2>{this.props.name}</h2>
        <button onClick={this.hello}>Helloo Guyss🕺</button>
        </>)
    }
}

ReactDom.render(<Header name='vsk'/>,root)