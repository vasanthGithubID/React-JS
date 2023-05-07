import { useState } from "react";

const Inc=()=>{
    let[abc,setCount]=useState(0)
    let inc=()=>{setCount(abc=abc+1)}
    let dec =()=>{setCount(abc=abc-1)}
    let clr =()=>{setCount(abc=0)}
    return(
        <div>
            {abc}
            <br />
            <button onClick={inc} >increment</button>
            <br />
            <button  onClick={dec} >decrment</button>
            <br />
            <button  onClick={clr} >clear</button>
        </div>
    )
}
export default Inc