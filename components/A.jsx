import Hoc from "./Hoc";

const A=(x)=>{
    return(
        <div>
            {x.data}
            <button  onMouseOver={x.Func} >Increment</button>
        </div>
    )
}

export default Hoc(A)