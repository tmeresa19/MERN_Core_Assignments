/* This code is a React component that defines a simple todo list application. It imports the
`useState` hook from the React library, which allows the component to manage state. The component
defines two pieces of state: `newTodo`, which represents the text of a new todo item, and `todos`,
which is an array of all the todo items. */
import { useState } from "react";
import './App.css'

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleNewTodoSubmit = (e) => {
    e.preventDefault();

    if (newTodo.length === 0) {
      return;
    }

    //to combine the todo item along with it's status, it's good to choose object/dictionary since it's a key:value pair with names rather than tracking the todo items by it's index
    //hence, chose obj/dictionary data structure type of collection
    const todoItem = {
      text: newTodo, //newTodo is the above state
      complete: false,
    };

    setTodos([...todos, todoItem]); //rightnow, todos is empty. So, on top of whatever the todos has, add newTodo to it
    setNewTodo("");
  };

  const handleTodoDelete = (deleteIndex) => {
    const filteredTodos = todos.filter((_todo, i) => {
      //since filter takes two parameters and I needed the id, that's why I used todo. However, since I have't used it and I don't need it, I used underscore next to it like: _todo
      return i !== deleteIndex; //if this is true, keep the todo. Otherwise, delete the todo
    });
    setTodos(filteredTodos); //just like map, filteredTodos reeturns an array
  };

  const handleToggleComplete = (index) => {
    const updatedTodos = todos.map((todo, i) => {
      if (index === i) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      } else {
        return todo;
      }
    });

    setTodos(updatedTodos);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <form
        onSubmit={(e) => {
          handleNewTodoSubmit(e);
        }}
      >
        <input
          onChange={(e) => {
            setNewTodo(e.target.value);
          }}
          type="text"
          value={newTodo}
        />
        <div>
          <button>Add</button>
        </div>
      </form>

      <hr />

      {todos.map((todo, i) => {
        const todoClasses = ["bold", "italic"];

        if (todo.complete) {
          todoClasses.push("line-through");
        }

        return (

          <div key={i}>
            <input
              onChange={(e) => {
                handleToggleComplete(i);
              }}
              checked={todo.complete}
              type="checkbox"
            />
            <span className={todoClasses.join(" ")}>{todo.text}</span>
            <button
              onClick={(e) => {
                handleTodoDelete(i);
              }}
              style={{ marginLeft: "15px" }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
