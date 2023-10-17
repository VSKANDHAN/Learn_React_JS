import React from "react";
import  ReactDOM  from "react-dom";
const root=document.getElementById('root')
const Numberdiv=({num,cname})=>{
    return(
        <div className={cname}>{num}</div>
    )
}
const App=()=>{
   let parentDiv=[]
   for(let i=0;i<=30;i++){
let cname;
if(i%2===0){
    cname='even'
}
else{
    cname='odd'
}
parentDiv.push(<Numberdiv num={i} cname={cname}/>)
   }
   return <div className="parentDiv">{parentDiv}</div>  
}
ReactDOM.render(<App/>,root)