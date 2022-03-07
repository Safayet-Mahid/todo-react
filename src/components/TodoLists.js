import React from 'react';
import Todo from './Todo';

const TodoLists = ({ todoLists, setTodoLists, displayTodo }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {
                    displayTodo.map(todo => <Todo
                        key={todo.id}
                        todo={todo}
                        todoLists={todoLists}
                        setTodoLists={setTodoLists}
                    ></Todo>)
                }
            </ul>
        </div>
    );
};

export default TodoLists;