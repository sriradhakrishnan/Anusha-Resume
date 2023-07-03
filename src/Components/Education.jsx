import style from "./profile.module.css"
const Education=()=>{
    return(
        <section id={style.education}>
          <article>
          {/* <input type="radio" />  */}
         <span style={{backgroundColor:"white",color:"red",fontFamily:"sans-serif"}}> EDUCATION  </span> <br /> <br />
          <strong style={{backgroundColor:"white",color:"blue"}}> IT COACHING</strong>
          Pyspider   <br />
          Python developer -2023   <br /> <br />

           <strong style={{backgroundColor:"white",color:"blue"}}>GRADUATION</strong>
          Sri Padmavathi women's Degree college  <br />
          Bachelor of science -Biochemistry (2022) <br />  <br />

         <strong style={{backgroundColor:"white",color:"blue"}}>INTERMEDIATE</strong> 
          sri Padmavathi  women's junior college  <br />
          Bipc -2017 to 2019  <br /> <br />
          

            <strong style={{backgroundColor:"white",color:"blue"}}>HIGH SCHOOL</strong> 
              A.P.S.W.R School <br />
              2017 -92%
              </article>
        </section>
    )
}
export default Education