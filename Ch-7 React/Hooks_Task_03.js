// create React app which takes user inputs num1,num2 & perform add,sub,mul,div 

import { useState } from "react";

function H5(){
    const[data,setdata] = useState({});
    const [num,setNum] = useState(0);
    function handleChange(e){
        const{name,value}=e.target;
        setdata({...data,[name]:value})
    }
    function sum(){
        setNum(parseInt(data.n1)+parseInt(data.n2))
    }
    function sub(){
        setNum(parseInt(data.n1)-parseInt(data.n2))
    }
    function mul(){
        setNum(parseInt(data.n1)*parseInt(data.n2))
    }
    function div(){
        setNum(parseInt(data.n1)/parseInt(data.n2))
    }
    return(
        <div>
            Num 1 : <input name="n1" onChange={handleChange}/>
            Num 2 : <input name="n2" onChange={handleChange}/><br/>
            <button onClick={sum}>Sum</button>
            <button onClick={sub}>Sub</button>
            <button onClick={mul}>Mul</button>
            <button onClick={div}>Div</button>
            <h1>{num}</h1>
        </div>
    )
}

export default H5