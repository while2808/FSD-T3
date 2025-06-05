// synatx:[var,function to updtae this variable]=useState(intial value);

import {useState} from "react"
function H1(){
    const[count,setCount] = useState(0);
    function handleCount(){
        setCount(count+1)
    }
    function decCount(){
        setCount(count-1)
    }
    return(
        <div>
            <p> Clicked {count} Times</p>
            <button onClick={handleCount}>Click</button>
            <button onClick={decCount}>Decrement</button>
        </div>
    )
}
export default H1