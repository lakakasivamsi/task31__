import { Component } from "react";
import C3 from "./C3";
class C2 extends Component
{
   
    constructor()
    {
        super();
        console.log("I am constructor");
        this.state = {role:"Engineer",bool:true};
        //If you write the handleClick as a normal function
        this.handleClick = this.handleClick.bind(this);
    }
    static getDerivedStateFromProps()
    {
        console.log("I am getDerivedStateFromProps method");
        return null;
    }

    componentDidMount()
    {
        console.log("I am componentDidMount method");
    }
    
    handleClick()
    {
        this.setState({role:"Doctor"});
    }

    shouldComponentUpdate()
    {
        console.log("I am shouldComponentUpdate method");
        return true;
    }

    getSnapshotBeforeUpdate()
    {
        console.log("I am getSnapshotBeforeUpdate method");
        return null;
    }

    componentDidUpdate()
    {
        console.log("I am componentDidUpdate method");
    }

    handleClick2 = () => {
        this.setState({
            bool: false
        })
    }
    render()
    {
        console.log("I am render method");
        return(
            <div>
                <h1>Life cycle methods</h1>
                <h1>State - {this.state.role}</h1>
                <button onClick={this.handleClick}>Click me!</button>
                {(this.state.bool)?<C3 />: null}
                <button onClick={this.handleClick2}>Unmount the component</button>
            </div>
        )
    }
}
export default C2;