import {Component} from "react";
import Inside from "./Inside";

export default class Demo1 extends Component{
    constructor() {
        super();
        this.state = {
        isShow: true
        }
    }

    render() {
        return(
            <>
                <h1>{this.state.name}</h1>
                <h1>{this.props.x}</h1>
                {this.state.isShow && <Inside/>}
                <button onClick={()=>
                    this.setState(state => {
                        return {
                            isShow: !state.isShow
                        }
                    })
                }>Click</button>
            </>
        )
    }
}