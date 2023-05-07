import { useRef } from "react"

const Reference=()=>{
     let demoRef = useRef()
     console.log(demoRef);
     let btn=()=>{
        demoRef.current.style.background="red"
     }
     let btm=()=>{
        demoRef.current.style.background="white"
     }
    return(
        <div>
            <h1 ref={demoRef}>Renfenrce</h1>
        <button onClick={btn} onDoubleClick={btm} >Change Color</button>
        </div>
    )
}
export default Reference