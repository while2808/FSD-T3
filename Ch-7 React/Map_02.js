// array of alphabets capital letters print on browser.
function Map2(){
    const a = ['a','b','c','d','e']
    return(
        <div>
            {
                a.map((value)=>{return<h2>{value.toUpperCase()}</h2>})
            }
        </div>
    )
}

export default Map2;