// On clicking a Button.
function E2(){
    function handleSubmit(e){
        alert("Welcome To LJKU.")
    }
    return(
        <div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default E2