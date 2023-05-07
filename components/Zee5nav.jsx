import style from "./zee5nav.module.css"
const Zee5nav =()=>{
    return(
        <section id={style.nav2}>
            <article>
                <div className={style.Logo2}>
                <img src="https://www.zee5.com/images/ZEE5_logo.svg?ver=2.52.51" />
                </div>
                <div className={style.Menu2}>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">TV Shows</a></li>
                            <li><a href="#">Movies</a></li>
                            <li><a href="#">18+ content</a></li>
                            <li><a href="#">News</a></li>
                        </ul>
                </div>
                <div className={style.Search}>
                <label htmlFor=""></label>
                <input type="text" />
                </div>
                <div className={style.Button}>
                <button>Login</button>
                </div>
            </article>
        </section>
    )
}
export default Zee5nav