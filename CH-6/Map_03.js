// grater thn 3 of all number print.
function Map3(){
    const arr = [1,2,3,4,5,6,7,8]
    return(
        <div>
            {
                arr.map((value)=>{return<h2>{value}*5={value*5}</h2>})
            }
        </div>
    )
}

export default Map3