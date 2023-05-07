const PropChild = (props)=>{
    console.log(props.children);
    return(
        <div>
           <h1> HELLO{props.children}</h1>
            </div>
    )
}
export default PropChild