import { Component } from "react";


class Propclass extends Component{
    render(){
        console.log(this.props)
        return(
           <div>
            <h1>hello{this.props.data}</h1>
           </div>
        )
    }
}
export default Propclass