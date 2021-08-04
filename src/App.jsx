import React, { Fragment, useState, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid'
import { TodoList } from './components/TodoList';

export function App() {
    // EL ESTADO SE LLAMARA TODOS Y LO QUE LO MODIFICA setTODOS
    const [todos, setTodos] = useState([{id: 1, task: 'Tarea 1', completed: false }]);
    
    // CREO EL USE REF

    const todoTaskRef = useRef();


    const toggleTodo = (id) => {
        const newTodos = [...todos];
        const todo = newTodos.find((todo) => todo.id === id);
        // SI ESTABA TRUE LA PONEMOS A FALSE Y SI ESTABA FALSE LA PONEMOS A TRUE
        todo.completed = !todo.completed;
        setTodos(newTodos);
    };

    // DECLARO LA FUNCION HANDLE CON UNA ARROWFUNCTION
    const handleTodoAdd = () => {
        const task = todoTaskRef.current.value;
        // VALIDAMOS SI LO QUE ESTAMOS RECIBIENDO ES UN STRING VACIO NOS SALIMOS
        if (task === '') return;

        // UTILIZAMOS SETTODOS PARA AGREGAR NUEVA TAREA
        setTodos((prevTodos) => {
            return [ ...prevTodos, {id: uuidv4(), task, completed: false} ]
        });

        // ESTA LINEA LIMPIA EL INPUT LUEGO DE AGREGAR UNA TAREA
        todoTaskRef.current.value = null;
    };

    const handleClearAll = () => {
        const newTodos = todos.filter((todo) => !todo.completed);
        setTodos(newTodos);
    };
 
    return (
    <Fragment>
        <TodoList todos={ todos } toggleTodo={toggleTodo}/>
        <input ref={todoTaskRef} type="text" placeholder="Nueva Tarea"/>
        <button onClick={handleTodoAdd}>Agregar</button>
        <button onClick={handleClearAll}>Eliminar</button>
        <div>Te quedan {todos.filter((todo) => !todo.completed).length} tareas por terminar</div>
    </Fragment>
    )
}