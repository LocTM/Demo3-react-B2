import {Component} from "react";

export default class Demo4 extends Component{
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    name: "Tran Minh Loc",
                    age: 30,
                    class: "C1023H1"
                },
                {
                    name: "Tran Tuan Anh",
                    age: 30,
                    class: "C1023H1"
                },
                {
                    name: "Le Viet Hung",
                    age: 20,
                    class: "C1023H1"
                }
            ]


        }
    }

    render() {
        return (
            <div>
                {this.state.list.map((item,index) =>
                <h2 key={index}>{item.name},{item.age},{item.class}</h2>
                )}
            </div>
        );
    }
}