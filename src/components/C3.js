import { Component } from "react";

class C3 extends Component
{
    componentWillUnmount()
    {
        console.log("I am componentWillUnmount method");
    }
    render()
    {
        return(
            <div>
                <h1>I am C3 component who will be unmounted in some time</h1>
            </div>
        )
    }
}
export default C3;