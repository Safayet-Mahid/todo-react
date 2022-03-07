import React, { useEffect, useState } from 'react';

const Form = ({ todoLists, setTodoLists, setSelectDisplay }) => {
    const [task, setTask] = useState("")

    const taskHandler = (e) => {
        setTask(e.target.value)

    }
    const todoListsHandler = (e) => {
        // eslint-disable-next-line no-lone-blocks
        {
            task.length !== 0 && (setTodoLists(
                [
                    ...todoLists,
                    {
                        task: task,
                        completed: false,
                        id: Math.random() * 1000
                    }
                ]
            ))
        }

        setTask("")

        e.preventDefault()
    }
    const selectedDisplayHandler = (e) => {
        setSelectDisplay(e.target.value)
    }




    return (
        <form>
            <div>
                <input type="text" value={task} className="todo-input" onChange={taskHandler} />
                <button className="todo-button" type="submit" onClick={todoListsHandler}>
                    <i className="fas fa-plus-square"></i>
                </button>
            </div>
            <div className="select">
                <select name="todos" className="filter-todo" onChange={selectedDisplayHandler} >
                    <option value="all" >All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
};

export default Form;