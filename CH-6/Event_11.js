// double clicking to button and display on pop up box.
function E4(){
    function handleSubmit(e){
        alert("Welcome To Lju Yash")
    }
    return(
        <div>
            <button onDoubleClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default E4