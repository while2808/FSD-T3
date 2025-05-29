function Map5(){
    const arr = [1,2,3,4,5,6,7,8,9,10];
    return(
        <div>
            {
                arr.map((value)=>{
                    if(value>3){
                        return(<h2>{value}</h2>)
                    }
                })
            }
        </div>
    )
}

export default Map5