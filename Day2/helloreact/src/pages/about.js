import { Link, Outlet } from "react-router-dom"

function About(){
    return(
        <>
        <h1>Welcome to About page</h1>
        <p>Hellooooooo</p>
        <nav>

<Link to='/about/a1'>About link1</Link>
<Link to='/about/a2'>About link1</Link>




        </nav>
<Outlet/>

        
        </>
    )
}
export default About