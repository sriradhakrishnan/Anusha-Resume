import style from "./profile.module.css"
import pic from "./resume pic.jpeg"
import  pic1 from "./anusha muraboina 2001 (1)_page-0001.jpg"

const Aboutus=()=>{
    return(
      <div>
         <h1 style={{color:"blue",fontFamily:"sans-serif",fontSize:"30px",background:"black"}}>About me</h1>

        <div id={style.aboutus}>
          <article>
          <div className={style.photo}>
          <img src={pic} alt="" />
          </div>
          <div className={style.detail}>
           ::   I am a Bsc student .I have interested IT field. <br /> <br />
            ::  so that's why i am choosing python developer coaching in pyspider in Bengalore. <br /> <br />
            ::  I have interest on frontend developer.
           i did project  <span style={{backgroundColor:"black",color:"white"}}>  EMPLOYEE MANAGEMENT APPLICATION </span>using REACT-JS with CRUD operation.  <br /> <br />
           {/* <input type="radio" />  */}
           <strong style={{color:"red",fontSize:"30px"}}>Here are a Few highlights</strong>  <br />
            <input type="radio" /> Python<br />
            <input type="radio" /> SQL<br />
            <input type="radio" /> HTML5<br />
            <input type="radio" /> CSS3<br />
            <input type="radio" /> Javascript<br />
            <input type="radio" /> React-js<br />
            <input type="radio" /> Bootstrap 5 <br />

           <h5 style={{backgroundColor:"azure",color:"white",border:"2px solid black",fontSize:"25px",height:"30px",width:"25%",borderRadius:"7px"}}> <a href={pic}>Hire me</a></h5>
                  <br />
           <h5  style={{backgroundColor:"pink",color:"white",border:"2px solid black",fontSize:"25px",height:"30px",width:"35%",borderRadius:"7px"}}> <a href={pic1}>Get resume</a></h5>
          </div>
        </article>
        </div>


       

        </div>
       
       
       

    )
}
export default Aboutus