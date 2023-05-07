import { useState } from "react"

const Stateobj =()=>{
    let [obj,setObj]=useState({name:"vasanth",id:145})
    return(
        <div>
                  {obj.name}
                  {obj.id}
        </div>
    )
}
export default Stateobj