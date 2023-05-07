import { useState } from "react"

const controlled=()=>{
    let [name,setName]= useState("")
    let [email,setEmail]=useState("")

    let nameData=(e)=>{
        console.log(e.target.value)
        setName(e.target.value)
    }
     
    let emailData=(e)=>{
        setEmail(e.target.value)
    }
  let formHandle=(e)=>{
    e.preventDefault()
    console.log(name,email)
    
  }
    return(
        <div>
            <form action="">
                <label htmlFor="">First name</label>
                <input type="text" value={name} onChange={nameData}/>

                <br />
                <label htmlFor="">Email</label>
                <input type="email" value={email} onChange={emailData} />

                <br />
                <button  onClick={formHandle} >Submit </button>


            </form>
            {name}
            {email}

        </div>
    )
}
export default controlled