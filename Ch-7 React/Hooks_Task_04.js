// firstname,email,pswd,confirmpwd,msg(textarea),gender,city(dropdown),display submitted values in alertbox.
import { useState } from "react";
function H6(){
    const[data,setdata] = useState({});
    function handleChange(e){
        const{name,value} = e.target;
        setdata({...data,[name]:value})
    }
    function handleSubmit(){
        if(data.pw===data.cw){
             alert(`
            Name : ${data.fname}
            Email : ${data.email}
            Password : ${data.pw}
            Confirm Password : ${data.cw}
            Gender : ${data.g}
            City : ${data.city}
            `
            )
        }
        else{
            alert("enter correct password")
        }
       
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                First name : <input type="text" name="fname" onChange={handleChange}/><br/>
                Email : <input type="email" name="email" onChange={handleChange}/><br/>
                Password : <input type="password" name="pw" onChange={handleChange}/><br/>
                Confirm Password : <input type="password" name="cw" onChange={handleChange}/><br/>
                MSg : <textarea></textarea><br/>
                Gender : Male<input type="radio" name="g" value="Male" onChange={handleChange}/>
                        Female<input type="radio" name="g" value="Female" onChange={handleChange}/><br/>
                City : 
                <select name="city" onChange={handleChange}>
                    <option value="">--Select City--</option>
                    <option value="Ahmedabad">Ahmedabad</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Div">Div</option>
                </select><br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default H6