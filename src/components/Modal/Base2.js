import React, {useState} from 'react'

function Base2() {

    const [change, setChange] = useState(false)

    const afficheButton = () => {
        setChange(!change)
    }

    const button = change ? 
    (<div> <button onClick={afficheButton}>clique moi encore</button> </div>) : '';
    
    
    return (
        <div>
            <button onClick={afficheButton}>clique moi</button>
            {button}
        </div>
    )
}

export default Base2
