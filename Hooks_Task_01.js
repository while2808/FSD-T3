// image change
import {useState} from "react"
import img1 from "./i1.jpeg"
import img2 from "./i2.jpeg"
function H2(){
    const[myImage,setImage] = useState(img1);
    function changeImage(){
        if(myImage === img1){
            setImage(img2)
        }
        else{
            setImage(img1)
        }
    }
    return(
        <div>
            <button onClick={changeImage}><img src={myImage} alt="/" style={{height:"250px",width:"250px"}}></img></button>
        </div>
    )
}
export default H2