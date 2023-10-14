
import { Component } from "react";
class C1 extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {bool: true};
    }


    handleClick = () => {
        this.setState({
            bool: !this.state.bool
        });
    }

    render()
    {
        return(
            <div>
                <h1>Props value - {this.props.gift}</h1>
                <h1>State value - {(this.state.bool)?"Engineer":"Doctor"}</h1>
                <button onClick={this.handleClick}>Click me!!</button>
            </div>
        )
    }
}
export default C1;