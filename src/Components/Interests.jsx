import style from "./profile.module.css"
const Interests=()=>{
    return(
        <section id={style.interests}>
        <article>
          <span style={{backgroundColor:"white",color:"red",fontFamily:"sans-serif",fontSize:"20px"}}>Music</span> 
        <span style={{backgroundColor:"white",color:"indigo",fontFamily:"sans-serif",fontSize:"15px"}}> I hear music a lot.when i am feeling lonely ,stress and emotionly.</span> <br /> <br />
        
        <span  style={{backgroundColor:"white",color:"red",fontFamily:"sans-serif",fontSize:"20px"}}>Watching cricket </span> 
         <span style={{backgroundColor:"white",color:"indigo",fontFamily:"sans-serif",fontSize:"15px"}}> I like to watching cricket with my brothers.in cricket i like most M.S Dhoni sir as wicket-keeper,captain,cool person and well being human .
         in IPL  ilike most RCB team .i enjoyed alot when the war between india v/s pakisthan.  </span><br /> <br />

          <span style={{backgroundColor:"white",color:"red",fontFamily:"sans-serif",fontSize:"20px"}}>Learning piono</span>  <br />
          <span  style={{backgroundColor:"white",color:"indigo",fontFamily:"sans-serif",fontSize:"15px"}}> recently ,i started to learn piono.from my childhood,it is a desire to learn one musical instrument.now i learn few piono nodes. </span>

        </article>
        </section>
    )
}
export default Interests