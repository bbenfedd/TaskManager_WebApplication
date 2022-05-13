import React from "react";
import { useState } from "react";
import "./App.css";
import ReactDOM from "react-dom";
import App from "./App";
import axios from 'axios';
import PostComp from './BackEndComponents/PostComp.js';


const Appform = () => {
  const [values, setValues] = useState({
    name: "",
    description: "",
   
  });

  var state = {
    name: '',
    description: '',
  }


  const handleChange = event => {
    let project = this.state;
    project[event.target.name] = event.target.value;
  this.setState({ project });
}



  const inputs = [
    {
      id: 1,
      name: "Name",
      type: "text",
      placeholder: "Type Name",
      errorMessage: "Name should be 3-16 characters and shouldn't include any special character!",
      label: "Type Name",
      
      required: true,
    },
    {
      id: 2,
      name: "Description",
      type: "",
      placeholder: "Write a description for the project",
      errorMessage: "",
      label: "Type a description",
     
      required: true,
    },
  ];

  var jsonData =  {

 
    "name": "Projet aymane",
    "description": "Projet 4 Description"

    
    }

 

 

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/api/projects', { name:this.state.name,description:this.state.description})
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
    
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById('root')
    );
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    
  };

  return (
    <div className="appform">
      <PostComp />
    </div>
  );
};

export default Appform;
