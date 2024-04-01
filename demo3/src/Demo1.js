import {Component} from "react";
import Inside from "./Inside";

export default class Demo1 extends Component{
    constructor() {
        super();
        this.state = {
        name: "Hello World"
        }
    }

    render() {
        return(
            <>
                <h1>{this.state.name}</h1>
                <h1>{this.props.x}</h1>
                <Inside></Inside>
            </>
        )
    }
}