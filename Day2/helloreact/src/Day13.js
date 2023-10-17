// Higher order components where we will pass the other components as paratameters for the main components


import React from 'react'
import ReactDOM  from 'react-dom'
const root=document.getElementById('root')
const Main=(props)=>{
    return(
        <>
        <h1>helloo this is from main</h1>
        <div>{props.c}</div>
        </>
    )
}
const Child=()=>{
    return(
        <>
        <h1>This is from the child</h1>
        </>
    )
}


ReactDOM.render(<Main c={<Child/>}/>,root)