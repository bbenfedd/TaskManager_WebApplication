import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Services from './pages/services';
import Contact from './pages/contact';
import SignUp from './pages/signup'


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
      <div class="w3-row">
        <div class="w3-quarter w3-container">
            <div className='todo-app'>
              <TodoList name="Projects" bool="true" />
            </div>
          </div>
        <div class="w3-quarter w3-container">
          <div className='todo-app'>
            <TodoList name="TODO Tasks" bool="true" />
          </div>
        </div>
        <div class="w3-quarter w3-container">
          <div className='todo-app'>
            <TodoList name="In Progress Tasks" bool="false" />
          </div>
        </div>
        <div class="w3-quarter w3-container">
          <div className='todo-app'>
            <TodoList name="Finished Tasks" bool="false" />
          </div>
        </div>
      </div>

    </div>
    
  );
}


export default App;
