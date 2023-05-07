import style from "./godaddy.module.css"
import pic from "../Image/godaddy-logo-0.png"
const Godaddy =()=>{
    return(
        <section id={style.nav2}>
            <article>
                <div className={style.Logo2}>
               <img src={pic}/>
                </div>
                <div className={style.Menu2}>
                        <ul>
                            <li><a href="#">Domains</a></li>
                            <li><a href="#">Hosting</a></li>
                            <li><a href="#">Security</a></li>
                            <li><a href="#">Email & Marketing</a></li>
                            <li><a href="#">For Web Proffesionals</a></li>
                        </ul>
                </div>
            </article>
        </section>
    )
}
export default Godaddy