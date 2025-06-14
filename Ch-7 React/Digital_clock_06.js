// write React JS to create digital clock in browser.

import { useEffect, useState } from "react";

function UE2(){
    const [date,setDate] = useState(new Date()) ;

    useEffect(()=>{setInterval(()=>{setDate(new Date())},1000)},[])

    return(
        <div>
            <h1>{date.toString()}</h1>
            <h1>{date.toLocaleTimeString()}</h1>
        </div>
    )
}

export default UE2