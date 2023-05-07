import { useState } from "react";
const State=()=>{
    let [abc,setUp] = useState("hungry")
    let btm =()=>{setUp("im i full")}
    return(
        <div>
            {abc}
            <br /><br />
            <button  onClick={btm} >Food</button>
        </div>
    )
}
export default State