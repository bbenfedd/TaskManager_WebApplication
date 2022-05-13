import React from 'react';
import './App.css';
import TodoListTasks from './components/TodoListTasks';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">

      <div className="w3-row">
        <div className="w3-quarter w3-container">
            <div className='todo-app'>
              <TodoList name="Projects" bool="true" />
            </div>
          </div>
        <div className="w3-quarter w3-container">
          <div className='todo-app'>
            <TodoListTasks showb={true} name="TODO Tasks" bool="true" />
          </div>
        </div>
        <div className="w3-quarter w3-container">
          <div className='todo-app'>
            <TodoListTasks showb={false} name="In Progress Tasks" bool="false" />
          </div>
        </div>
        <div className="w3-quarter w3-container">
          <div className='todo-app'>
            <TodoListTasks showb={false} name="Finished Tasks" bool="false" />
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
