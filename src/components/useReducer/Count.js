import React, {useReducer} from 'react'

const initialState = {
    
    countOne: 0,
    countTwo: 0
};

const reducer = (state, action) => {
        switch(action.type) {
            case 'increment':
                return {...state, countOne: state.countOne + action.value}
            case'decrement' :
                return {...state, countOne: state.countOne - action.value}
                case 'increment2':
                    return {...state, countTwo: state.countTwo + action.value}
                case'decrement2' :
                    return {...state, countTwo: state.countTwo - action.value}
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
            
            <h1>{count.countOne}</h1>

            <div>
                <button onClick={() => dispatch({type:'increment', value: 1})}>+</button>
                <button onClick={() => dispatch({type:'decrement', value: 1})}>-</button>
            </div>

            <h1>{count.countTwo}</h1>
            <div>
                <button onClick={() => dispatch({type:'increment2', value: 1})}>+</button>
                <button onClick={() => dispatch({type:'decrement2', value: 1})}>-</button>
            </div>
           
            <div>
            <button onClick={() => dispatch({type:'reinitialiser'})}>0</button>
            </div>
            

        </div>
    )
}

export default Count


/*  */