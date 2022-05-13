import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo';
import Appform from '../Appform';
import GetCompTasks from '../BackEndComponents/GetCompTasks';

function TodoList(props) {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
    ReactDOM.render(
      <React.StrictMode>
        <Appform />
      </React.StrictMode>,
      document.getElementById('root')
    );
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  function buttonn() {
    if (props.showb) {
      return (<button className="todo-button" onClick={() => addTodo({ text: 'New Todo' })}>Add Todo</button> );
    } else {
      return ;
    }
  }

  

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  return (
    <>
        <div className="w3-row">
          <div className="w3-twothird w3-container ">
            <h1 style={{fontSize:"32px"}} >{props.name}</h1>
          </div>
          <div className='buttonlist w3-third w3-container'>
              {buttonn()}
          </div>
        </div>
      
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />

      <GetCompTasks />
    </>
  );
}

export default TodoList;
