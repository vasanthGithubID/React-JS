import style from "./myntra.module.css"

const Myntra=()=>{
    return(
        < section id={style.myntra}>
           <article>
                 <div className={style.logo}>
                   <img src="https://aartisto.com/wp-content/uploads/2020/11/myntra.png" />
                </div>

                <div className={style.Menu}>
                    <ol>
                        <li><a href="#">MEN</a></li>
                        <li><a href="#">WOMEN</a></li>
                        <li><a href="#">KIDS</a></li>
                        <li><a href="#">HOME & LIVING</a></li>
                        <li><a href="#">BEAUTY</a></li>
                        <li><a href="#">STUDIO</a><sup style={{color: "red"}}>NEW</sup></li>
                    </ol>
                </div>
               
               <div className={style.search}>
                     <input type="search"placeholder="search" />
                </div>            

                <div className={style.skill}>
                    <ol>
                          <li><a href="#">Profile</a></li>
                          <i class="fa-solid fa-heart"></i><sup></sup>
                          <li><a href="#">WishList</a></li>
                          <li><a href="#">Bag</a></li>
                    </ol>
                           {/* <FontAwesomeIcon icon="fa-regular fa-user" /> */}
                          {/* <i class="fa-thin fa-user"></i><sup></sup>  */}
                </div>
            
            </article>
        </section>
    )
}
export default Myntra