import React, {useState} from 'react'

function AddTodoForm({addNewTodo}) {

const [addTodo, setAddTodo] = useState('')

const handleTodo = (e) => {
    e.preventDefault()
    addNewTodo(addTodo)

    setAddTodo ('')
}



    return (
        <form onSubmit={handleTodo}>

            <label>Ajouter Todo</label>
            <input type='text' value={addTodo} 
                onChange={(e) => setAddTodo(e.target.value)}></input>
            <input type='submit'></input>

   

        </form>
        
        /*Si c'était une class : 
        <input type="text" value={this.state.addTodo} 
        onChange={e => {this.setAddTodo({
            addTodo : e.target.value})}
        } */
    )
}

export default AddTodoForm

/* useState partie 2 */