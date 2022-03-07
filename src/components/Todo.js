import React, { useState } from 'react';

const Todo = ({ todo, todoLists, setTodoLists }) => {
    const { completed, id } = todo
    const [completedTask, setCompletedTask] = useState(completed)

    const completeHandler = () => {
        if (completedTask === false) {

            todoLists.filter(el => el.id === id).completed = true
            setCompletedTask(true)
            todo.completed = true
        }
        else {
            setCompletedTask(false)
            todo.completed = false
        }
        completedHandlerLocalStorage(id)
    }
    const handleDelete = () => {
        setTodoLists(todoLists.filter(el => el.id !== id))

    }
    const completedHandlerLocalStorage = (id) => {
        const allItem = JSON.parse(localStorage.todoLists)

        allItem.map(el => {
            if (el.id === id) {
                el.completed = !el.completed
            }
        })
        localStorage.setItem("todoLists", JSON.stringify(allItem))
    }
    return (

        <div className='todo'>
            <li className={`todo-item ${completedTask === true && "completed"}`}>{todo.task}</li>
            <button className='complete-btn' onClick={completeHandler} > <i className='fas fa-check'></i></button>
            <button className='trash-btn' onClick={handleDelete}> <i className='fas fa-trash'  ></i></button>
        </div>
    );
};

export default Todo;