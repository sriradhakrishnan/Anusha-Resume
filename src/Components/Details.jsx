import { Link } from "react-router-dom"
import style from './profile.module.css'
const Details=()=>{
    return(
        <ol id={style.resume}>
        <article>
          <li> <Link to="/comp5">Education</Link></li>
          <li> <Link to="/comp6">programming skills</Link></li>
          <li> <Link to="/comp7">projects</Link></li>
          <li> <Link to="/comp8">interests</Link></li>

           {/* <a href="/comp5">Education</a>
           <a href="/comp6"></a> */}
        </article>
        </ol>
    )
}
export default Details