import { useRef, useState } from "react"

const Caluc=()=>{
   let f1=useRef()
   let f2 =useRef()
   let [res,setRes]=useState()

   
   let plus =()=>{

   
    let a =  f1.current.value
    let b = f2.current.value
    let c =parseInt(a)+parseInt(b)
     console.log(c)
     setRes(c)

  }

   
  let sub =()=>{

   
    let a =  f1.current.value
    let b = f2.current.value
    let c =parseInt(a)-parseInt(b)
     console.log(c)
     setRes(c)

  }

   
  let mut =()=>{

    let a =  f1.current.value
    let b = f2.current.value
    let c =parseInt(a)*parseInt(b)
     console.log(c)
     setRes(c)


  }
    
    return(
        <div>
            <label htmlFor="">Enter First Number</label>
            <input type="number" ref={f1} />
            <br />
            <label htmlFor="">Enter second Number</label>
            <input type="number"  ref={f2} />
            <button onClick={plus} >+</button><button  onClick={sub} >-</button><button  onClick={mut} >*</button>
            <label htmlFor="">value</label>
            <input type="value" />
            <h1>{res}</h1>
        </div>
    )
}
export default Caluc