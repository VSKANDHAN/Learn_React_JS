import React from "react";
import ReactDOM from "react-dom";
const root=document.getElementById('root')

const Numbers=({arr})=>{

let li=arr.map((e)=><li key={e}>{e[0]} {e[1]} </li>)
    return li;
}
const Li=({arr})=>{
    let listed=arr.map((e)=><li key={e}>{e}</li>)
    return listed
}
const Obj=({obj})=>{
    let info=obj.map((e)=><><h2>Name:{e.name}</h2><p>Age:{e.age}</p><h4>Skills:<Li arr={e.skills}/></h4></>)
    return info
    
}

const App=()=>{
    let array=[['first',1],['second',2],['third',3]]
    let obj=[
{name:'vsk',age:20,skills:['html','css','js']},
{name:'kandhan',age:21,skills:['html','css','js']},
{name:'vskandhan',age:18,skills:['html','css','js']}

    ]
    return(
        <>
        <h1>Array of arrays</h1>
<ul>
<Numbers arr={array}/>
</ul>
<h2>Objects</h2>
<Obj obj={obj}/>
</>
    )
}

ReactDOM.render(<App/>,root)