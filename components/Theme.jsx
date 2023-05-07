const Theme=()=>{
    let dark=()=>{
        document.body.style.background="black"
        document.body.style.color="white"

    }
    let light=()=>{
        document.body.style.background="pink"
        document.body.style.color="black"

    }
    return(
            <div>
            <h1>Dark_Light THEME</h1>
               <input type="radio" name="a" onClick={dark} />
               <label>dark</label>
               <input type="radio" name="a"  onClick={light} />
               <label >light</label>
            </div>
    )
}
export default Theme