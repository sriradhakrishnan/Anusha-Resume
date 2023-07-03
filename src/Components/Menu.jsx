import style from "./profile.module.css"
import {Link} from "react-router-dom"
const Menu=()=>{
    return(
       <ol id={style.menubar}>
        <li><Link to="/comp1">Home</Link></li> 
        <li><Link to="/comp2">Aboutus</Link></li> 
        <li><Link to="/comp3">Details</Link></li> 
        <li><Link to="/comp4">Contact Us</Link></li> 
       </ol>
    )
}
export default Menu