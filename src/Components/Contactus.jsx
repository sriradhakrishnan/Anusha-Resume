import style from "./profile.module.css"
const Contactus=()=>{
    return(
        <div>
        <section id={style.contactnav}>
         <article>
          <center> <span style={{color:"purple",fontFamily:"sans-serif",fontSize:"30px"}}>contact us</span></center>  <br />
            <center>  <span style={{color:"purple",fontFamily:"sans-serif",fontSize:"30px"}}>Let's keep in touch</span></center>  <br /><br /><br />
            <center >
         <label htmlFor="" style={{color:"red",fontFamily:"sans-serif",fontSize:"20px"}}>phone no  :</label>
        <label htmlFor="" style={{color:"blue",fontFamily:"sans-serif",fontSize:"20px"}}>9989380114</label> <br /> <br />
        <label htmlFor="" style={{color:"red",fontFamily:"sans-serif",fontSize:"20px"}}>Email id :</label>
        <label htmlFor="" style={{color:"blue",fontFamily:"sans-serif",fontSize:"20px"}}>anushamuraboina9@gmail.com</label><br /><br />
        <label htmlFor="" style={{color:"red",fontFamily:"sans-serif",fontSize:"20px"}}>Alternative email id:</label>
        <label htmlFor=""style={{color:"blue",fontFamily:"sans-serif",fontSize:"20px"}}>vy485899@gmail.com</label>
        </center>    
            </article>
        </section>
        </div>
    )
}
export default Contactus