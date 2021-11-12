import React, {useState} from 'react'

const Form = ({ addTodo }) => {

    const [value, setValue] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
        addTodo(value);
    }

     /* dans le onChange on peut aussi mettre la fonction 'handleChange'
    qu'on écrira ainsi :
    const handlechange = e => {
            setValue(e.target.value)
    } 

    */

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={e => setValue(e.target.value)}/>
            <button>envoyer</button>
        </form>
    )
}

export default Form
