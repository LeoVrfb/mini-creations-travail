import React, { useState } from 'react'
import AddTodoForm from './AddTodoForm'
import {v4 as uuid} from 'uuid'

function Todo() {

    const [todos, setTodos] = useState([
        
        {id: 1, todo : 'acheter du lait'},
        {id: 2, todo : 'acheter du pain'},
        {id: 3, todo : 'acheter du beurre'}
        
    ])

     
    const [warning, setWarning] = useState(false)

    const myTodos = todos.map (todo => {
        return (
            <li className="list-group-item" key="todo.id">{todo.todo}</li>
        )
    })

    const addNewTodo = (newTodo) => {

        if(newTodo !== '') {

                warning && setWarning(false);

            setTodos([...todos, {
                id: uuid(),
                todo: newTodo
            }])
        } else {
            setWarning(true);
        }
    }
   
    const warningMsg = warning && <div role='alert'>Veuillez indiquer un Todo</div>


    return (
        <div>
            {warningMsg}
            <h1 className='text-center'>{todos.length} To-dos</h1>
            <ul>
                {myTodos}
            </ul>
            <AddTodoForm addNewTodo={addNewTodo}/>
        </div>
        
    )
}

export default Todo

/* useState partie 2 */

