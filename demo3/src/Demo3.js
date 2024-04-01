import {Component} from "react";
import {render} from "@testing-library/react";
import Inside from "./Inside";

export default class Demo3 extends Component{
    constructor() {
        super();
        this.state={
            isShow: true
        }
    }
    render() {
        return(
            <>
                {this.state.isShow && <Inside/>}
                <button onClick={() =>
                this.setState(state =>{
                    return {
                        isShow: !state.isShow
                    }
                })
                }>ClickMe</button>

            </>
        )
    }

}