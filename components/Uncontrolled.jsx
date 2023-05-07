import { useRef } from "react"

const Uncontrolled=()=>{
    let name = useRef()
    let email = useRef()
    console.log(name);
    console.log(email);

    let formHandle=(e)=>{

      e.preventDefault()
      let nameData =  name.current.value
      let emailData = email.current.value
      console.log(nameData);
      console.log(emailData);
    }
    return(
        <div>
           <form action="">
            <label htmlFor="">Name</label>
            <input type="text" ref={name} />
            <br /><br />
            <label htmlFor="">Email</label>
            <input type="email"  ref={email} />
            <br />
            <button  onClick={formHandle} >Submit</button>
           </form>
        </div>
    )
}
export default Uncontrolled