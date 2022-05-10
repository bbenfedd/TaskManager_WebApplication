import React from "react";
import { useState } from "react";
import "./App.css";
import FormInput from "./components/FormInput";
import ReactDOM from "react-dom";
import App from "./App";

const Appform = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "Name",
      type: "text",
      placeholder: "Type Name",
      errorMessage: "Name should be 3-16 characters and shouldn't include any special character!",
      label: "Type Name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "Description",
      type: "",
      placeholder: "Write a description for the project",
      errorMessage: "",
      label: "Type a description",
      pattern: "^[A-Za-z0-9]{5,}$",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
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
      <form className="form_form" onSubmit={handleSubmit}>
        <h1 className="h1_form">Project</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button className="button_button">Submit</button>
      </form>
    </div>
  );
};

export default Appform;
