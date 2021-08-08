import React, {useReducer} from 'react'

const initialState = 0;

const reducer = (state, action) => {
        switch(action) {
            case 'increment':
                return state + 1
            case'decrement' :
                return state - 1
            case'reinitialiser' :
                return initialState

                default:
                    return state
        }
}

function Count() {

    
    const [count, dispatch] = useReducer(reducer, initialState)


    return (
        <div>
            
            <h1>{count}</h1>
            <button onClick={() => dispatch('increment')}>+</button>
            <button onClick={() => dispatch('decrement')}>-</button>
            <button onClick={() => dispatch('reinitialiser')}>0</button>
        </div>
    )
}

export default Count

/* Pour incrémenter 2 compteurs, voire la video 11 de DonkeyGeek */
