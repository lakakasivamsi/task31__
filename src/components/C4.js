import { Component } from "react";

class C4 extends Component
{
    constructor()
    {
        super();
        this.state = {content:""}
    }
    handleChange = (event) => {
        this.setState({
            content: event.target.value
        })
    }
    render()
    {
        return(
            <div>
                <input onChange={this.handleChange}/>
                <p>{this.state.content}</p>
            </div>
        )
    }
}
export default C4;