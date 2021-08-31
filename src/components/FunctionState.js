import React, { useState } from 'react'


const FunctionState = () => {


    const [counter, setCounter] = useState(0)

    const addOne = () => {
        setCounter(prevCounter => prevCounter + 1)
    }

    /*
    méthode plus simpliste
    const addOne = () => {
        setCounter(counter + 1)
    }
    
    */

    return (
        <div>
             <p>Function State: {counter}</p>
             <button onClick={addOne}>State dans fonction</button>
        </div>
    )
}

/* 
il est possible de mettre la fonction 
directement dans l'évènement onClick tel que
<button onClick={() => setCounter(prevCounter => prevCounter +1)}>State dans fonction</button>
*/


export default FunctionState

/* useState partie 1 */


