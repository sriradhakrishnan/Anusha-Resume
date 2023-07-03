import style from "./profile.module.css"
import { Link } from "react-router-dom"
import pic3 from "./anusha muraboina 2001 (1)_page-0001.jpg"
const Home=()=>{
    return(
        <div id={style.home}>
            <article>
            <h3 style={{color:"blue",fontFamily:"sans-serif",fontSize:"20px"}}>Hello, I am Anusha</h3> <br />
           <h3 style={{color:"red",fontFamily:"sans-serif",fontSize:"20px"}}> <marquee behavior="10s" direction="">PYTHON FULL STACK DEVELOPER</marquee></h3> <br />
           <h3 style={{color:"blue",fontFamily:"sans-serif",fontSize:"20px"}}>To build appliaction using React-js</h3>  <br />
           <Link to="/comp2" style={{color:"black",fontFamily:"sans-serif",fontSize:"20px",border:"2px solid black",borderRadius:"5px",background:"pink"}}>Hire me</Link>  <br />
         <a href={pic3} style={{color:"yellow",fontFamily:"sans-serif",fontSize:"20px",border:"2px solid black",borderRadius:"5px",background:"black"}}>Get Resume</a>
           </article>
        </div>
    )
}
export default Home