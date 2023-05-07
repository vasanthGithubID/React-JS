import { useState } from "react";

const Like=()=>{
    let[count,setCount]=useState(0);
    let inc=()=>{setCount(count+1)}
    return(
        <div>
            <i class="fa-solid fa-heart" onClick={inc} ></i><sup>{count}</sup>
        </div>
    )

}
export default Like