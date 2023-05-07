import { useMemo, useState } from "react"

const Perform=()=>{
    let [count,setCount]=useState(0)
    let [count1,setCount1]=useState(0)
     let inc=()=>{  
        setCount(count+1)
     }

     let inc2=()=>{
        setCount1(count1+1)
     }
     let Even=useMemo(()=>{
        let i =0
        while(i<10000) i++
        return count1%2==0
     },[count1]
     )
    return(
        <div>
            {count}
             <button onClick={inc}>increment</button><br />
            {count1}
             <button onClick={inc2}>increment2</button>
             {Even?"EVEN":"ODD"}
   

        </div>
    )
}
export default Perform