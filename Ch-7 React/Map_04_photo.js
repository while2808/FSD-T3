import img1 from "./i1.jpeg"
import img2 from "./i2.jpeg"
import img3 from "./i3.jpeg"
import img4 from "./i4.jpeg"
import img5 from "./i5.jpeg"

function Map4(){
    const arr = [img1,img2,img3,img4,img5]
    return(
        <div>
            {
                arr.map((value)=>
                {
                    return(<img src={value} alt="image" style={{borderRadius:"50px",border:"5px solid black",padding:"10px 5px 10px 0px",margin:"15px 15px",height:"1090px",width:"1040px"}}></img>)
                })
            }
        </div>
    )
}

export default Map4