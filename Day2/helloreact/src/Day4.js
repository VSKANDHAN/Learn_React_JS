import React from 'react'
import ReactDOM  from 'react-dom'

const root=document.getElementById('root')
const Header=(data)=>{
    return(
    <>
    <h1>{data.heading}</h1>
    <p>{data.para}</p>
    </>
)
}

const Main=(data)=>{
    return(
        <>
        <h2>{data.heading}</h2>
        <p>
            {data.para}
        </p>
        </>
    )
}
const Footer=({heading,para,obj:{name,age}})=>{
    return(
        <>
        <h2>
            {heading}
        </h2>
        <p>
            {para}
        </p>
        <h3>{name}</h3>
        <h3>{age}</h3>

        </>
    )
}
const App=()=>{
    let obj={
        name:'vsk',
        age:20
    }
    return(
        <>
        <Header heading='Header Section' para='This is just the para' />
        <Main heading='Main Section' para='This is just the para' />
        <Footer heading='Footer Section' para='This is just the para' obj={obj} />

        </>
    )
}
ReactDOM.render(<App/>,root)