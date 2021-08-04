import React from 'react'

export function TodoItem({ todo, toggleTodo }) {
    // HACER OTRO DESTRUCTURING Y SACAR LOS DATOS
    const { id, task, completed} = todo;

    const handleTodoClick = () => {
        toggleTodo(id);
    };

    return (
        <li>
            <input type="checkbox" onChange={handleTodoClick} />
            {task}
        </li>
    )
}
