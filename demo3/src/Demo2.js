import {Component} from "react";
import Inside from "./Inside";

export default class Demo2 extends Component{
    constructor() {
        super();
        this.state = {
            isShow: true
        }
    }
    render() {
        return(
            <>
                {this.state.isShow && <Inside/>}
                <button onClick={()=>{
                    this.setState(state =>{
                        return{
                            isShow: !state.isShow
                        }
                    })
                }}>
                ClickMeAgain</button>
            </>
        )
    }
}