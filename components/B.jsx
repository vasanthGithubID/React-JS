import Hoc from "./Hoc";

const B=(x)=>{
    return(
        <div>
            {x.data}
            <button  onMouseOver={x.Func} >Increment</button>
        </div>
    )
}

export default Hoc(B)