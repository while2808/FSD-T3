//  useReducer => alternate of useState
// syntax : [var,function to change value of var] = useState(initial value)
// [variable,dispatch] = useReducer(reducer,initial value)
// function reducer(var,action){}

// synatx:[var,function to update this variable]=useState(intial value);


// Defination : count value - increase
import {useReducer} from "react"
function reducer(count,action){
    if(action.type ==="increment")
    {
        return count+1;
    }
    if(action.type ==="decrement")
    {
        return count-1;
    }
}
function UR(){
    const[count,dispatch] = useReducer(reducer,0)

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={()=>dispatch({type:"increment"})}>Increment</button>
            <button onClick={()=>dispatch({type:"decrement"})}>Decrement</button>
        </div>
    )
}
export default UR