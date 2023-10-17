import React from "react";
import ReactDOM  from "react-dom";
const rootElement=document.getElementById('root')


const Header=()=>{
    return(
        <>
        <header><h1>Helloo this is header</h1></header>
        </>
    )
}
const Main=()=>{
    return(
        <>
        <main>
            <h2>This is main sections</h2>
        </main>
        </>
    )
}
const Footer=()=>{
    return(
        <>
        <footer>
            <h2>This is from the footer section</h2>
        </footer>
        </>
    )
}

const app=(
<div  className="main">
{Header()}
<Main/>
<Footer/>
</div>

)

ReactDOM.render(app,rootElement)