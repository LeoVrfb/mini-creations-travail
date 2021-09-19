import React from 'react'

function Modal ({cache, visible}) {

    const change = visible ? ( 

        <React.Fragment>
    <div>
        <button onClick={cache}>clique moi</button>
        
    </div>
        </React.Fragment>
    ) : null;

    return change
} 


export default Modal
