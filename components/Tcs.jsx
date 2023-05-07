import { useState } from "react"
import style from "./Tcs.module.css" 
const Tcs=()=>{
    let[abc,setAbc]=useState()
    let btn=()=>{
        setAbc(<textarea>wht</textarea>)
    }
    return(
        <div>
            <section id={style.nav}>
            <article>
<div class={style.logo}><img src="https://www.tcs.com/content/dam/global-tcs/en/images/home/dark-theme.svg" alt="" /></div>
                <div class={style.MenuFirst}>
                <ol>
                    <li><a href="">What we do</a></li>
                    
                    <li><a href="">Who we are</a></li>
                    
                    <li><a href="">Insights</a></li>
                    
                    <li><a href="">Careers</a></li>
                   
                    <li><a href="">Investors</a></li>
                    </ol>
                 </div>
                <div class={style.blank}></div>

                <div className={style.MenuLast}>
                        <ol>
                    <li><a href="">CONTACT US</a></li>
                    <li><a href="">TCS WORLDWIDE</a></li>
                    <li><a href=""><div>{abc}<button onClick={btn}><i class="fa-solid fa-magnifying-glass"></i></button></div></a></li>
                    <li><a href=""><img src="/  https://www.tcs.com/content/dam/global-tcs/en/images/home/logo-tata.svg" alt="tata.com"/></a></li>
                    
                </ol></div>
                
            </article>
            </section>
        </div>
    )
}
export default Tcs
