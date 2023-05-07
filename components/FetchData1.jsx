import { useState } from "react"
import dummyData from "./userData.json"
const FetchData1=()=>{
    let [content,setContent]=useState(dummyData)
    console.log(content)
    return(
        <div>
            {content.map((x)=>{
                return(
                    <div>
                        <h1>{x.login}</h1>
                        <img src={x.avatar_url}  />
                    </div>
                )
            })}
        </div>
    )
}
export default FetchData1