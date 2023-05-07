import axios from "axios"
import { useEffect, useState } from "react"

const FetchData3=()=>{

    let [content,setContent]=useState([])
    let [id,setId]=useState("")
    let [btn,setBtn]=useState("")

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/${btn}')
        .then((response)=>{
            setContent(response.data);

        })
    },[id])
    // console.log(content);

    let idData=(e)=>{
        setId(e.target.value)
        console.log(e.target.value)
    }

    let formHandle=()=>{
        
        
    }
    return(
        <div>
            {/* {content.map((x)=>{
                return(
                       <div>
                        <h1>{x.id}</h1>
                        <h1>{x.title}</h1>
                       </div>
                    
                )
            })} */}

            <input type="text" value={id}  onChange={idData} />
            <button onClick={formHandle}>submit</button>
            {content.title}

        </div>
    )
}
export default FetchData3