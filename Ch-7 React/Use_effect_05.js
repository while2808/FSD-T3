import { useEffect, useState } from "react";

function UE1(){
    const[count,setcount] = useState(0)
    const[calculation,setcalc] = useState(0)

    // when page is render for first time once.
    useEffect(()=>{alert("Loaded Once")},[])

    // when page is rendered on every update in component or any event update
    useEffect(()=>{alert("every event update")})

    // when clicked on button A
    useEffect(()=>{alert("Clicked on button A")},[count])

    function changeCount(){
        setcount(count+1)
    }
    function changeCalc(){
        setcalc(calculation+1)
    }

    return(
        <div>
            <button onClick={changeCount}>Button A {count}</button>
            <button onClick={changeCalc}>Button B {calculation}</button>
        </div>
    )
}
export default UE1