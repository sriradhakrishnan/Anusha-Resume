import style from "./profile.module.css"
import Logo from "./Logo"
import Menu from "./Menu"
const Profile=()=>{
    return(
    <div>
     <section  id={style.navbar}>
        <article>
             <div className={style.logo}><Logo/></div>
             <div className={style.menu}><Menu/></div>
             {/* <div className={style.details}><Details/></div> */}
        </article>
     </section>
     <section id={style.body}>
        <article>
        <div className={style.photo}></div>
        <div className={style.designation}></div>
        <div className={style.resume}></div>
        <div className={style.hireme}></div>
        </article>
     </section>
     </div>
    
    )
}
export default Profile