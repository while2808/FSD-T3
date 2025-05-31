// write a code to print Car's brand Name & its model which ase passed as props using JSON.
function P2(props){
    return(
        <div>
            <ul>
                <li>{props.name}</li>
                <li>{props.model}</li>
            </ul>
        </div>
    )
}

export default P2