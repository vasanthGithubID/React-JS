import axios from "axios"
import { useEffect } from "react"
const FetchData1=()=>{

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{
            console.log("got the data");
            console.log(response.data);

        })
    
.catch(()=>{
    console.log("i did not get the data")
})
},[])
    return(
        <div>

        </div>
    )
    
}
export default FetchData1