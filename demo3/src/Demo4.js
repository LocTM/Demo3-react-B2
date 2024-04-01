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
            ],

            inputName:'',
            inputAge:'',
            inputClass:''


        }
    }

add = () => {
    this.setState((state)=>{
        return {
            list: [...state.list, {name: state.inputName,age: state.inputAge, class: state.inputClass }],
            inputName: "",
            inputAge: "",
            inputClass: "",
        }
    })
}
change = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
}


    render() {
        return (
            <div>
                {this.state.list.map((item,index) =>
                <h2 key={index}>{item.name},{item.age},{item.class}</h2>
                )}
                {/*//inputName*/}
                <input type="text" name={"inputName"} value={this.state.inputName} onChange={this.change}/>
                {/*//inputAge*/}
                <input type="text" name={"inputAge"} value={this.state.inputAge} onChange={this.change}/>
                {/*InputClass*/}
                <input type="" name={"inputClass"} value={this.state.inputClass} onChange={this.change}/>
                {/*<button onClick={()=>{*/}
                {/*    this.add()*/}
                {/*}}>Add</button>*/}
                <button onClick={this.add}>Add</button>


            </div>

        );
    }
}