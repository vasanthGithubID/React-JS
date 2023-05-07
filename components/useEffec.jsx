import { useState } from "react"
import { useEffect } from "react"

const useEffec=()=>{
    let [state,setState]=useState(0)
    let [state1,setState1]=useState(0)
    let [state2,setState2]=useState(0)

    useEffect(()=>{
        console.log("components is loaded");

    },[state,state1])
    return(
        <div>
            {state}
            <button onClick={()=>{setState(state+1)}} >Incerement</button>
            {state1}
            <button  onClick={()=>{setState1(1+5)}} >Incerement</button>
            {state2}
            <button onClick={()=>{setState2(state2+100)}}>StATE2 </button>

        </div>
    )
}
export default useEffec