import { useState } from "react";

const Hoc = (Wrappedcomp)=>{
    function NestedHoc(){
        let[count,setCount]=useState(0);

        let incre=()=>{
            setCount(count+1)
        }
    
    return(
        <div>
          <Wrappedcomp data={count}  Func={incre} />
        </div>
    )
}
return NestedHoc
}
export default Hoc