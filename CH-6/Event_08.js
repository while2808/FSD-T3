// Syntax Of Event:-
// function E1(){
//     function handleClick(){

//     }
//     return(
//         <div>
//             <button onClick={handleClick}>Click Me</button>
//         </div>
//     )
// }


// Write react component to display alert box with "Welcome To LJU" by clicking on submit button(form submission)=>onSubmit
function E1(){
    function handleSubmit(e){
        alert("Welcome To LJKU.")
    }
    return(
        <form onSubmit={handleSubmit}>
            <button type="submit">Submit</button>
        </form>
    )
}

export default E1