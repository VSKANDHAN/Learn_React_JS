import React from "react";
import ReactDOM from 'react-dom'
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Nav from "./nav";
import  Home  from "./pages/home";
import About from "./pages/about";
import Contact from './pages/contact'
const root=ReactDOM.createRoot(document.getElementById('root'))
const Nested=()=>{
    return(
        <>
        <h1>Helloo This is from nexted 1 component</h1>
        </>
    )
}
const Nested1=()=>{
    return(
        <>
        <h1>Helloo This is from nexted 2 component</h1>
        </>
    )
}

const Main=()=>{
    return(
        <>
        <Router>
        <Nav/>

            <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/about" element={<About/>}>
                
<Route path="a1" element={<Nested/>}></Route>
<Route path="a2" element={<Nested1/>}></Route>
              </Route>
              <Route path="/contact" element={<Contact/>}></Route>

            </Routes>
        </Router>
        
        </>
    )
}

root.render(<Main/>)



