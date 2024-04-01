import {useState} from "react";

export default function FComponent(props){
    //hook dung dc state va life cycle trong FC
    let [list, setList] = useState([
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
    ])
    let [name, setName] = useState("")
    let [age, setAge] = useState("")
    let [Class , setClass] = useState("")
    return(
        <>
        <h1>DAY LA FUNCTION FComponent</h1>
            {list.map((item,index) =>
                <h2 key={index}>{item.name},{item.age},{item.class}</h2>
            )}
            {/*//inputName*/}
            <h2>Name:{name}</h2>
            <input type="text" name={"inputName"} value={name} onChange={(e)=>{
                setName(e.target.value)
            }}/>
            {/*//inputAge*/}
            <h2>Age:{age}</h2>
            <input type="text" name={"inputAge"} value={age} onChange={(e)=>{
                setAge(e.target.value)
            }}/>
            {/*InputClass*/}
            <h2>Class:{Class}</h2>
            <input type="" name={"inputClass"} value={Class} onChange={(e)=>{
                setClass(e.target.value)
            }}/>
            {/*<button onClick={()=>{*/}
            {/*    this.add()*/}
            {/*}}>Add</button>*/}
            <button onClick={()=>{
                setList([...list, {
                    name: name,
                    age: age,
                    class: Class
                }])
                    setName("");
                    setAge("");
                    setClass("");

            }
            }>Add</button>

        </>
    )

}