// image change
import {useState} from "react"
import img1 from "./im1.jpg"
import img2 from "./im2.jpg"
import img3 from "./im3.jpg"
import img4 from "./im4.jpg"
import img5 from "./im5.jpg"
function H3(){
    const a = [img1,img2,img3,img4,img5]
    const[myImage,setImage] = useState(a[0]);
    function changeImage(){
        setImage(a[Math.floor(((Math.random())*a.length))])
    }
    return(
        <div>
            <button onClick={changeImage}><img src={myImage} alt="/" style={{height:"250px",width:"250px"}}/></button>
        </div>
    )
}
export default H3