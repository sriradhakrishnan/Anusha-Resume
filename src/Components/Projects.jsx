import style from "./profile.module.css"
const Project=()=>{
    return(
        <section id={style.project}>
            <article>
             <span style={{color:"red",fontFamily:"sans-serif",fontSize:"25px"}}>   <marquee behavior="30s" direction="left">Projects</marquee></span> <br />
                
           <span  style={{backgroundColor:"white",color:"blue",fontFamily:"sans-serif",fontSize:"20px"}}>Employee Management Application</span>  
          <strong>Technology used : React js </strong>   <br /> 

           <span  style={{backgroundColor:"white",color:"blue",fontFamily:"sans-serif",fontSize:"20px"}}>Single page application</span> 
          <strong>technology used : React js</strong> <br />  

         <span  style={{backgroundColor:"white",color:"blue",fontFamily:"sans-serif",fontSize:"20px"}}>Weather Report</span> 
          <strong>Technology used : React js</strong> <br /> 

         <span  style={{backgroundColor:"white",color:"blue",fontFamily:"sans-serif",fontSize:"20px"}}>webpages(UI)</span> 
          <strong>Technology used : HTML5,CSS3,React-js</strong> <br />
          </article>
        </section>
    )
}
export default Project