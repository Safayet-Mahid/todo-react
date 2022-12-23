import { useEffect, useState } from 'react';
import './App.css';
import Form from "../src/components/Form";
import TodoLists from './components/TodoLists';

function App() {
  const [todoLists, setTodoLists] = useState([])
  const [selectDisplay, setSelectDisplay] = useState('')
  const [displayTodo, setDisplayTodo] = useState([])

  useEffect(() => {
    if (localStorage.key("todolists")) {
      const dataFromDevice = localStorage.getItem("todoLists")
      setTodoLists(JSON.parse(dataFromDevice) || [])
    }
  }, [])
  useEffect(() => {
    switch (selectDisplay) {
      case "completed": {
        setDisplayTodo(todoLists.filter(el => el.completed === true))
        break;
      }
      case "uncompleted": {
        setDisplayTodo(todoLists.filter(el => el.completed === false))
        break;
      }
      default:
        setDisplayTodo(todoLists)
    }

  }, [selectDisplay, todoLists])

  const saveToLocalStorage = () => {
    localStorage.setItem("todoLists", JSON.stringify(todoLists))
  }

  useEffect(() => {
    saveToLocalStorage()
  }, [todoLists])
  return (
    <div className="App">
      <header>
        <h1>Safayet's Todo List</h1>
      </header>
      <Form todoLists={todoLists} setTodoLists={setTodoLists} setSelectDisplay={setSelectDisplay}></Form>
      <TodoLists todoLists={todoLists} setTodoLists={setTodoLists} displayTodo={displayTodo}></TodoLists>
    </div>
  );
}

export default App;
