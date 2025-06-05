// print numbers that are grater than 6 using filter & map.
function F2(){
    const arr =[1,2,3,4,5,6,7,8,9,10]
    const newarr = arr.filter(num=>num>6);
    return(
        <div>
            {
                // arr.filter((value)=>value>=6).map((value)=>{return<h1>{value}</h1>})
                newarr.map((value)=>{return <h2>{value}</h2>})
            }
        </div>
    )
}

export default F2