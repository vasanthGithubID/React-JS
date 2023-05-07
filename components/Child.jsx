import GrandChild from "./GrandChild"
const Child =(x)=>{
    return(
        <div>
            <GrandChild data={x.content}/>
        </div>
    )
}
export default Child