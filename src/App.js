import { useState, useRef } from "react"
import Todo from "./components/Todo";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todos, setTodos] = useState([{ id: uuidv4(), text: 'Javascript', isDone: false },
  { id: uuidv4(), text: 'react', isDone: false }]);

  const todoTextRef = useRef();

  function addTodoHandler() {
    const text = todoTextRef.current.value;
    setTodos(previousValues => {
      return [...previousValues, {
        id: uuidv4(), text: text, isDone: false
      }];
    })
    todoTextRef.current.value = null;
  }

  function doneHandler(id) {
    const newTodos = todos.filter(todo => {
      return todo.id !== id;
    });

    setTodos(newTodos);
  }

  return (
    <div>
      <h1>My Todos</h1>
      <input className="textbox" type="text" ref={todoTextRef} name="todoText" />
      <button className="btn" onClick={addTodoHandler}>Add Todo</button>
      {
        todos.map(todo => {
          return <Todo key={todo.id} id={todo.id} text={todo.text} doneHandler={doneHandler} />
        })
      }
    </div>
  );
}

export default App;


