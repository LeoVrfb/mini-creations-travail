import React from 'react'
import useIncrement from './useIncrement'

function Compteur() {

    const count = useIncrement(0, 10)

    return (
        <div>
            <button >incrementer {count}</button>
        </div>
    )
}

export default Compteur
