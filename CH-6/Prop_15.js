// array of object through print other page.
function P4(props){
    const a = props.d
    return(
        <div>
            {
                a.map((value)=>{    
                    return(
                        <ul>
                            <li>{"Name : " + value.name}</li>
                            <li>{"Price : " + value.price}</li>
                            <li>{"Brand : " + value.brand}</li>
                            <li>{"Quantity : " + value.quantity}</li>
                            <li>{"Rating : " + value.rating}</li>
                        </ul>
                    )
                })
            }
        </div>
    )
}

export default P4