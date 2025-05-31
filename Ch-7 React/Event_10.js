// write react script to display values in console while changing in textbox.
function E3(){
    function handleChange(e){
        // console.log(document.getElementById("1").value)
        console.log(e.target.value)
    }
    return(
        <div class="n">
            Name : <input type="text" name="n1" id="1" onChange={handleChange}></input>
        </div>
    )
}

export default E3