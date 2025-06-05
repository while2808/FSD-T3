// skip 3 from array of num 1 to 10
function F1(){
    const arr = [1,2,3,4,5,6,7,8,9,10]
    const newarr = arr.filter(num=>num!==3);
    return(
        <div>
            {/* <span>{arr+","}</span><br></br> */}
            <span>{arr.join(",")}</span><br></br>
            <span>{newarr.join(",")}</span>
        </div>
    )
}
export default F1