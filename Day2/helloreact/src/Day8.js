import React from 'react'
import ReactDOM from 'react-dom'
const root=document.getElementById('root')

const Hello=({text})=>{
    return(
        <>
        <h1>{text}</h1>
        </>
    )
}
const Button=({text,func})=>{
    return(<button onClick={func}>{text}</button>)
}
class Main extends React.Component{
    state={
        status:false
    }
    render(){
        const handleLogin=()=>{
this.setState({status:!this.state.status})
        }
        let text=this.state.status?'Logout':'Login'
        let text1=this.state.status?'Welcome Back Brooo':'Please Login Bro'
        return(
            <>
            <Hello text={text1}/>
            <Button text={text} func={handleLogin}/>
            </>
        )
    }

}

const App=()=>{
    return(<Main/>)
}
ReactDOM.render(<App/>,root)