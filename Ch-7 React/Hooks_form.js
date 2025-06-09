// create react component that manages multiple form input fields using state obj & display values on browser.

import {useState} from "react"
function H4(){
    const[data,setdata] = useState({});
    function handleChange(e){
        const{name,value}=e.target;
        setdata({...data,[name]:value})
    }
    return(
        <div>
            First Name : <input name="fname" onChange={handleChange}/>
            Last Name : <input name="lname" onChange={handleChange}/>
            <h1>{data.fname} {data.lname}</h1>
        </div>
    )
}
export default H4