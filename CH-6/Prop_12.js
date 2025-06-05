// props => properties => attributes
// XML components
// used for passing data from parent to child.
function P1(props){
    return(
        <div>
            <ul>
                <li>{props.name}</li>
                <li>{props.rollnum}</li>
                <li>{props.marks}</li>
            </ul>
        </div>
    )
}
export default P1